var express = require("express");
var router = express.Router();

const validators = require("../../../validators/Pet-CRUD/createPet.validators");
const runValidations = require("../../../validators/index.middleware");
const controller = require("../../../controllers/Pet-CRUD/createPet.controller");

router.post("/",
    validators.createPetValidator,
    runValidations,
    controller.create
    );

module.exports = router;