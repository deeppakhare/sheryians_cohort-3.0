import mongoose from "mongoose";

const usersScheme = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3,
        maxLength:50
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})

const userModel = mongoose.model("users-2",usersScheme)

export default userModel;