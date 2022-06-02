import dotenv from 'dotenv';
import express from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express();

dotenv.config();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(StatusCodes.OK).send('Express + TypeScript');
});

export default app;
