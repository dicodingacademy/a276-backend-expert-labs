const routes = (handler) => ([
  {
    method: 'POST',
    path: '/authentications',
    handler: handler.postAuthenticationHandler,
  },
]);

module.exports = routes;
