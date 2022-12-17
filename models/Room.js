import mongoose from 'mongoose'

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    startTime: Number,
  },
  { timestamps: true },
)

export default mongoose.model('Room', RoomSchema)
