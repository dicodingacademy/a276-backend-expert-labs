import UsersHandler from './handler.js';
import routes from './routes.js';

const users = (container) => {
  const usersHandler = new UsersHandler(container);

  return routes(usersHandler);
};

export default users;
