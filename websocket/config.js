const { Server } = require('socket.io')
const models = require('../models')

const io = new Server(3001, {
  transports: ['websocket', 'polling'],
  rejectUnauthorized: false,
  cors: {
    origin: ["http://localhost:3000", "https://localhost:3000"],
    credentials: true
  }
})

io.of('users')
  .on('connection', async socket => {
    console.log('a user connected')
    
    setInterval(async () => {
      const employees = await models.Employee.findAll()
      socket.emit('display', employees)
    }, 1000)
  })