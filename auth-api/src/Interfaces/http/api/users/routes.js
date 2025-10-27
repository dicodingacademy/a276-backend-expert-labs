import { Router } from 'express';

const routes = (handler) => {
  const router = Router();

  router.post('/users', handler.postUserHandler);

  return router;
};

export default routes;
