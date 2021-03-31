import {Router} from 'express';

const deliveryRouter = Router();

deliveryRouter.get('/', (req,res) => res.json({message:'Acessei o delivery'}));

export default deliveryRouter;
