const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  // creating a new instance of the user model
  const user = new User({
    firstName: "rohit",
    lastName: "sharma",
    emailId: "sharma@gmail.com",
    password: "456789",
  });

  try {
    await user.save();
    res.send("user added successfully");
  } catch (error) {
    res.status(400).send("Error saving the user data" + error.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(3000, (req, res) => {
      console.log("server is listening on port 3000");
    });
  })
  .catch((error) => {
    console.log("Database is not connected");
  });
