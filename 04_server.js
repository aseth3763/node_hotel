const express = require("express");
const app = express();
const db = require("./04_db")
const bodyParser = require("body-parser")


app.use(bodyParser.json())     // using body parser (body parser is a middleware)

app.get("/", function (req, res) {
  res.send("Data aa gaya phirse");
});

const personRoutes  = require("./routes/personroutes")
app.use("/person",personRoutes)

const menuRoutes = require('./routes/menuroutes')
app.use("/menu",menuRoutes)

app.listen(3000, () => {
  console.log("listening to the port 3000");
});
