const express = require('express');
const UsersHandler = require('./handler');
const routes = require('./routes');

const users = (container) => {
  const router = express.Router();
  const usersHandler = new UsersHandler(container);

  routes(usersHandler).forEach((route) => {
    const method = route.method.toLowerCase();
    router[method](route.path, route.handler);
  });

  return router;
};

module.exports = users;
