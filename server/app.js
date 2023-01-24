import express from 'express';
import morgan from 'morgan';

import { createRequestTime } from './middlewares/index.js';
import { toursRouter, usersRouter } from './routes/index.js';

const app = express();

// 1) MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('../public'));
app.use(createRequestTime);

// ROUTES
app.use('/api/v1/tours', toursRouter);
app.use('/api/v1/users', usersRouter);

export default app;
