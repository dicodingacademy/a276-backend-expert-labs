const bcrypt = require('bcrypt');
const EncryptionHelper = require('../../../Applications/security/EncryptionHelper');
const AuthenticationError = require('../../../Commons/exceptions/AuthenticationError');
const BcryptEncryptionHelper = require('../BcryptEncryptionHelper');

describe('BcryptEncryptionHelper', () => {
  it('should be instance of EncryptionHelper', () => {
    const bcryptEncryptionHelper = new BcryptEncryptionHelper({}); // dummy bcrypt

    expect(bcryptEncryptionHelper).toBeInstanceOf(EncryptionHelper);
  });

  describe('encryptPassword function', () => {
    it('should encrypt password correctly', async () => {
      // Arrange
      const spyHash = jest.spyOn(bcrypt, 'hash');
      const bcryptEncryptionHelper = new BcryptEncryptionHelper(bcrypt);

      // Action
      const encryptedPassword = await bcryptEncryptionHelper.encryptPassword('plain_password');

      // Assert
      expect(typeof encryptedPassword).toEqual('string');
      expect(encryptedPassword).not.toEqual('plain_password');
      expect(spyHash).toBeCalledWith('plain_password', 10); // 10 adalah nilai saltRound default untuk BcryptEncryptionHelper
    });
  });

  describe('comparePassword function', () => {
    it('should throw AuthenticationError if password not match', async () => {
      // Arrange
      const bcryptEncryptionHelper = new BcryptEncryptionHelper(bcrypt);

      // Act & Assert
      await expect(bcryptEncryptionHelper.comparePassword('plain_password', 'encrypted_password'))
        .rejects
        .toThrow(AuthenticationError);
    });

    it('should not return AuthenticationError if password match', async () => {
      // Arrange
      const bcryptEncryptionHelper = new BcryptEncryptionHelper(bcrypt);
      const plainPassword = 'secret';
      const encryptedPassword = await bcryptEncryptionHelper.encryptPassword(plainPassword);

      // Act & Assert
      await expect(bcryptEncryptionHelper.comparePassword(plainPassword, encryptedPassword))
        .resolves.not.toThrow(AuthenticationError);
    });
  });
});
