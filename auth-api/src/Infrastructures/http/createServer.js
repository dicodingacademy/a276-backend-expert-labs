import express from 'express';
import ClientError from '../../Commons/exceptions/ClientError.js';
import DomainErrorTranslator from '../../Commons/exceptions/DomainErrorTranslator.js';
import users from '../../Interfaces/http/api/users/index.js';
import authentications from '../../Interfaces/http/api/authentications/index.js';

const createServer = async (container) => {
  const app = express();

  app.use(express.json());

  app.use('/users', users(container));
  app.use('/authentications', authentications(container));

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

    console.error(err);

    res.status(500).json({
      status: 'error',
      message: 'terjadi kegagalan pada server kami',
    });
  });

  return app;
};

export default createServer;
