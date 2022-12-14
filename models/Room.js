import mongoose from 'mongoose'

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

export default mongoose.model('Room', RoomSchema)
