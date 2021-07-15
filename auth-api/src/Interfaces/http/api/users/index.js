const UsersHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'users',
  register: async (server, { injections }) => {
    const usersHandler = new UsersHandler(injections);
    server.route(routes(usersHandler));
  },
};
