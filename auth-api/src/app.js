import config from './Commons/config.js';
import createServer from './Infrastructures/http/createServer.js';
import container from './Infrastructures/container.js';

const start = async () => {
  const app = await createServer(container);
  const host = config.app.host || '0.0.0.0';
  const port = Number(config.app.port) || 3000;

  const server = app.listen(port, host, () => {
    const address = server.address();
    if (address && typeof address === 'object') {
      console.log(`server start at http://${address.address}:${address.port}`);
    } else {
      console.log('server started');
    }
  });
};

start();
