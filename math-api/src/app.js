/* eslint-disable no-undef */
import createServer from './createServer.js';
import FigureCalculator from './FigureCalculator.js';
import MathBasic from './MathBasic.js';

const start = () => {
  const figureCalculator = new FigureCalculator(MathBasic);
  const app = createServer({
    mathBasic: MathBasic,
    figureCalculator,
  });

  const host = process.env.HOST ?? 'localhost';
  const port = Number(process.env.PORT ?? 3000);

  const server = app.listen(port, host, () => {

    console.log(`Server start at http://${host}:${port}`);
  });

  return server;
};

start();
