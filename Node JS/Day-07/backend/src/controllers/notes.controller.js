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

const getSingleNoteController = async (req, res) => {
  try {
    let noteId = req.params.id;
    const singleNote = await NotesModel.findById(noteId);

    res.status(200).json({
      message: "note is featched",
      data: singleNote,
    });
  } catch (error) {
    console.log("Error in get note api", error);
  }
};

const updateNoteController = async (req, res) => {
  try {
    let noteId = req.params.id;
    let body = req.body;
    const updateNote = await NotesModel.findByIdAndUpdate(noteId, body, {
      new: true,
    });

    return res.status(200).json({
      message: "Updated successfully",
      data: updateNote,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal api error",
    });
  }
};

const deleteNoteController = async (req, res) => {
  try {
    let noteId = req.params.id;
    await NotesModel.findByIdAndDelete(noteId);

    return res.status(200).json({
      message: "Note deleted successfully",
    });

    
  } catch (error) {
    res.status(500).json({
      message: "Invalid api found ",
    });
  }
};

const singleEntityUpdaTEcONTROLLER = async (req,res) => {
  try {
    let noteId = req.params.id;
    let body = req.body;
    const updateNote = await NotesModel.findByIdAndUpdate(noteId, body, {
      new: true,
    });
    return res.status(200).json({
      message: "Updated successfully",
      data: updateNote,
    });
    
  } catch (error) {
    res.status(500).json({
      message: "Invalid api found ",
    });
  }
}

module.exports = {
  createNotesController,
  getAllNotesController,
  getSingleNoteController,
  updateNoteController,
  deleteNoteController,
  singleEntityUpdaTEcONTROLLER
};
