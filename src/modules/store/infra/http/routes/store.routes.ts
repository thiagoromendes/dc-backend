import {Router} from 'express';

const storeRouter = Router();

storeRouter.get('/', (req,res) => res.json({message:'Acessei o store'}));

export default storeRouter;
