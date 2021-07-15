const InvariantError = require('../../../Commons/exceptions/InvariantError');
const AuthenticationTokenManager = require('../../../Applications/security/AuthenticationTokenManager');
const JwtTokenManager = require('../JwtTokenManager');

describe('JwtTokenManager', () => {
  it('should instance of AuthenticationTokenManager', () => {
    expect(new JwtTokenManager()).toBeInstanceOf(AuthenticationTokenManager);
  });

  describe('createAccessToken function', () => {
    it('should create accessToken correctly', async () => {
      // Arrange
      const payload = {
        username: 'dicoding',
      };
      const mockJwtToken = {
        generate: jest.fn().mockImplementation(() => 'mock_token'),
      };
      const jwtTokenManager = new JwtTokenManager(mockJwtToken);

      // Action
      const accessToken = await jwtTokenManager.createAccessToken(payload);

      // Assert
      expect(mockJwtToken.generate).toBeCalledWith(payload, process.env.ACCESS_TOKEN_KEY);
      expect(accessToken).toEqual('mock_token');
    });
  });

  describe('createRefreshToken function', () => {
    it('should create refreshToken correctly', async () => {
      // Arrange
      const payload = {
        username: 'dicoding',
      };
      const mockJwtToken = {
        generate: jest.fn().mockImplementation(() => 'mock_token'),
      };
      const jwtTokenManager = new JwtTokenManager(mockJwtToken);

      // Action
      const refreshToken = await jwtTokenManager.createRefreshToken(payload);

      // Assert
      expect(mockJwtToken.generate).toBeCalledWith(payload, process.env.REFRESH_TOKEN_KEY);
      expect(refreshToken).toEqual('mock_token');
    });
  });

  describe('verifyRefreshToken function', () => {
    it('should throw InvariantError when verification failed', async () => {
      // Arrange
      const fakeJwtToken = {
        decode: () => ({ username: 'dicoding' }), // dummy artifact
        verify: () => { throw new Error('verification failed'); },
      };
      const jwtTokenManager = new JwtTokenManager(fakeJwtToken);

      // Action & Assert
      await expect(jwtTokenManager.verifyRefreshToken('fake_token'))
        .rejects
        .toThrow(InvariantError);
    });

    it('should not throw InvariantError when refresh token verified', async () => {
      // Arrange
      const mockJwtToken = {
        decode: jest.fn().mockImplementation(() => ({ username: 'dicoding' })), // dummy artifacts
        verify: jest.fn().mockImplementation(() => {}),
      };
      const jwtTokenManager = new JwtTokenManager(mockJwtToken);

      // Action & Assert
      await expect(jwtTokenManager.verifyRefreshToken('mock_token'))
        .resolves
        .not.toThrow(InvariantError);
      expect(mockJwtToken.decode).toBeCalledWith('mock_token');
      expect(mockJwtToken.verify).toBeCalledWith({ username: 'dicoding' }, process.env.REFRESH_TOKEN_KEY);
    });
  });
});
