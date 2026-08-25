const mongoose = require("mongoose")

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/notes-app");
        console.log("Mono db connected");
        
    } catch (error) {
        console.log("error while connecting db",error);
        
        
    }
} 