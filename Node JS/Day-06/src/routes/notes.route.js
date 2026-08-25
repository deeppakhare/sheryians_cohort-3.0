const express = require("express");
const {
  createNotesController,
  getAllNotesController,
  getSingleNoteController
} = require("../controllers/notes.controller");

const router = express.Router();

router.post("/create", createNotesController);

router.get("/allNotes", getAllNotesController);
router.get("/:id", getSingleNoteController);

module.exports = router;
