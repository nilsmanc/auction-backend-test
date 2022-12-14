import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { MONGO_DB } from './variables.js'

mongoose.set('strictQuery', false)

mongoose
  .connect(MONGO_DB)
  .then(() => console.log('Database OK'))
  .catch((err) => console.log('Database error', err))

const app = express()

app.use(express.json())
app.use(cors())

app.listen(4444, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log('Server OK')
})
