//Creating a server with get method


const express = require("express");

const app = express();


app.get("/", function (req, res) {
  res.send("Data aa gaya");
  console.log("Hii friends");
});


app.get("/idli", function (req, res) {
  res.send("Welcome to south");
});



app.get("/chowmin", function (req, res) {
  res.send("Welcome to chinese");
});


app.get("/dish", function (req, res) {
  var dishes = {
    chinese: "chowmin",
    south: "idli",
  };
  res.send(dishes);
});



app.listen(3000, () => {
  console.log("listening to the port 3000");
});
