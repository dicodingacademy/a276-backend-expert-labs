class PasswordHash {
  async hash(password) {
    throw new Error('PASSWORD_HASH.METHOD_NOT_IMPLEMENTED');
  }

  async compare(plain, encrypted) {
    throw new Error('PASSWORD_HASH.METHOD_NOT_IMPLEMENTED');
  }
}

module.exports = PasswordHash;
