const express = require("express");
const {
  createNotesController,
  getAllNotesController,
  getSingleNoteController,
  updateNoteController,
  deleteNoteController,
  singleEntityUpdaTEcONTROLLER
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

// update note api
router.patch("/:id/single", singleEntityUpdaTEcONTROLLER);

module.exports = router;
