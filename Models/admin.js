const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const adminSchema = new Schema({
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
    role: {
        type: String,
        trim: true,
        required: true,
        default: "normal"
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
const Admin = mongoose.model('Admin',adminSchema);
module.exports = Admin

