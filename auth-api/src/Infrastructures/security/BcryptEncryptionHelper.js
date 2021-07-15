const EncryptionHelper = require('../../Applications/security/EncryptionHelper');

class BcryptEncryptionHelper extends EncryptionHelper {
  constructor(bcrypt, saltRound = 10) {
    super();
    this._bcrypt = bcrypt;
    this._saltRound = saltRound;
  }

  async encryptPassword(password) {
    return this._bcrypt.hash(password, this._saltRound);
  }
}

module.exports = BcryptEncryptionHelper;
