const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const connectDB = require("./config/db");
app.use(express.json());
app.use(cors());
connectDB();
const PORT = 8080;
const petRoutes = require("./routes/petRoutes");
const vacRoutes = require("./routes/vacRoutes");


app.use("/", petRoutes);
app.use("/", vacRoutes);


mongoose.connection.once('open', () => {
    app.listen(PORT, () => {
        console.log("Server is running on port " + PORT + " you better catch it!");
    })
})
