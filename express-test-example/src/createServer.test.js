import request from 'supertest';
import createServer from './createServer.js';

describe('Express Server', () => {
  it('should respond 200 with payload value "Hello World" when GET /hello', async () => {
    // Arrange
    const app = createServer();

    // Action
    const response = await request(app).get('/hello');

    // Assert
    expect(response.status).toEqual(200);
    expect(response.body.value).toEqual('Hello World');
  });

  it('should respond 200 with payload value "Hello john" when GET /hello/john', async () => {
    // Arrange
    const app = createServer();

    // Action
    const response = await request(app).get('/hello/john');

    // Assert
    expect(response.status).toEqual(200);
    expect(response.body.value).toEqual('Hello john');
  });
});
