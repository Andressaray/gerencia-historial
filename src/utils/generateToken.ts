import * as jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();
const SECRET_KEY = process.env.SECRET_KEY;

const generateToken = (id: number) => {
  const token: string = jwt.sign(
    {
      id
    },
    // @ts-ignore
    SECRET_KEY,
    { expiresIn: '48h' }
  )
  return token
};

const decodeToken = (token: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    jwt.verify(token, SECRET_KEY, (err, id) => {
      if (err) {
        return reject(err);
      }
       // @ts-ignore
      resolve(id);
    });
  });
};

export {
  generateToken,
  decodeToken,
}
