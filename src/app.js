const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  //   // creating a new instance of the user model
  const user = new User(req.body);

  try {
    await user.save();
    res.send("user added successfully");
  } catch (error) {
    res.status(400).send("Error saving the user data" + error.message);
  }
});

// Get user by email
app.get("/user", async (req, res) => {
  // const userEmail = req.body.emailId;

  try {
    const users = await User.findOne({});
    res.send(users);
    // const users = await User.find({ emailId: userEmail });
    // if (users.length === 0) {
    //   res.status(404).send("user not found");
    // } else {
    //   res.send(users);
    // }
  } catch (error) {
    res.status(404).send("something went wrong");
  }
});

// Feed API - GET /feed - get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(404).send("something went wrong");
  }
});

// delete the user by userId
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;

  try {
    const user = await User.findByIdAndDelete({ _id: userId });
    res.send("user deleted successfully");
  } catch (error) {
    res.status(404).send("something went wrong");
  }
});


  // update data of the user by id
  app.patch("/user", async (req, res) => {
    const userId = req.body.userId;
    const data = req.body;
    console.log(data);
    try {
      const user = await User.findByIdAndUpdate({ _id: userId }, data, {
        returnDocument: "before",
      });
      console.log(user);
      res.send("user data updated successfully");
    } catch (error) {
      res.status(404).send("something went wrong");
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
    console.log("Database is not connected" + error.message);
  });
