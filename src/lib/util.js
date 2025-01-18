const jwt = require('jsonwebtoken');

const generateToken = (userId, res) =>{
  
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });
    res.cookie("jwt", token, {
        maxAge: 3600000,
        httpOnly: true, //cookie cannot be accessed by javascript
        sameSite: "strict", //CSRF attcaks cross-site request forgery attacks
        secure: process.env.NODE_ENV !== "development" ? true : false
    })

    return token;
} 

module.exports = {generateToken};