import 'dotenv/config';
import express, { json } from 'express';
import cors from 'cors';

import routes from './routes/index';

const app = express();
app.use(cors());
app.use(json());
app.use(routes);

app.listen(3333, () => console.log('Servidor iniciado!!!'));
