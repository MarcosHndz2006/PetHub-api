const Pet = require('../models/pet.model');
const debug = require("debug")("app:pet-controller");

const controller = {};

controller.findAll = async (req, res) => {
    try {
        const pets = await Pet.find();
        return res.status(200).json({pets});    
    } catch (error) {
        debug({error});
        return res.status(500).json({error:"Fallo del servidor"});
    }
}


module.exports = controller;