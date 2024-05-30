const express = require("express");
const app = express();
const PORT = 8080;
const petRoutes = require("./routes/petRoutes")


app.use("/", petRoutes);


app.listen(PORT, () => {
    console.log("Server is running on port " + PORT + " you better catch it!");
})