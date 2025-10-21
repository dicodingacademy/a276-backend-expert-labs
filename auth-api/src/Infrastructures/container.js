/* istanbul ignore file */

import { createContainer } from 'instances-container';

// external agency
import { nanoid } from 'nanoid';
import bcrypt from 'bcrypt';
import pool from './database/postgres/pool.js';

// service (repository, helper, manager, etc)
import UserRepositoryPostgres from './repository/UserRepositoryPostgres.js';
import BcryptPasswordHash from './security/BcryptPasswordHash.js';

// use case
import AddUserUseCase from '../Applications/use_case/AddUserUseCase.js';
import UserRepository from '../Domains/users/UserRepository.js';
import PasswordHash from '../Applications/security/PasswordHash.js';

// creating container
const container = createContainer();

// registering services and repository
container.register([
  {
    key: UserRepository.name,
    Class: UserRepositoryPostgres,
    parameter: {
      dependencies: [
        {
          concrete: pool,
        },
        {
          concrete: nanoid,
        },
      ],
    },
  },
  {
    key: PasswordHash.name,
    Class: BcryptPasswordHash,
    parameter: {
      dependencies: [
        {
          concrete: bcrypt,
        },
      ],
    },
  },
]);

// registering use cases
container.register([
  {
    key: AddUserUseCase.name,
    Class: AddUserUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'userRepository',
          internal: UserRepository.name,
        },
        {
          name: 'passwordHash',
          internal: PasswordHash.name,
        },
      ],
    },
  },
]);

export default container;
