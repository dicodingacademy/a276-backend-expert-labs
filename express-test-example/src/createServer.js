import express from 'express';

const createServer = () => {
  const app = express();

  app.get('/hello', (_req, res) => {
    res.json({ value: 'Hello World' });
  });

  app.get('/hello/:name', (req, res) => {
    const { name } = req.params;
    res.json({ value: `Hello ${name}` });
  });

  return app;
};

export default createServer;
