const { Router } = require('express')
const router = Router() 
const { authCheck } = require('../middleware')

const EmployeeController = require('../controllers/EmployeeController.js')
const AuthController = require('../controllers/AuthController.js')

router.get('/login', AuthController.display)
router.post('/api/login', AuthController.login)

router.use(authCheck)
router.get('/employees', EmployeeController.read)
router.get('/employee/add', EmployeeController.displayCreate)
router.get('/employee/update/:id', EmployeeController.displayUpdate)
router.post('/api/employee/add', EmployeeController.create)
router.post('/api/employee/update', EmployeeController.update)
router.post('/api/employee/delete', EmployeeController.delete)

module.exports = router

