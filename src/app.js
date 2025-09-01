const express = require("express");

const app = express();

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("something went wrong");
  }
});

app.get("/getUserData", (req, res) => {
  // try {
  throw new Error("sdcvsdkjcvnk");
  res.send("User data sent");
  // } catch (error) {
  // res.status(500).send("something went wrong");
  // }
});

app.listen(3000, (req, res) => {
  console.log("server is listing on port 3000");
});
