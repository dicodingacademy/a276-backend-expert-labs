const AuthenticationsTableTestHelper = require('../../../../tests/AuthenticationsTableTestHelper');
const AuthenticationRepository = require('../../../Domains/authentications/AuthenticationRepository');
const pool = require('../../database/postgres/pool');
const AuthenticationRepositoryPostgres = require('../AuthenticationRepositoryPostgres');

describe('AuthenticationRepository postgres', () => {
  it('should be instance of AuthenticationRepository domain', () => {
    const authenticationRepository = new AuthenticationRepositoryPostgres();
    expect(authenticationRepository).toBeInstanceOf(AuthenticationRepository);
  });

  describe('behavior test', () => {
    afterEach(async () => {
      await AuthenticationsTableTestHelper.cleanTable();
    });

    afterAll(async () => {
      await pool.end();
    });

    describe('addToken function', () => {
      it('should add token to database', async () => {
        // Arrange
        const authenticationRepository = new AuthenticationRepositoryPostgres(pool);
        const token = 'token';

        // Action
        await authenticationRepository.addToken(token);

        // Assert
        const tokens = await AuthenticationsTableTestHelper.findToken(token);
        expect(tokens).toHaveLength(1);
        expect(tokens[0].token).toBe(token);
      });
    });
  });
});
