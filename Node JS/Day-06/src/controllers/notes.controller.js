const NotesModel = require("../models/notes.model");

const createNotesController = async (req, res) => {
  try {
    let { title, description } = req.body;

    const newNote = await NotesModel.create({
      title,
      description,
    });

    return res.status(201).json({
      message: "Note created successfully",
      data: newNote,
    });
  } catch (error) {
    console.log("Error in creation", error);
  }
};

const getAllNotesController = async (req, res) => {
  try {
    const allNotes = await NotesModel.find();

    res.status(200).json({
      message: "All notes featched",
      data: allNotes,
    });
  } catch (error) {
    console.log("Error in to get notes api", error);
  }
};

module.exports = { createNotesController, getAllNotesController };
