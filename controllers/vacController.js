const Vaccine = require("../models/vacSchema");

module.exports = {
    getVacsFromPet: async (req, res) => {
        try{
            let vaccinesList = [];
            vaccinesList = await Vaccine.find({petName: req.params.petName});
            res.json(vaccinesList);
        }catch(e){
            console.error(e);
        }
    },
    addVac: async (req, res) => {
        console.log(req.body.firstShot)
        try{
            const newVac = new Vaccine({
                name: req.body.name,
                firstShot: req.body.firstShot,
                secondShot: req.body.secondShot,
                vetName: req.body.vetName,
                petName: req.body.petName
            });
            let success = await newVac.save();
            success ? res.sendStatus(201): res.sendStatus(503);
        }catch(e){
            console.error(e);
        }
    },
    removeVac: async (req, res) => {
        try{
            let sucsess = await Vaccine.findByIdAndDelete(req.params.id);
            sucsess ? res.sendStatus(204): res.sendStatus(503);
        }catch(e){
            console.error(e);
        }
    }
}