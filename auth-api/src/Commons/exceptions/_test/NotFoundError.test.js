const NotFoundError = require('../NotFoundError');

describe('NotFoundError', () => {
  it('should create error correctly', () => {
    const notFoundError = new NotFoundError('not found!');

    expect(notFoundError.message).toEqual('not found!');
    expect(notFoundError.statusCode).toEqual(404);
    expect(notFoundError.name).toEqual('NotFoundError');
  });
});
