const EncryptionHelper = require('../../Applications/security/EncryptionHelper');
const AuthenticationError = require('../../Commons/exceptions/AuthenticationError');

class BcryptEncryptionHelper extends EncryptionHelper {
  constructor(bcrypt, saltRound = 10) {
    super();
    this._bcrypt = bcrypt;
    this._saltRound = saltRound;
  }

  async encryptPassword(password) {
    return this._bcrypt.hash(password, this._saltRound);
  }

  async comparePassword(password, hashedPassword) {
    const result = await this._bcrypt.compare(password, hashedPassword);

    if (!result) {
      throw new AuthenticationError('kredensial yang Anda masukkan salah');
    }
  }
}

module.exports = BcryptEncryptionHelper;
