const User = require('../models/user.model');
const debug = require("debug")("app:user-controller");

const controller = {};

controller.findAll = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(201).json({users});
   } catch (error) {
        debug({error});
        return res.status(500).json({ error: "El servidor ha fallado "});
   } 
}

module.exports = controller;