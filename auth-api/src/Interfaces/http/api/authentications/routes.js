import { Router } from 'express';

const routes = (handler) => {
  const router = Router();

  router.post('/', handler.postAuthentication);
  router.put('/', handler.putAuthentication);
  router.delete('/', handler.deleteAuthentication);

  return router;
};

export default routes;
