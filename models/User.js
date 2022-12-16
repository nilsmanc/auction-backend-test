import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
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
})

export default mongoose.model('User', UserSchema)
