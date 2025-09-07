const express = require("express");
const requestRouter = express.Router();
const { userAuth } = require("../middlewares/auth");
const ConnectionRequest = require("../models/connectionRequest");

requestRouter.post(
  "/request/send/:status/:touserId",
  userAuth,
  async (req, res) => {
    try {
      const fromUserId = req.user._id;
      const toUserId = req.params.touserId;
      const status = req.params.status;

      const allowedStatus  = ["ignored", "interested"];
      if(!allowedStatus.includes(status)){
        return res.status(400).json({message: "Invalid status type: " + status});
      }

      const connectionRequest = new ConnectionRequest({
        fromUserId,
        toUserId,
        status,
      });

      const data = await connectionRequest.save();

      res.json({
        mesasge: `Connection Request Sent Successfully !!`,
        data,
      });
    } catch (error) {
      res.status(400).send("ERROR : " + error.message);
    }
  }
);

module.exports = requestRouter;
