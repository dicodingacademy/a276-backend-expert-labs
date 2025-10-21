const { Router } = require('express');

const routes = (handler) => {
  const router = Router();

  router.post('/', handler.postUserHandler);

  return router;
};

module.exports = routes;
