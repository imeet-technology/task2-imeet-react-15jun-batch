import React from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          <div className="mb-4">
            <div className="flex items-center border border-gray-300 rounded-md">
              <span className="text-gray-400 mx-2">
                <FaUser />
              </span>
              <Field
                type="text"
                name="username"
                placeholder="Username"
                className="w-full py-2 px-2 outline-none"
              />
            </div>
            <ErrorMessage name="username" component="div" className="text-red-500 mt-2" />
          </div>
          <div className="mb-4">
            <div className="flex items-center border border-gray-300 rounded-md">
              <span className="text-gray-400 mx-2">
                <FaEnvelope />
              </span>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-full py-2 px-2 outline-none"
              />
            </div>
            <ErrorMessage name="email" component="div" className="text-red-500 mt-2" />
          </div>
          <div className="mb-6">
            <div className="flex items-center border border-gray-300 rounded-md">
              <span className="text-gray-400 mx-2">
                <FaLock />
              </span>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="w-full py-2 px-2 outline-none"
              />
            </div>
            <ErrorMessage name="password" component="div" className="text-red-500 mt-2" />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-blue-600"
          >
            Register
          </button>
          <div className="text-center">
            <Link to={'/login'} className='text-2xl'>Alrady Have Account &rarr;</Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
