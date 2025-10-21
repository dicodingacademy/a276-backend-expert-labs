require('dotenv').config();
const createServer = require('./Infrastructures/http/createServer');
const container = require('./Infrastructures/container');
const config = require('./Commons/config');

const start = async () => {
  const app = await createServer(container);
  const { host, port } = config.app;

  app.listen(port, host, () => {
    console.log(`server start at http://${host}:${port}`);
  });
};

start();
