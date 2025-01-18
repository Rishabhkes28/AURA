const mongoose = require('mongoose');
const { type } = require('os');

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    fullName:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
        minglength: 6
    },
    profilePic:{
        type: String,   
        default:" "
    }
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);
