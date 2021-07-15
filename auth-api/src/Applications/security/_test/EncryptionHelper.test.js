const EncryptionHelper = require('../EncryptionHelper');

describe('EncryptionHelper interface', () => {
  it('should throw error when invoke abstract behavior', async () => {
    // Arrange
    const encryptionHelper = new EncryptionHelper();

    // Action & Assert
    await expect(encryptionHelper.encryptPassword('dummy_password')).rejects.toThrowError('ENCRYPTION_HELPER.METHOD_NOT_IMPLEMENTED');
  });
});
