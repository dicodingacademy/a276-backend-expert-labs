import express from 'express';

const createServer = ({ mathBasic, figureCalculator }) => {
  const app = express();

  app.get('/add/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const value = mathBasic.add(Number(a), Number(b));
    res.json({ value });
  });

  app.get('/subtract/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const value = mathBasic.subtract(Number(a), Number(b));
    res.json({ value });
  });

  app.get('/multiply/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const value = mathBasic.multiply(Number(a), Number(b));
    res.json({ value });
  });

  app.get('/divide/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const value = mathBasic.divide(Number(a), Number(b));
    res.json({ value });
  });

  app.get('/rectangle/perimeter/:length/:width', (req, res) => {
    const { length, width } = req.params;
    const value = figureCalculator.calculateRectanglePerimeter(
      Number(length),
      Number(width),
    );
    res.json({ value });
  });

  app.get('/rectangle/area/:length/:width', (req, res) => {
    const { length, width } = req.params;
    const value = figureCalculator.calculateRectangleArea(
      Number(length),
      Number(width),
    );
    res.json({ value });
  });

  app.get('/triangle/perimeter/:sideA/:sideB/:base', (req, res) => {
    const { sideA, sideB, base } = req.params;
    const value = figureCalculator.calculateTrianglePerimeter(
      Number(sideA),
      Number(sideB),
      Number(base),
    );
    res.json({ value });
  });

  app.get('/triangle/area/:base/:height', (req, res) => {
    const { base, height } = req.params;
    const value = figureCalculator.calculateTriangleArea(
      Number(base),
      Number(height),
    );
    res.json({ value });
  });

  return app;
};

export default createServer;
