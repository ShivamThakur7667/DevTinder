const express = require("express");
const { userAuth } = require("../middlewares/auth");
const ConnectionRequest = require("../models/connectionRequest");

const userRouter = express();
const USER_SAFE_DATA = ["firstName", "lastName", "imageURL", "skills"];

// Get all the pending request for the loggedIn User
userRouter.get("/user/requests/recevied", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;

    const connectionRequest = await ConnectionRequest.find({
      toUserId: loggedInUser._id,
    }).populate("fromUserId", USER_SAFE_DATA);
    // }).populate("fromUserId", ["firstName", "lastName", "imageURL", "skills"]); // here we can see the name of the request user(firstName, lastName)

    res.send(connectionRequest);
  } catch (error) {
    res.status(404).send("ERROR: " + error.mesasge);
  }
});

userRouter.get("/user/connections", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;

    // shivam -> connectionRequest -> elon musk -> only if accepted other-wise not
    // then it should show me in the connection list

    const connectionRequests = await ConnectionRequest.find({
      $or: [
        { toUserId: loggedInUser._id, status: "accepted" },
        { fromUserId: loggedInUser._id, status: "accepted" },
      ],
    }).populate("fromUserId", USER_SAFE_DATA);
    res.json({ data: connectionRequests });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = userRouter;
