import app from './app.js';

const startServer = () => {
  const port = 3000;
  app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });
};
startServer();
