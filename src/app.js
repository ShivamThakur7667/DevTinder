const express = require("express");

const app = express();

app.use("/", (req, res) =>{
    res.send("Hi, I am Shivam");
})








app.listen(3000, (req, res) => {
  console.log("server is listing on port 3000");
});
