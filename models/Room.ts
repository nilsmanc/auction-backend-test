import mongoose, { Document } from 'mongoose'

interface Room extends Document {
  title: string
  startTime: number
}

const RoomSchema = new mongoose.Schema<Room>(
  {
    title: {
      type: String,
      required: true,
    },
    startTime: Number,
  },
  { timestamps: true },
)

export default mongoose.model<Room>('Room', RoomSchema)
