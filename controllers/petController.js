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
    addPet: async (req, res) => {      
        try{
            const newPet = new Pet({
                name: req.body.name,
                picture: req.body.picture,
                race: req.body.race
            })
            let saved = await newPet.save();
            res.send(saved);
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
            res.send(req.body.id);
        }catch(e){
            console.error(e);
        }
    }
}