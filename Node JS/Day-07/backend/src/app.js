const express = require("express");
const connectDb = require("./config/db");
const notesRoute = require("./routes/notes.route");
const app = express();

app.use(express.json());

connectDb();

app.get("/", (req, res) => {
  res.send("ok got it");
});

app.use("/notes", notesRoute);

module.exports = app;
