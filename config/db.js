const mongoose = require("mongoose");
const colors = require("colors");

//CONNECT
const connectDB = async (req, res) => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(
            `Connected To Mongodb ${mongoose.connection.host}`.white.bgGreen
        );
    } catch (error) {
        console.log(`Mongodb Error ${error}`.bgRed);
    }
};

module.exports = connectDB;
