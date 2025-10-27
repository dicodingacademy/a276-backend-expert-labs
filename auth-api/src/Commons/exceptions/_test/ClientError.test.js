import { describe, expect, it } from 'vitest';
import ClientError from '../ClientError.js';

describe('ClientError', () => {
  it('should throw error when directly use it', () => {
    expect(() => new ClientError('')).toThrowError('cannot instantiate abstract class');
  });
});
