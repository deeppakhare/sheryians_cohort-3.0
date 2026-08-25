const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.mongodb_uri);
    console.log("Mono db connected");
  } catch (error) {
    console.log("error while connecting db", error);
  }
};

module.exports = connectDb;
