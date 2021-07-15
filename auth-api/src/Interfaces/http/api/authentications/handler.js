class AuthenticationsHandler {
  constructor({ loginUserUseCase }) {
    this._loginUserUseCase = loginUserUseCase;

    this.postAuthenticationHandler = this.postAuthenticationHandler.bind(this);
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
}

module.exports = AuthenticationsHandler;
