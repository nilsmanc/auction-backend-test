import { Request, Response } from 'express'

import RoomModel from '../models/Room'

export const getRoom = async (req: Request, res: Response) => {
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

export const createRoom = async (req: Request, res: Response) => {
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

export const setStartTime = async (req: Request, res: Response) => {
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
