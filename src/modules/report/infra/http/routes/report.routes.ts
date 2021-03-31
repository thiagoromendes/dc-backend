import {Router} from 'express';

const reportRouter = Router();

reportRouter.get('/', (req,res) => res.json({message:'Acessei o report'}));

export default reportRouter;
