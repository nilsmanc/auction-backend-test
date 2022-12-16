import RoomModel from '../models/Room.js'

export const getRoom = async (req, res) => {
  try {
    const roomId = req.params.id

    const room = await RoomModel.findById(roomId).exec()
    res.json(room)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get room',
    })
  }
}

export const createRoom = async (req, res) => {
  try {
    const doc = new RoomModel({
      title: req.body.title,
    })
    const room = await doc.save()

    res.json(room)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to create room',
    })
  }
}

export const setStartTime = async (req, res) => {
  try {
    const roomId = req.params.id

    await RoomModel.updateOne(
      {
        _id: roomId,
      },
      {
        startTime: req.body.startTime,
      },
    )

    res.json({
      success: true,
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to update room',
    })
  }
}
