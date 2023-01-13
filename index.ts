import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import { getRoomUsers } from './controllers/UserController'
import { createRoom, getRoom, setStartTime } from './controllers/RoomController'

mongoose.set('strictQuery', false)

mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => console.log('Database OK'))
  .catch((err) => console.log('Database error', err))

const app = express()

app.use(express.json())
app.use(cors())

app.get('/users/:id', getRoomUsers)

app.get('/rooms/:id', getRoom)
app.post('/rooms', createRoom)
app.patch('/rooms/:id', setStartTime)

app.listen(process.env.PORT || 4444, () => {
  console.log('Server OK')
})
