const express = require("express");
const { route } = require("../app");

const router = express.Router()

router.post("/create",create);

module.exports = router