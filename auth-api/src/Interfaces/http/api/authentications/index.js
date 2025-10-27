import routes from './routes.js';
import AuthenticationsHandler from './handler.js';

const authentications = (container) => {
  const authenticationsHandler = new AuthenticationsHandler(container);
  return routes(authenticationsHandler);
};

export default authentications;
