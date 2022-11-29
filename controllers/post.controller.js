var Post = require("../models/post.model");
var debug = require("debug")("app:post.controller");

const controller = {};

controller.findAll = async (req,res) => {
    try {
        const posts = await Post.find();

        if(posts.length == 0){
            return res.status(404).json({error: "No hay posts para mostrar"});
        }

        return res.status(200).json({posts});
        
    } catch (error) {
        debug({error});
        return res.status(500).json({error: "no se encontraron datos"});
    }
}

module.exports = controller;