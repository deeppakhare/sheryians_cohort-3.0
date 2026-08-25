const express = require("express");
const {
  createNotesController,
  getAllNotesController,
  getSingleNoteController,
  updateNoteController,
  deleteNoteController,
} = require("../controllers/notes.controller");

const router = express.Router();

// Creeate Note api

router.post("/create", createNotesController);
// Read all Notes api

router.get("/allNotes", getAllNotesController);

// Read single Notes api

router.get("/:id", getSingleNoteController);

// update note api
router.put("/:id", updateNoteController);

// delete note api
router.delete("/:id", deleteNoteController);

module.exports = router;
