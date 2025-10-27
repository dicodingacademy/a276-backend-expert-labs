import express from 'express';

const routes = (handler) => {
  const router = express.Router();

  router.post('/', handler.postUserHandler);

  return router;
};

export default routes;
