/* istanbul ignore file */

// external agency
const { nanoid } = require('nanoid');
const bcrypt = require('bcrypt');
const pool = require('./database/postgres/pool');

// service (repository, helper, manager, etc)
const UserRepositoryPostgres = require('./repository/UserRepositoryPostgres');
const BcryptPasswordHash = require('./security/BcryptPasswordHash');

// use case
const AddUserUseCase = require('../Applications/use_case/AddUserUseCase');

const serviceInstanceContainer = {
  userRepository: new UserRepositoryPostgres(pool, nanoid),
  passwordHash: new BcryptPasswordHash(bcrypt),
};

const useCaseInstanceContainer = {
  addUserUseCase: new AddUserUseCase({
    userRepository: serviceInstanceContainer.userRepository,
    passwordHash: serviceInstanceContainer.passwordHash,
  }),
};

// export all instance
module.exports = {
  ...serviceInstanceContainer,
  ...useCaseInstanceContainer,
};
