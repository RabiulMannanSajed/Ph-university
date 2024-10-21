import { Schema, model, connect } from 'mongoose';
import validator from 'validator';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    trim: true,
    require: [true, 'First Name is required'],
  },
  middleName: { type: String, trim: true },
  lastName: {
    type: String,
    trim: true,
    require: [true, 'Last Name is required'],
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,

    //! this trim use to when any space in the data front and the back
    trim: true,

    required: [true, 'father Name is required'],
  },
  fatherOccupation: {
    type: String,
    trim: true,
    required: [true, 'father Occupation is required'],
  },
  fatherContactNo: {
    type: String,
    trim: true,
    required: [true, 'father Contact No is required'],
  },
  motherName: {
    type: String,
    trim: true,
    required: [true, 'mother Name is required'],
  },
  motherOccupation: {
    type: String,
    trim: true,
    required: [true, 'mother Occupation is required'],
  },
  motherContactNo: {
    type: String,
    trim: true,
    required: [true, 'mother Contact No is required'],
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: [true, 'local Guardian Name is required'],
  },
  occupation: {
    type: String,
    required: [true, 'local Guardian occupation is required'],
  },
  contactNo: {
    type: String,
    required: [true, 'local Guardian contactNo  is required'],
  },
  address: {
    type: String,
    required: [true, 'local Guardian address is required'],
  },
});

// This is the main schema
export const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: {
    type: userNameSchema,
    required: true,
  },
  //    Mongoss give u to set the type as u want this is call inam
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      // here if VALUE is this the value of user want to enter the value in the database
      message: '{VALUE} is not valid',
    },
    required: true,
  },
  dataOfBirth: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{value}  is not a valid email',
    },
  },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  guardian: {
    type: guardianSchema,
    required: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: true,
  },
  profileImg: {
    type: String,
  },
  isActive: {
    type: String,
    enum: ['active', ' inactive'],
    default: 'active',
  },
});

//  TODO : make it correct
//  this is the student model
export const StudentModel = model<Student>('Student', studentSchema);
