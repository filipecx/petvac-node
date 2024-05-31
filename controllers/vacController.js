const Vaccine = require("../models/vacSchema");

module.exports = {
    getVacsFromPet: async (req, res) => {
        try{
            res.send('vacinas');
        }catch(e){
            console.error(e);
        }
    }
}