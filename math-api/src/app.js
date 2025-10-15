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
  const port = Number(process.env.PORT ?? 5000);

  const server = app.listen(port, host, () => {
    // eslint-disable-next-line no-console
    console.log(`Server start at http://${host}:${port}`);
  });

  return server;
};

start();
