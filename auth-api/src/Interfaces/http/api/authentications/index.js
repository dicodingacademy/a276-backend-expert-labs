const routes = require('./routes');
const AuthenticationsHandler = require('./handler');

module.exports = {
  name: 'authentications',
  register: async (server, { injections }) => {
    const authenticationsHandler = new AuthenticationsHandler(injections);
    server.route(routes(authenticationsHandler));
  },
};
