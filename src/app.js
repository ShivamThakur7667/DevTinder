const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth, (req, res) => {
  res.send("admin is verified");
});

app.post("/user/login", (req, res) => {
  res.send("user loggged in successfully");
});

app.get("/user/data", userAuth, (req, res) => {
  res.send("user data sent");
});
app.get("/admin/getAllData", (req, res) => {
  res.send("All data sent");
});
app.get("/admin/deleteUser", (req, res) => {
  res.send("delete a  user");
});

app.listen(3000, (req, res) => {
  console.log("server is listing on port 3000");
});
