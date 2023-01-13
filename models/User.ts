import mongoose, { Document } from 'mongoose'

interface User extends Document {
  name: string
  room: string
  complex: boolean
  term: string
  guaranteeMonths: string
  paymentTerms: string
  price: string
  index: number
}

const UserSchema = new mongoose.Schema<User>({
  name: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
  complex: {
    type: Boolean,
    required: true,
  },
  term: {
    type: String,
    required: true,
  },
  guaranteeMonths: {
    type: String,
    required: true,
  },
  paymentTerms: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
})

export default mongoose.model<User>('User', UserSchema)
