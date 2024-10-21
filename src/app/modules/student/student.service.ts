import { Student } from './student.interface';
import { StudentModel } from './student.model';

const createStudentIntoDB = async (studentData: Student) => {
  //  here insert the data to the database
  //!  there is two method to send the data to the database
  //* built in method

  // const student = new StudentModel(studentData);
  // const result = await student.save();

  //* this is building static method
  const result = await StudentModel.create(studentData);

  return result;
};

const getAllStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};
export const StudentService = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
