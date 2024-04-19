const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://asif123:asif123@cluster0.5fhq120.mongodb.net/mern?retryWrites=true&w=majority&appName=Cluster0');
console.log("mongodb Conncted");

module.exports = mongoose;