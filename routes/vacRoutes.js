const express = require("express");
const router = express.Router();
const vacController = require("../controllers/vacController");

router.get('/vaccines', vacController.getVacsFromPet);

module.exports = router;