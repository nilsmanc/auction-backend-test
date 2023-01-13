import { Request, Response } from 'express'

import UserModel from '../models/User'

export const getRoomUsers = async (req: Request, res: Response) => {
  const roomId = req.params.id

  try {
    const users = await UserModel.find({ room: { _id: roomId } }).exec()

    res.json(users)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get users',
    })
  }
}
