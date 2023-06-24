//import mongoose
const mongoose = require("mongoose");


//route handler
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    category:{
        type:String,
        required:true
    },
    // image:{
    //     type:String
    // },
    userId:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    }

    // likes: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Like",
    // }],

    // comments: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Comment",
    // }]
},

{
    timestamps:true
}
);




//export
module.exports = mongoose.model("Post", postSchema);