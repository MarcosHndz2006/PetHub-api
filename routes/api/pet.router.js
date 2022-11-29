var express = require("express");
var router = express.Router();

const controller = require("../../controllers/pet.controller");
const deletePetRouter = require("./deleteRouters/deletePet.router");
const showPetRouter = require("./showRouters/showPet.router");
const createPetRouter = require("./showRouters/createPet.router");

router.get("/", controller.findAll);

router.use("/createPet", createPetRouter);
    
router.use("/searchPet", showPetRouter);

router.use("/deletePet", deletePetRouter);

module.exports = router;