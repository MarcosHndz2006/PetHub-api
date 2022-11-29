const User = require("../../models/user.model");
const debug = require("debug")("app:createUser.controller");

const controller = {}

controller.create  = async (req, res) => {
    try {
        const {username, email, password, pets, publications, posts} = req.body;

        const user = await User.findOne({ $or: [{username:username},{email:email}]})
        
        if(user){
            return res.status(500).json({error: "El usuario ya existe"});
        }

        const newUser = new User({
            username:username,
            email:email,
            password:password,
            pets:pets,
            publications:publications,
            posts:posts
        });
    
        const oneUser = await newUser.save();
    
        return res.status(201).json({oneUser});   

    } catch (error) {
        debug({error});
        return res.status(500).json({ error: "El servidor falló "});
    }
}

module.exports = controller;