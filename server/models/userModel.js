import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    mname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    enrollment: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone1: {
      type: Number,
      required: true,
    },
    phone2: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

const User = mongoose.model('users', userSchema);

export default User;

