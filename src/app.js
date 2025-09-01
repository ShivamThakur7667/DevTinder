const express = require("express");

const app = express();


app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.params);
  res.send({ firstname: "shivam", lastname: "thakur" });
});



app.listen(3000, (req, res) => {
  console.log("server is listing on port 3000");
});
