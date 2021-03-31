import {Router} from 'express';

const dashboardRouter = Router();

dashboardRouter.get('/', (req,res) => res.json({message:'Acessei o dashboard'}));

export default dashboardRouter;
