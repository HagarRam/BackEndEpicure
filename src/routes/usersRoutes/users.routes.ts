import express, { Request, Response } from 'express';
import {
	getAllUsers,
	newUser,
	getoldUser,
} from '../../controllers/users.controllers';
const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.post('/create', getoldUser);
userRouter.post('/', newUser);
export default userRouter;
