const UsersHandler = require('./handler');
const routes = require('./routes');

const users = (container) => {
  const usersHandler = new UsersHandler(container);

  return routes(usersHandler);
};

module.exports = users;
