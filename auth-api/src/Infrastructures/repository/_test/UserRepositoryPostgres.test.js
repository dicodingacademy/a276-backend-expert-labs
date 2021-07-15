const UsersTableTestHelper = require('../../../../tests/UsersTableTestHelper');
const InvariantError = require('../../../Commons/exceptions/InvariantError');
const UserRepository = require('../../../Domains/users/UserRepository');
const NewUser = require('../../../Domains/users/entities/NewUser');
const AddedUser = require('../../../Domains/users/entities/AddedUser');
const pool = require('../../database/postgres/pool');
const UserRepositoryPostgres = require('../UserRepositoryPostgres');

describe('UserRepositoryPostgres', () => {
  it('should be instance of UserRepository domain', () => {
    const userRepositoryPostgres = new UserRepositoryPostgres({}, {}); // dummy dependency

    expect(userRepositoryPostgres).toBeInstanceOf(UserRepository);
  });

  describe('behavior test', () => {
    afterEach(async () => {
      await UsersTableTestHelper.cleanTable();
    });

    afterAll(async () => {
      await pool.end();
    });

    describe('verifyAvailableUsername function', () => {
      it('should throw InvariantError when username not available', async () => {
        // Arrange
        await UsersTableTestHelper.addUser({ username: 'dicoding' }); // memasukan user baru dengan username dicoding
        const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});

        // Action & Assert
        await expect(userRepositoryPostgres.verifyAvailableUsername('dicoding')).rejects.toThrowError(InvariantError);
      });

      it('should not throw InvariantError when username available', async () => {
        // Arrange
        const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});

        // Action & Assert
        await expect(userRepositoryPostgres.verifyAvailableUsername('dicoding')).resolves.not.toThrowError(InvariantError);
      });
    });

    describe('addUser function', () => {
      it('should persist new user and return added user correctly', async () => {
        // Arrange
        const newUser = new NewUser({
          username: 'dicoding',
          password: 'secret_password',
          fullname: 'Dicoding Indonesia',
        });
        const fakeIdGenerator = () => '123'; // stub!
        const userRepositoryPostgres = new UserRepositoryPostgres(pool, fakeIdGenerator);

        // Action
        const addedUser = await userRepositoryPostgres.addUser(newUser);

        // Assert
        const users = await UsersTableTestHelper.findUsersById('user-123');
        expect(addedUser).toStrictEqual(new AddedUser({
          id: 'user-123',
          username: 'dicoding',
          fullname: 'Dicoding Indonesia',
        }));
        expect(users).toHaveLength(1);
      });
    });
  });
});
