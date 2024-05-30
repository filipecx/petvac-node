const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.DB_STRING)
        console.log(`Conectado ao banco de dados: ${conn.connection.host}`)
    }catch(error){
        console.log(error)
    }
}


module.exports = connectDB