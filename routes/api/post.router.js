var express = require("express");
var router = express.Router();
var controller = require("../../controllers/post.controller");

router.get("/", controller.findAll);

module.exports = router;