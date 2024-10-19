import express from 'express';
import { StudentController } from './student.controller';

const route = express.Router();

route.get('/', StudentController.getAllStudents);
route.get('/:studentId', StudentController.getSingleStudent);

route.post('/create-student', StudentController.createStudent);
export const StudentRoute = route;
