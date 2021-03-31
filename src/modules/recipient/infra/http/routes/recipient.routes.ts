import {Router} from 'express';

const recipientRouter = Router();

recipientRouter.get('/', (req,res) => res.json({message:'Acessei o recipient'}));

export default recipientRouter;
