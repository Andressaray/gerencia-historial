import {Request, Response, NextFunction} from 'express'

import { fail } from '@base/response'
import { decodeToken } from '@base/src/utils/generateToken'

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorization = req.headers['authorization']
    const token = await decodeToken(authorization|| '')
    if (!token) {
      throw Error('Error no estas logueado')
    }
    // @ts-ignore
    req.idUser = token.id;
    next()
  } catch (error) {
    fail({
      res,
      text: error.message
    })
  }
}

export default verifyToken