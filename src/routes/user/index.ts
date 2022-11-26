import express from 'express';

import verifyToken from '@base/src/middlewares/user';
import { register, login, getUser } from '../../controllers/user';

const router = express.Router();

router.get('/', verifyToken, getUser);
router.post('/oauth', register);
router.post('/login', login);

export default router;
