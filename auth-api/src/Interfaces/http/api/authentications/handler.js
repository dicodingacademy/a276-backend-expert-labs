class AuthenticationsHandler {
  constructor({ loginUserUseCase, refreshAuthenticationUseCase }) {
    this._loginUserUseCase = loginUserUseCase;
    this._refreshAuthenticationUseCase = refreshAuthenticationUseCase;

    this.postAuthenticationHandler = this.postAuthenticationHandler.bind(this);
    this.putAuthenticationHandler = this.putAuthenticationHandler.bind(this);
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

    const response = h.response({
      status: 'success',
      data: {
        accessToken,
      },
    });
    response.code(200);
    return response;
  }
}

module.exports = AuthenticationsHandler;
