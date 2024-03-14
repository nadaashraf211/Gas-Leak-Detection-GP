var express = require('express');
var router = express.Router();
var userController = require('../controller/user.controller');

router.post("/users/save", userController.saveUserData)

module.exports = router;