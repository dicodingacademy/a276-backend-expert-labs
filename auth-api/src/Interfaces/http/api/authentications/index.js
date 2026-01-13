import routes from './routes.js';
import AuthenticationsController from './controller.js';

const authentications = (container) => {
  const authenticationsController = new AuthenticationsController(container);
  return routes(authenticationsController);
};

export default authentications;
