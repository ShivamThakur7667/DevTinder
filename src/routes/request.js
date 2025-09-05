const express = require("express");
const { userAuth } = require("../middlewares/auth");


const requestRouter = express.Router();

requestRouter.post("/sendConnectionRequest", userAuth, async (req, res) => {
  const user = req.user;

  console.log("Sending a Connection request");
  res.send(user.firstName + " sent the connection Request! ");
});

module.exports = requestRouter;
