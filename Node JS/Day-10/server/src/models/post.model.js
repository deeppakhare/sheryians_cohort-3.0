import mongoose from "mongoose"

const postScheme = new mongoose.Schema({
    caption:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true,


    }
},{timestamps:true});

const postModel = mongoose.model("posts",postScheme)

export default postModel;