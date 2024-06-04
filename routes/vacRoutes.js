const express = require("express");
const router = express.Router();
const vacController = require("../controllers/vacController");

router.get('/vaccines/:petName', vacController.getVacsFromPet);
router.post('/vaccines', vacController.addVac);
router.delete('/vaccines/:id', vacController.removeVac);

module.exports = router;