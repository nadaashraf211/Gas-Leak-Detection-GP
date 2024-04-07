var express = require("express");
const session = require("express-session");
var cors = require("cors");
var bodyParser = require("body-parser");
var userRoute = require("./route/user.route");

var app = express();
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60,
    },
  })
);

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
); // parse application/x-www-form-urlencoded
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
