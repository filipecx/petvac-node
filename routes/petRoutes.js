const express = require("express");
const router = express.Router();
const petController = require("../controllers/petController");

router.get('/pets', petController.getAllPets);
router.get('/pets/:petName', petController.getPet);
router.post('/pets', petController.addPet);
router.delete('/pets/:id', petController.removePet);
router.put('/pets/:petName', petController.updatePet);


module.exports = router