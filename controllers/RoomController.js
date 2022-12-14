import RoomModel from '../models/Room.js'

export const getRoom = async (req, res) => {
  try {
    const roomId = req.params.id

    const room = RoomModel.findById(roomId).exec()
    res.json(room)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get room',
    })
  }
}
