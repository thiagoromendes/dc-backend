import {Router} from 'express';

const dutRouter = Router();

dutRouter.get('/', (req,res) => res.json({message:'Acessei o dut'}));

export default dutRouter;
