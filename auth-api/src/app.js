require('dotenv').config();
const createServer = require('./Infrastructures/http/createServer');
const injections = require('./Infrastructures/injections');

const start = async () => {
  const server = await createServer(injections);
  await server.start();
  console.log(`server start at ${server.info.uri}`);
};

start();
