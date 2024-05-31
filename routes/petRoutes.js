const express = require("express");
const router = express.Router();
const petController = require("../controllers/petController");

router.get('/pets', petController.getAllPets);
router.post('/pets', petController.addPet);


module.exports = router