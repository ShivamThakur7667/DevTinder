const express = require("express");

const app = express();

// app.use("/route", rH, [rH2, rH3], rH4, rH5);

app.get(
  "/user",
  (req, res, next) => {
    console.log("Handling the route user !");
    next();
  },

  (req, res, next) => {
    console.log("Handling the route user 2!");
    // res.send("2nd response");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user 3!");
    // res.send("3nd response");
    next();
  },

  (req, res, next) => {
    console.log("Handling the route user 4!");
    res.send("4nd response");
    // next();
  }
);

app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.params);
  res.send({ firstname: "shivam", lastname: "thakur" });
});

app.listen(3000, (req, res) => {
  console.log("server is listing on port 3000");
});
