import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { env } from './config/env.js';
import healthRouter from './routes/health.js';

export function createApp() {
  const app = express();

  app.use(cors({ origin: env.clientOrigin }));
  app.use(express.json());
  app.use(morgan('dev'));

  app.use('/api/health', healthRouter);

  return app;
}
