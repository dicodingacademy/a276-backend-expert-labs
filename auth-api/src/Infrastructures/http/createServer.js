const express = require('express');
const ClientError = require('../../Commons/exceptions/ClientError');
const DomainErrorTranslator = require('../../Commons/exceptions/DomainErrorTranslator');
const users = require('../../Interfaces/http/api/users');

const createServer = async (container) => {
  const app = express();

  app.use(express.json());

  app.use('/users', users(container));

  app.use((req, res) => {
    res.status(404).json({
      status: 'fail',
      message: 'resource not found',
    });
  });

  app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const translatedError = DomainErrorTranslator.translate(err);

    if (translatedError instanceof ClientError) {
      res.status(translatedError.statusCode).json({
        status: 'fail',
        message: translatedError.message,
      });
      return;
    }

    res.status(500).json({
      status: 'error',
      message: 'terjadi kegagalan pada server kami',
    });
  });

  return app;
};

module.exports = createServer;
