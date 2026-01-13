class PasswordHash {
  async hash(password) { // eslint-disable-line no-unused-vars
    throw new Error('PASSWORD_HASH.METHOD_NOT_IMPLEMENTED');
  }

  async compare(plain, encrypted) {
    throw new Error('PASSWORD_HASH.METHOD_NOT_IMPLEMENTED');
  }
}

export default PasswordHash;