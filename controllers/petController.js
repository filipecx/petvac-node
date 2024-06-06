const Pet = require('../models/petSchema');


module.exports = {
    getAllPets: async (req, res) => {
        try{
            const pets = await Pet.find();
            res.json(pets);
        }catch(e){
            console.error(e);
        }
    },
    getPet: async (req, res) => {
        try{
            const pet = await Pet.find({name: req.params.petName});
            res.json(pet);
        }catch(e){
            console.error(e);
        }
    },
    addPet: async (req, res) => {      
        try{
            const newPet = new Pet({
                name: req.body.name,
                picture: req.body.picture,
                race: req.body.race
            })
            let success = await newPet.save();
            success? res.sendStatus(201): res.sendStatus(503);
        }catch(e){
            console.error(e);
        }
        
    },
    removePet: async (req, res) => {
        try{
            await Pet.deleteOne({_id: req.params.id});
            res.send("deleted");
        }catch(e){
            console.error(e);
        }
    },
    updatePet: async (req, res) => {
        try{
            console.log(req.body.id);
            res.send(req.body.id);
        }catch(e){
            console.error(e);
        }
    }
}