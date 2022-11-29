const mongoose = require("mongoose");
const schema = mongoose.Schema;

const postSchema = new schema({
    description:{
        type:String,
        trim:true,
        required:true
    },
    image:{
        type:String,
        trim:true,
        required:true
    }
},{ timestamps:false });

module.exports = mongoose.model("Post", postSchema)