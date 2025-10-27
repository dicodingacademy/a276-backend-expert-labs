import express from 'express';

const routes = (handler) => {
  const router = express.Router();

  router.post('/users', handler.postUserHandler);

  return router;
};

export default routes;
