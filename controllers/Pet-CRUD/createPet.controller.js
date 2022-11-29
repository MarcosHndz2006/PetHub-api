var Pet = require("../../models/pet.model");
var debug = require("debug")("app:createPet.controller");

var controller = {};

controller.create = async (req, res) => {
    try {
        const {name, type, breed, publications} = req.body;
        
        const newPet = new Pet({
            name:name,
            type:type,
            breed:breed,
            publications:publications
        });
    
        const pet = await newPet.save();
    
        if(!pet){
            return res.status(409).json({error: "no se pudo crear la mascota"});
        }
        return res.status(200).json({pet});        
    } catch (error) {
        debug({error});
        return res.status(500).json({error: "Fallo del servidor"});
    }
}

module.exports = controller;