const mongoose = require("mongoose");

async function connectDB() {
    await mongoose.connect("mongodb+srv://yash:OJcw1NpRtboI1t91@evo-1.57kfe1m.mongodb.net/Project-0");

   console.log("connected to the DB");
   
} 

module.exports = connectDB;