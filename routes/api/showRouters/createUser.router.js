var express = require("express");
var router = express.Router();
var controller = require("../../../controllers/User-CRUD/createUser.controller");
var runValidations = require("../../../validators/index.middleware");
var validators = require("../../../validators/User-CRUD/createUser.validators");

router.post("/",
    validators.createUserValidator,
    runValidations,
    controller.create
    )

module.exports = router;