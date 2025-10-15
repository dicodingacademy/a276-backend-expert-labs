import express from 'express';

const createServer = ({ mathBasic, figureCalculator }) => {
  const app = express();

  app.get('/add/:a/:b', (request, response) => {
    const { a, b } = request.params;
    const value = mathBasic.add(Number(a), Number(b));
    response.json({ value });
  });

  app.get('/subtract/:a/:b', (request, response) => {
    const { a, b } = request.params;
    const value = mathBasic.subtract(Number(a), Number(b));
    response.json({ value });
  });

  app.get('/multiply/:a/:b', (request, response) => {
    const { a, b } = request.params;
    const value = mathBasic.multiply(Number(a), Number(b));
    response.json({ value });
  });

  app.get('/divide/:a/:b', (request, response) => {
    const { a, b } = request.params;
    const value = mathBasic.divide(Number(a), Number(b));
    response.json({ value });
  });

  app.get('/rectangle/perimeter/:length/:width', (request, response) => {
    const { length, width } = request.params;
    const value = figureCalculator.calculateRectanglePerimeter(Number(length), Number(width));
    response.json({ value });
  });

  app.get('/rectangle/area/:length/:width', (request, response) => {
    const { length, width } = request.params;
    const value = figureCalculator.calculateRectangleArea(Number(length), Number(width));
    response.json({ value });
  });

  app.get('/triangle/perimeter/:sideA/:sideB/:base', (request, response) => {
    const { sideA, sideB, base } = request.params;
    const value = figureCalculator.calculateTrianglePerimeter(
      Number(sideA), Number(sideB), Number(base),
    );
    response.json({ value });
  });

  app.get('/triangle/area/:base/:height', (request, response) => {
    const { base, height } = request.params;
    const value = figureCalculator.calculateTriangleArea(Number(base), Number(height));
    response.json({ value });
  });

  return app;
};

export default createServer;
