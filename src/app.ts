import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoute } from './app/modules/student/student.route';
// const express = require("express");
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

//  Application routes
app.use('/api/v1/students', StudentRoute);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  const b = 4;
  res.send(a);
};
app.get('/', getAController);

console.log(process.cwd());
export default app;
