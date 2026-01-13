import express from 'express';

const routes = (controller) => {
  const router = express.Router();

  router.post('/', controller.postUser);

  return router;
};

export default routes;
