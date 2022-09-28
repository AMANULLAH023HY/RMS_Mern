const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    mail:String,
    password:String,
    type:String,
    CName:String,
})

module.exports = mongoose.model('user',userSchema);