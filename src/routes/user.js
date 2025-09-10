const express = require("express");
const { userAuth } = require("../middlewares/auth");
const ConnectionRequest = require("../models/connectionRequest");

const userRouter = express();

// Get all the pending request for the loggedIn User
userRouter.get("/user/requests/recevied", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;

    const connectionRequest = await ConnectionRequest.find({
      toUserId: loggedInUser._id,
    }).populate("fromUserId", ["firstName", "lastName"]); // here we can see the name of the request user(firstName, lastName)

    res.send(connectionRequest);
  } catch (error) {
    res.status(404).send("ERROR: " + error.mesasge);
  }
});

module.exports = userRouter;
