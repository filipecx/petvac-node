const express = require("express");
const router = express.Router();
const petController = require("../controllers/petController");

router.get('/', petController.sendHi);

module.exports = router