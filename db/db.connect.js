const mongoose = require("mongoose");
require("dotenv").config();

const mongoUri = process.env.MONGODB;

const initializeDatabase = async () => {
    mongoose
     .connect(mongoUri)
     .then((error) => {
         console.log("Connected to database.");
     })
     .catch((error) => console.log("Error connecting to database.", error));
};

module.exports = { initializeDatabase };