const AuthenticationRepository = require('../../../Domains/authentications/AuthenticationRepository');
const AuthenticationTokenManager = require('../../security/AuthenticationTokenManager');
const RefreshAuthenticationUseCase = require('../RefreshAuthenticationUseCase');

describe('RefreshAuthenticationUseCase', () => {
  it('should throw error if use case payload not contain refresh token', async () => {
    // Arrange
    const useCasePayload = {};
    const refreshAuthenticationUseCase = new RefreshAuthenticationUseCase({});

    // Action & Assert
    await expect(refreshAuthenticationUseCase.execute(useCasePayload))
      .rejects
      .toThrowError('REFRESH_AUTHENTICATION_USE_CASE.NOT_CONTAIN_REFRESH_TOKEN');
  });

  it('should throw error if refresh token not string', async () => {
    // Arrange
    const useCasePayload = {
      refreshToken: 1,
    };
    const refreshAuthenticationUseCase = new RefreshAuthenticationUseCase({});

    // Action & Assert
    await expect(refreshAuthenticationUseCase.execute(useCasePayload))
      .rejects
      .toThrowError('REFRESH_AUTHENTICATION_USE_CASE.PAYLOAD_NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should orchestrating the refresh authentication action correctly', async () => {
    // Arrange
    const useCasePayload = {
      refreshToken: 'some_refresh_token',
    };
    const mockAuthenticationRepository = new AuthenticationRepository();
    const mockAuthenticationTokenManager = new AuthenticationTokenManager();
    // Mocking
    mockAuthenticationRepository.checkAvailabilityToken = jest.fn()
      .mockImplementation(() => Promise.resolve());
    mockAuthenticationTokenManager.verifyRefreshToken = jest.fn()
      .mockImplementation(() => Promise.resolve());
    mockAuthenticationTokenManager.decodePayload = jest.fn()
      .mockImplementation(() => Promise.resolve({ username: 'dicoding' }));
    mockAuthenticationTokenManager.createAccessToken = jest.fn()
      .mockImplementation(() => Promise.resolve('some_new_access_token'));
    // Create the use case instace
    const refreshAuthenticationUseCase = new RefreshAuthenticationUseCase({
      authenticationRepository: mockAuthenticationRepository,
      authenticationTokenManager: mockAuthenticationTokenManager,
    });

    // Action
    const accessToken = await refreshAuthenticationUseCase.execute(useCasePayload);

    // Assert
    expect(mockAuthenticationTokenManager.verifyRefreshToken)
      .toBeCalledWith(useCasePayload.refreshToken);
    expect(mockAuthenticationRepository.checkAvailabilityToken)
      .toBeCalledWith(useCasePayload.refreshToken);
    expect(mockAuthenticationTokenManager.decodePayload)
      .toBeCalledWith(useCasePayload.refreshToken);
    expect(mockAuthenticationTokenManager.createAccessToken)
      .toBeCalledWith({ username: 'dicoding' });
    expect(accessToken).toEqual('some_new_access_token');
  });
});
