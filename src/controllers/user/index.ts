import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';

import { User } from '@interfaces/user';
import prisma from '@base/prisma';
import { success, fail } from '@base/response';
import { getUserById, getUserEmail } from '@base/src/helpers/user';
import { generateToken } from '@base/src/utils/generateToken';

const register = async (req: Request, res: Response) => {
  try {
    const password = bcrypt.hashSync(req.body.password, 10);
    const dataUser: User = {
      card_id: req.body.cardId,
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      photo: req.body.photo,
      age: req.body.age,
      profile_id: req.body.profile,
      password
    };
    const user = await prisma.user.create({
      data: dataUser
    });
    success({
      res,
      body: user,
      text: 'User created succesfully'
    });
  } catch (error: any) {
    fail({
      res,
      text: error.message
    });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const dataUser = {
      email: req.body.email,
      password: req.body.password
    };
    const user = await getUserEmail(dataUser.email);
    if (!user.length) {
      throw Error('Usuario no registrado');
    }
    const isPassword = bcrypt.compareSync(dataUser.password, user[0].password);
    if (!isPassword) {
      throw Error('Contrasena o usuario no valido');
    }

    const token = generateToken(user[0].id);
    success({
			res,
      body: {
				token
      },
			text: 'Login successfull',
    });
  } catch (error: any) {
    fail({
      res,
      text: error.message
    });
  }
};

const getUser = async (req: Request, res: Response) => {
	try {
    // @ts-ignore
		const id = req.idUser
    // @ts-ignore
		const user = await getUserById(id)
		success({
			res,
			body: {
				user
			},
			text: 'Datos del usuario'
		})
	} catch (error: any) {
		fail({
      res,
      text: error.message
    });
	}
}

export { register, login, getUser };
