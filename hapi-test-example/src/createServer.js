const Hapi = require('@hapi/hapi');

const createServer = () => {
  const server = Hapi.server({
    host: 'localhost',
    port: 5000,
  });

  server.route([
    {
      method: 'GET',
      path: '/hello',
      handler: () => {
        return { value: 'Hello World' };
      },
    },
    {
      method: 'GET',
      path: '/hello/{name}',
      handler: (request) => {
        const { name } = request.params;
        return { value: `Hello ${name}`};
      },
    },
  ]);

  return server;
};

module.exports = createServer;
