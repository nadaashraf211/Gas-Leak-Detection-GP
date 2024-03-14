var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var userRoute = require("./route/user.route");

var app = express();
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use("/api/v1", userRoute);

app.get("/", (req, res) => {
  res.send("Server Started ..........");
});

app.listen(9000, () => {
  console.log("Server Start .........");
});
