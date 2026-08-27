const express = require("express");
const { route } = require("../app");
const uploads = require("../config/multer.congif");

const router = express.Router()

router.post("/create",uploads);

module.exports = router