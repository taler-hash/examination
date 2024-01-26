const jwt = require('jsonwebtoken')
const models = require('../models')
const bcrypt = require('bcrypt')
require('dotenv').config()

module.exports = {

  display(req, res) {
    res.render('login')
  },

  async login(req, res) {
    const { username, password } = req.body

    const user = await models.User.findOne({
      where: {
        username: username
      }
    })

    if (!user) {
      res.status(422).json({message: 'User not Found'})

      return
    } 
    const hashedPassword = user.dataValues.password
    const validate = bcrypt.compareSync(password, hashedPassword)

    if (!validate) {
      res.status(422).json({message: 'Password not matched'})
    }

    delete user.dataValues.password
    delete user.dataValues.created_at

    const token = jwt.sign(user.dataValues, process.env.JWT_SECRET_KEY)
    res.cookie('token', token)
    res.send('success')
  }
}