const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    username:{
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    email:{
        type:String,
        trim:true,
        required: true,
        unique: true
    },
    password:{
        type: String,
        trim: true,
        required: true
    },
    pets:{
        type: Array,
        trim: true,
        default: []
    },
    publications:{
        type: Number,
        trim: true,
        default: 0
    },
    posts:{
        type: Array,
        trim:true,
        default:[]
    }
},{ timestamps: false})

module.exports = mongoose.model("User", userSchema);