import {Router} from 'express';

const userRouter = Router();

userRouter.get('/', (req,res) => res.json({message:'Acessei o user'}));

export default userRouter;
