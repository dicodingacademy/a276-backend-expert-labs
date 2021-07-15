class EncryptionHelper {
  async encryptPassword(password) {
    throw new Error('ENCRYPTION_HELPER.METHOD_NOT_IMPLEMENTED');
  }

  async comparePassword(plain, encrypted) {
    throw new Error('ENCRYPTION_HELPER.METHOD_NOT_IMPLEMENTED');
  }
}

module.exports = EncryptionHelper;
