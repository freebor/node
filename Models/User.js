const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        trim: true,
        required: true
    },
    firstname: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true
    },
    phoneNumber: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    status:{
        type: String,
        trim: true,
        default:"Active"
    }
},{timestamps:true});
const User = mongoose.model('User',userSchema);
module.exports = User

