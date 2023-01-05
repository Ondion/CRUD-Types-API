import express from 'express';
import 'express-async-errors';
import getError from './routes/getError';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);
app.use(getError);

export default app;
