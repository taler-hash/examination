const jwt = require('jsonwebtoken')
require('dotenv').config()

const authCheck = function (req, res, next) {
  const token = req.cookies.token
  try {
    jwt.verify(token, process.env.JWT_SECRET_KEY)
    next()
  } catch (err) {
    res.status(401).redirect('http://localhost:3000/login')
    return 
  }
} 

module.exports = authCheck