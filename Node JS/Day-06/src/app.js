const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("ok got it");
});

app.post("/create", async (req, res) => {
  try {
    let { title, description } = req.body;

    const newNote = await NotesModel.create({
      title,
      description,
    });

    return res.status(201).json({
        message:"Note created successfully",
        data:newNote
    });
  } catch (error) {
    console.log("Error in creation", error);
  }
});


module.exports = app;
