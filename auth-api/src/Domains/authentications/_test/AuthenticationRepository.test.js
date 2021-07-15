const AuthenticationRepository = require('../AuthenticationRepository');

describe('AuthenticationRepository interface', () => {
  it('should throw error when invoke unimplemented method', async () => {
    // Arrange
    const authenticationRepository = new AuthenticationRepository();

    // Action & Assert
    await expect(authenticationRepository.addToken('')).rejects.toThrowError('AUTHENTICATION_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(authenticationRepository.checkAvailabilityToken('')).rejects.toThrowError('AUTHENTICATION_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(authenticationRepository.deleteToken('')).rejects.toThrowError('AUTHENTICATION_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  });
});
