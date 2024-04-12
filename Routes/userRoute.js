const express = require('express');
const userRouter = express.Router();

const {addANewUser, loginUser} = require("../Controllers/userController")

userRouter.post("/", addANewUser)
userRouter.post("/login", loginUser)

module.exports = userRouter