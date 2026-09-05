import express from "express";
import mongoose, { mongo } from "mongoose";

const userScheme = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const userModel = mongoose.model("users-2",userScheme);

export default userModel;