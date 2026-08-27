const express = require("express")
const userRoute = require("./routes/user,routes")




app.use("/user", userRoute);

module.exports = app;