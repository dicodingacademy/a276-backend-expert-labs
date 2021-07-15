const bcrypt = require('bcrypt');
const EncryptionHelper = require('../../../Applications/security/EncryptionHelper');
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
});
