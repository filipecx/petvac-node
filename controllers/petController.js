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
        
    }
}