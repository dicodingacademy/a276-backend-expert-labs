import { jest } from '@jest/globals';
import request from 'supertest';
import createServer from './createServer.js';
import FigureCalculator from './FigureCalculator.js';
import MathBasic from './MathBasic.js';

describe('A HTTP Server', () => {
  describe('when GET /add', () => {
    it('should respond with a status code of 200 and the payload value is addition result of a and b correctly', async () => {
      // Arrange
      const a = 10;
      const b = 20;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const app = createServer({ mathBasic: MathBasic });

      // Action
      const response = await request(app).get(`/add/${a}/${b}`);

      // Assert
      expect(response.status).toEqual(200);
      expect(response.body.value).toEqual(30); // a + b
      expect(spyAdd).toBeCalledWith(a, b);
    });
  });

  describe('when GET /subtract', () => {
    it('should respond with a status code of 200 and the payload value is subtraction result of a and b correctly', async () => {
      // Arrange
      const a = 12;
      const b = 8;
      const spySubtract = jest.spyOn(MathBasic, 'subtract');
      const app = createServer({ mathBasic: MathBasic });

      // Action
      const response = await request(app).get(`/subtract/${a}/${b}`);

      // Assert
      expect(response.status).toEqual(200);
      expect(response.body.value).toEqual(4); // a - b
      expect(spySubtract).toBeCalledWith(a, b);
    });
  });

  describe('when GET /multiply/{a}/{b}', () => {
    it('should respond with a status code of 200 and the payload value is multiplication result of a and b correctly', async () => {
      // Arrange
      const a = 10;
      const b = 5;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const app = createServer({ mathBasic: MathBasic });

      // Action
      const response = await request(app).get(`/multiply/${a}/${b}`);

      // Assert
      expect(response.status).toEqual(200);
      expect(response.body.value).toEqual(50); // 10 * 5
      expect(spyMultiply).toBeCalledWith(a, b);
    });
  });

  describe('when GET /divide/{a}/{b}', () => {
    it('should respond with a status code of 200 and the payload value is division result of a and b correctly', async () => {
      // Arrange
      const a = 10;
      const b = 5;
      const spyDivide = jest.spyOn(MathBasic, 'divide');
      const app = createServer({ mathBasic: MathBasic });

      // Action
      const response = await request(app).get(`/divide/${a}/${b}`);

      // Assert
      expect(response.status).toEqual(200);
      expect(response.body.value).toEqual(2); // 10 / 5
      expect(spyDivide).toBeCalledWith(a, b);
    });
  });

  describe('when GET /rectangle/perimeter/{length}/{width}', () => {
    it('should respond with a status code of 200 and the payload value is the result of calculating the perimeter of the rectangle correctly', async () => {
      // Arrange
      const length = 8;
      const width = 4;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyCalculateRectanglePerimeter = jest.spyOn(figureCalculator, 'calculateRectanglePerimeter');
      const app = createServer({ mathBasic: MathBasic, figureCalculator });

      // Action
      const response = await request(app).get(`/rectangle/perimeter/${length}/${width}`);

      // Assert
      expect(response.status).toEqual(200);
      expect(response.body.value).toEqual(24); // 2 * (length + width)
      expect(spyCalculateRectanglePerimeter).toBeCalledWith(length, width);
    });
  });

  describe('when GET /rectangle/area/{length}/{width}', () => {
    it('should respond with a status code of 200 and the payload value is the result of calculating the area of the rectangle correctly', async () => {
      // Arrange
      const length = 8;
      const width = 4;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyCalculateRectangleArea = jest.spyOn(figureCalculator, 'calculateRectangleArea');
      const app = createServer({ mathBasic: MathBasic, figureCalculator });

      // Action
      const response = await request(app).get(`/rectangle/area/${length}/${width}`);

      // Assert
      expect(response.status).toEqual(200);
      expect(response.body.value).toEqual(32); // length * width
      expect(spyCalculateRectangleArea).toBeCalledWith(length, width);
    });
  });

  describe('when GET /triangle/perimeter/{sideA}/{sideB}/{base}', () => {
    it('should respond with a status code of 200 and the payload value is the result of calculating the perimeter of the triangle correctly', async () => {
      // Arrange
      const sideA = 8;
      const sideB = 9;
      const base = 5;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyCalculateTrianglePerimeter = jest.spyOn(figureCalculator, 'calculateTrianglePerimeter');
      const app = createServer({ mathBasic: MathBasic, figureCalculator });

      // Action
      const response = await request(app).get(`/triangle/perimeter/${sideA}/${sideB}/${base}`);

      // Assert
      expect(response.status).toEqual(200);
      expect(response.body.value).toEqual(22); // sideA + sideB + base
      expect(spyCalculateTrianglePerimeter).toBeCalledWith(sideA, sideB, base);
    });
  });

  describe('when GET /triangle/area/{base}/{height}', () => {
    it('should respond with a status code of 200 and the payload value is the result of calculating the area of the triangle correctly', async () => {
      // Arrange
      const base = 8;
      const height = 10;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyCalculateTriangleArea = jest.spyOn(figureCalculator, 'calculateTriangleArea');
      const app = createServer({ mathBasic: MathBasic, figureCalculator });

      // Action
      const response = await request(app).get(`/triangle/area/${base}/${height}`);

      // Assert
      expect(response.status).toEqual(200);
      expect(response.body.value).toEqual(40); // (base * height) / 2
      expect(spyCalculateTriangleArea).toBeCalledWith(base, height);
    });
  });
});
