import {Router} from 'express';

import dashboardRouter from '@modules/dashboard/infra/http/routes/dashboard.routes';
import deliveryRouter from '@modules/delivery/infra/http/routes/delivery.routes';
import dutRouter from '@modules/dut/infra/http/routes/dut.routes';
import recipientRouter from '@modules/recipient/infra/http/routes/recipient.routes';
import reportRouter from '@modules/report/infra/http/routes/report.routes';
import storeRouter from '@modules/store/infra/http/routes/store.routes';
import userRouter from '@modules/user/infra/http/routes/user.routes';

const routes = Router();

routes.get('/', (req,res)=> res.json({message:'Acesso home'}));

routes.use('/dashboard', dashboardRouter);
routes.use('/delivery', deliveryRouter);
routes.use('/dut', dutRouter);
routes.use('/recipient', recipientRouter);
routes.use('/report', reportRouter);
routes.use('/store', storeRouter);
routes.use('/user', userRouter);

export default routes;
