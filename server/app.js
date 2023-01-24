import express from 'express';
import morgan from 'morgan';

import { toursRouter, usersRouter } from './routes/index.js';

const app = express();

// 1) MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ROUTES
app.use('/api/v1/tours', toursRouter);
app.use('/api/v1/users', usersRouter);

// SERVER
const startServer = () => {
  const port = 3000;
  app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });
};
startServer();
