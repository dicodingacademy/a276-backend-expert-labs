import AuthenticationTokenManager from '../../Applications/security/AuthenticationTokenManager.js';
import config from '../../Commons/config.js';
import InvariantError from '../../Commons/exceptions/InvariantError.js';

class JwtTokenManager extends AuthenticationTokenManager {
  constructor(jwt) {
    super();
    this._jwt = jwt;
  }

  async createAccessToken(payload) {
    return this._jwt.sign(payload, config.auth.accessTokenKey);
  }

  async createRefreshToken(payload) {
    return this._jwt.sign(payload, config.auth.refreshTokenKey);
  }

  async verifyRefreshToken(token) {
    try {
      this._jwt.verify(token, config.auth.refreshTokenKey);
    } catch (error) {
      throw new InvariantError('refresh token tidak valid');
    }
  }

  async decodePayload(token) {
    const payload = this._jwt.decode(token);
    return payload;
  }
}

export default JwtTokenManager;
