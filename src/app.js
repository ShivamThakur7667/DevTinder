const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const { validateSignUpData } = require("./utils/validation");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { userAuth } = require("./middlewares/auth");

app.use(express.json());
app.use(cookieParser());

app.post("/signup", async (req, res) => {
  try {
    // Validation of data 
    validateSignUpData(req);

    const { firstName, lastName, emailId, password } = req.body;

    // Encryption of password

    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);

    // creating a new instance of the user model
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });

    await user.save();
    res.send("user added successfully");
  } catch (error) {
    res.status(400).send("Error : " + error.message);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Invalid Credentials");
    }

    const isPasswordValid = await user.validatePassword(password);

    if (isPasswordValid) {

      const token = await user.getJWT() ;

      // Add the Token to cookie and send the response back to the user
      res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000),
      });

      res.send("Login Successfull!!");
    } else {
      throw new Error("Invalid Credentials");
    }
  } catch (err) {
    res.status(404).send("ERROR : " + err.message);
  }
});

app.get("/profile", userAuth, async (req, res) => {
  try {
    const user = req.user;

    // console.log(cookies);
    res.send(user);
  } catch (error) {
    res.status(404).send("ERROR : " + error.message);
  }
});

app.post("/sendConnectionRequest", userAuth, async (req, res) => {
  const user = req.user;

  // sending a connection request
  console.log("Sending a Connection request");
  res.send(user.firstName + " sent the connection Request! ");
});

connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(3000, (req, res) => {
      console.log("server is listening on port 3000");
    });
  })
  .catch((error) => {
    console.log("Database is not connected" + error.message);
  });
