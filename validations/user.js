const models = require('../models')

module.exports = class ValidateUser {

  constructor(username, password) {
    this.username = username
    this.password = password
    this.errors = {
      username : null,
      password : null
    }
  }

  checkData() {
    !this.username ? this.errors.username = 'Username field is Required' : ''
    !this.password ? this.errors.password = 'Password field is Required' : ''
  }

  checkIfUserExist() {

  }

  validated() {
    this.checkData()

    return this.errors
  }
}