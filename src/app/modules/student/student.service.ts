import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDB = async (studentData: TStudent) => {
  //  here insert the data to the database
  //!  there is two method to send the data to the database
  //* built in method

  // const student = new Student(studentData);
  // const result = await student.save();
  //   here check the user is exist or not
  // if (await student.isUserExits(studentData.id)) {
  //   throw new Error('User already exists');
  // }

  //* this is building static method
  if (await Student.isUserExits(studentData.id)) {
    throw new Error('User already exists');
  }
  const result = await Student.create(studentData);

  return result;
};

const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};
const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};
export const StudentService = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
