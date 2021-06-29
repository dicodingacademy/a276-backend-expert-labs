const MathBasic = require('./MathBasic');

describe('A MathBasic', () => {
  it('should contains add, subtract, multiply, and divide function', () => {
    expect(MathBasic).toHaveProperty('add');
    expect(MathBasic).toHaveProperty('subtract');
    expect(MathBasic).toHaveProperty('multiply');
    expect(MathBasic).toHaveProperty('divide');
    expect(MathBasic.add).toBeInstanceOf(Function);
    expect(MathBasic.subtract).toBeInstanceOf(Function);
    expect(MathBasic.multiply).toBeInstanceOf(Function);
    expect(MathBasic.divide).toBeInstanceOf(Function);
  });

  describe('A add function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.add()).toThrowError();
      expect(() => MathBasic.add(1)).toThrowError();
      expect(() => MathBasic.add(1, 2, 3)).toThrowError();
      expect(() => MathBasic.add(1, 2, 3, 4)).toThrowError();
    });

    it('should throw error when given non-number parameters', () => {
      expect(() => MathBasic.add('1', '2')).toThrowError();
      expect(() => MathBasic.add(true, {})).toThrowError();
      expect(() => MathBasic.add(null, false)).toThrowError();
    });

    it('should return a + b when given two number parameters', () => {
      expect(MathBasic.add(2, 2)).toEqual(4);
      expect(MathBasic.add(16, 8)).toEqual(24);
      expect(MathBasic.add(3, 7)).toEqual(10);
    });
  });

  describe('A subtract function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.subtract()).toThrowError();
      expect(() => MathBasic.subtract(1)).toThrowError();
      expect(() => MathBasic.subtract(1, 2, 3)).toThrowError();
    });

    it('should throw error when given with non-number parameters', () => {
      expect(() => MathBasic.subtract('1', '2')).toThrowError();
      expect(() => MathBasic.subtract(true, false)).toThrowError();
      expect(() => MathBasic.subtract([], {})).toThrowError();
    });

    it('should return a - b when given with two number parameters', () => {
      expect(MathBasic.subtract(2, 1)).toEqual(1);
      expect(MathBasic.subtract(3, 5)).toEqual(-2);
      expect(MathBasic.subtract(14, 7)).toEqual(7);
    });
  });

  describe('A multiply function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.multiply()).toThrowError();
      expect(() => MathBasic.multiply(1)).toThrowError();
      expect(() => MathBasic.multiply(1, 2, 3)).toThrowError();
    });

    it('should throw error when given with non-number parameters', () => {
      expect(() => MathBasic.multiply('1', '2')).toThrowError();
      expect(() => MathBasic.multiply({}, true)).toThrowError();
      expect(() => MathBasic.multiply(true, false)).toThrowError();
    });

    it('should return a * b when given with two number parameters', () => {
      expect(MathBasic.multiply(1, 1)).toEqual(1);
      expect(MathBasic.multiply(2, 2)).toEqual(4);
      expect(MathBasic.multiply(4, 4)).toEqual(16);
    });
  });

  describe('A divide function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.divide()).toThrowError();
      expect(() => MathBasic.divide(1)).toThrowError();
      expect(() => MathBasic.divide(1, 2, 3)).toThrowError();
    });

    it('should throw error when given with non-number parameters', () => {
      expect(() => MathBasic.divide('1', '2')).toThrowError();
      expect(() => MathBasic.divide(true, {})).toThrowError();
      expect(() => MathBasic.divide({}, [])).toThrowError();
    });

    it('should return a / b when given with two number parameters', () => {
      expect(MathBasic.divide(6, 2)).toEqual(3);
      expect(MathBasic.divide(8, 4)).toEqual(2);
      expect(MathBasic.divide(35, 5)).toEqual(7);
    });
  });
});
