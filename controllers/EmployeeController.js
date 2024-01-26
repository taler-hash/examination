const models = require('../models')


module.exports = {
  create(req, res) {
    
  },

  async read(req, res) {
    res.render('employees')
  },

  update(req, res) {

  },

  delete(req, res) {
    models.Employee.destroy({
      where: {
        id : req.body.id
      }
    })
  }


}