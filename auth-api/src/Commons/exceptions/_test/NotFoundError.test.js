import { describe, expect, it } from 'vitest';
import NotFoundError from '../NotFoundError.js';
import ClientError from '../ClientError.js';

describe('NotFoundError', () => {
  it('should create error correctly', () => {
    const notFoundError = new NotFoundError('not found!');

    expect(notFoundError.message).toEqual('not found!');
    expect(notFoundError.statusCode).toEqual(404);
    expect(notFoundError.name).toEqual('NotFoundError');
  });
});
