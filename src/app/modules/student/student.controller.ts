import { Request, Response } from 'express';
import { StudentService } from './student.service';
import studentValidationZodSchema from './student.validation';
// import Joi, { required } from 'Joi';
//  This is for create a student
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    //  here this value is the validate data so send the value in database
    // this data is validate by JOi
    // const { error, value } = studentValidationSchema.validate(studentData);

    //  data validation using Zod
    //  here this zod error is

    const ZodParsedData = studentValidationZodSchema.parse(studentData);
    const result = await StudentService.createStudentIntoDB(ZodParsedData);
    console.log(ZodParsedData);

    res.status(200).json({
      success: true,
      message: 'Student is create successfully',
      data: result,
    });
  } catch (error: any) {
    //! this error will show in the console
    // console.log(error);
    //! to show the Error in the postman console
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong ',
      error: error,
    });
  }
};

// This is for get all students
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'Students is are retrieved successfully',
      data: result,
    });
  } catch (error) {
    //! this error will show in the console
    // console.log(error);
    //! to show the Error in the postman console
    res.status(500).json({
      success: false,
      message: 'Something went wrong ',
      error: error,
    });
  }
};

// This is for get one student
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentService.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is are retrieved successfully',
      data: result,
    });
  } catch (error) {
    //! this error will show in the console
    // console.log(error);
    //! to show the Error in the postman console
    res.status(500).json({
      success: false,
      message: 'Something went wrong ',
      error: error,
    });
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
