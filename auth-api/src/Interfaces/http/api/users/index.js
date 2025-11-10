import routes from './routes.js';
import UsersController from './controller.js';

const users = (container) => {
  const usersController = new UsersController(container);

  return routes(usersController);
};

export default users;
