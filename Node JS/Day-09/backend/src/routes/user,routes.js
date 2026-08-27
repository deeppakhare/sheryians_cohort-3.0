const express = require("express");
const { route } = require("../app");
const uploads = require("../config/multer.congif");
const { create } = require("../../../../Day-07/backend/src/models/notes.model");

const router = express.Router()

router.post("/create",uploads.single("profilepc"),create);

module.exports = router