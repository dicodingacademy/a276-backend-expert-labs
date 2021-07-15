const AuthenticationRepository = require('../AuthenticationRepository');

describe('AuthenticationRepository interface', () => {
  it('should throw error when invoke unimplemented method', () => {
    // Arrange
    const authenticationRepository = new AuthenticationRepository();

    // Action & Assert
    expect(() => authenticationRepository.addToken('')).toThrowError('AUTHENTICATION_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  });
});
