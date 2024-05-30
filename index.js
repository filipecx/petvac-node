const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/db");
connectDB();
const PORT = 8080;
const petRoutes = require("./routes/petRoutes");

app.use("/", petRoutes);


mongoose.connection.once('open', () => {
    app.listen(PORT, () => {
        console.log("Server is running on port " + PORT + " you better catch it!");
    })
})
