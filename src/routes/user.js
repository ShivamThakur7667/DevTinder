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

    const data = connectionRequest.map((row) => ({
      reqId: row._id,
      User: row.fromUserId,
    }));

    res.json({ data });
  } catch (error) {
    res.status(404).send("ERROR: " + error.message);
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
    })
      .populate("fromUserId", USER_SAFE_DATA)
      .populate("toUserId", USER_SAFE_DATA);

    // It will show that we filter out the Only essential
    console.log(connectionRequests);

    const data = connectionRequests.map((row) => {
      if (row.fromUserId._id.toString() === loggedInUser._id.toString()) {
        return row.toUserId;
      }
      return row.fromUserId;
    });

    res.json({ data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

userRouter.get("/feed", userAuth, async (req, res) => {
  try {
    // User should see all the user cards except
    // 1. his own card
    // 2. his connections
    // 3. ignored people
    // 4. already sent the connection request

    const loggedInUser = req.user;

    // find the all connection request (sent + recevied)
    const connectionRequests = await ConnectionRequest.find({
      $or: [{ fromUserId: loggedInUser._id }, { toUserId: loggedInUser._id }],
    }).select("fromUserId toUserId");

    const hideUsersFromFeed = new Set();
    connectionRequests
      .forEach((req) => {
        hideUsersFromFeed.add(req.fromUserId.toString());
        hideUsersFromFeed.add(req.toUserId.toString());
      })
      

    console.log(hideUsersFromFeed);

    res.send(connectionRequests);
    console.log(connectionRequests);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = userRouter;
