const express = require("express");

const app = express();

// this will only handle GET call to /user
app.get("/user", (req, res) => {
  res.send({ firstname: "shivam", lastname: "thakur" });
});

app.post("/user", async (req, res) => {
  console.log(req.body);

  // saving data to db
  res.send("Data successfully saved to the database !");
});

// this will match all the HTTP method API calls to /test
app.delete("/user", (req, res) => {
  res.send("Hello from the server !");
});

app.listen(3000, (req, res) => {
  console.log("server is listing on port 3000");
});
