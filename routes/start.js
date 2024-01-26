const { Router } = require('express')
const router = Router() 
const { authCheck } = require('../middleware')

const EmployeeController = require('../controllers/EmployeeController.js')
const AuthController = require('../controllers/AuthController.js')

router.get('/login', AuthController.display)
router.post('/api/login', AuthController.login)

router.use(authCheck)
router.get('/users', EmployeeController.read)
router.post('/api/user/add', EmployeeController.create)
router.post('/api/user/update', EmployeeController.update)
router.post('/api/user/delete', EmployeeController.delete)

module.exports = router

