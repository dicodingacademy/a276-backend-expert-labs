const PasswordHash = require('../PasswordHash');

describe('EncryptionHelper interface', () => {
  it('should throw error when invoke abstract behavior', async () => {
    // Arrange
    const passwordHash = new PasswordHash();

    // Action & Assert
    await expect(passwordHash.hash('dummy_password')).rejects.toThrowError('PASSWORD_HASH.METHOD_NOT_IMPLEMENTED');
    await expect(passwordHash.compare('plain', 'encrypted')).rejects.toThrowError('PASSWORD_HASH.METHOD_NOT_IMPLEMENTED');
  });
});
