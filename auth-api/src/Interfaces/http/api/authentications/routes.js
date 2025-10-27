import { Router } from 'express';

const routes = (handler) => {
  const router = Router();

  router.post('/authentications', handler.postAuthenticationHandler);
  router.put('/authentications', handler.putAuthenticationHandler);
  router.delete('/authentications', handler.deleteAuthenticationHandler);

  return router;
};

export default routes;
