const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String
    },

    address:{
        type:String
    },
    college:{
        type:String
    },
    postImage:{
        type:String    
    },
    linkedin:{
        type:String
    },
    github:{
        type:String
    }
    
},
{
    timestamps:true
});

module.exports = mongoose.model("user", userSchema);