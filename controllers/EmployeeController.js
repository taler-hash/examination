const models = require('../models')

module.exports = {
  displayCreate(req, res) {
    res.render('addEmployee')
  },
  async create(req, res) {
    await models.Employee.create({
      first_name : req.body.first_name,
      last_name: req.body.last_name,
      position: req.body.position
    })
  },

  async read(req, res) {
    res.render('employees')
  },

  async displayUpdate(req,res) {
    const employee = await models.Employee.findOne({
      where: {
        id: req.params.id
      }
    })
    res.render('updateEmployee', {employee: employee.dataValues})
  },

  async update(req, res) {
    await models.Employee.update({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      position: req.body.position
    }, {
      where: {
        id: req.body.id
      }
    })
  },

  delete(req, res) {
    models.Employee.destroy({
      where: {
        id : req.body.id
      }
    })
  }


}