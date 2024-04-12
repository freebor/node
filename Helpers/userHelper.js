const bcrypt = require('bcrypt');
const hashPassword = (password) =>{
    return bcrypt.hash(password, +process.env.SALT_ROUND)
}
const checkPassword = (givenPassword, savedPassword)=>{
    return bcrypt.compare(givenPassword, savedPassword)
}

module.exports = {hashPassword, checkPassword}
