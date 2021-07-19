class AuthenticationsHandler {
  constructor({
    loginUserUseCase,
    refreshAuthenticationUseCase,
    logoutUserUseCase,
  }) {
    this._loginUserUseCase = loginUserUseCase;
    this._refreshAuthenticationUseCase = refreshAuthenticationUseCase;
    this._logoutUserUseCase = logoutUserUseCase;

    this.postAuthenticationHandler = this.postAuthenticationHandler.bind(this);
    this.putAuthenticationHandler = this.putAuthenticationHandler.bind(this);
    this.deleteAuthenticationHandler = this.deleteAuthenticationHandler.bind(this);
  }

  async postAuthenticationHandler(request, h) {
    const { accessToken, refreshToken } = await this._loginUserUseCase.execute(request.payload);
    const response = h.response({
      status: 'success',
      data: {
        accessToken,
        refreshToken,
      },
    });
    response.code(201);
    return response;
  }

  async putAuthenticationHandler(request, h) {
    const accessToken = await this._refreshAuthenticationUseCase
      .execute(request.payload);

    return {
      status: 'success',
      data: {
        accessToken,
      },
    };
  }

  async deleteAuthenticationHandler(request) {
    await this._logoutUserUseCase.execute(request.payload);
    return {
      status: 'success',
    };
  }
}

module.exports = AuthenticationsHandler;
