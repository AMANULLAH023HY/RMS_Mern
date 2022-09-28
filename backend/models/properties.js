const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    agencyName:String,
    name:String,
    city:String,
    address:String,
    price:Number,
    rentSell:String,
    bhk:String,
    type:String,
    area:String,
    call:Number,
})

module.exports = mongoose.model('property',userSchema);