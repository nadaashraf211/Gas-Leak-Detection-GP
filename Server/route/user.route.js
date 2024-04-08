var express = require("express");
var router = express.Router();
var userController = require("../controller/user.controller");

router.get("/users/logout", userController.logout);
router.post("/users/save", userController.saveUserData);
router.get("/users/login", userController.login);
router.get("/users/", userController.Check);
module.exports = router;
