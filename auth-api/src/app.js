import 'dotenv/config';
import createServer from './Infrastructures/http/createServer.js';
import container from './Infrastructures/container.js';
import config from './Commons/config.js';

const start = async () => {
  const app = await createServer(container);
  const { host, port } = config.app;

  app.listen(port, host, () => {
    console.log(`server start at http://${host}:${port}`);
  });
};

start();
