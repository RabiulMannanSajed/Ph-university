import express from 'express';
import { StudentController } from './student.controller';

const route = express.Router();

route.get('/', StudentController.getAllStudents);

route.post('/create-student', StudentController.createStudent);

export const StudentRoute = route;
