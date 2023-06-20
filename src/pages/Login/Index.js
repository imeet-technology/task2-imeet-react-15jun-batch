import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Login = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="flex justify-center items-center  h-screen">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="bg-white p-6 rounded-lg w-1/2 shadow-md ">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
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
            Login
          </button>
          <div className="text-center">
            <Link to={'/register'} className='text-2xl'>Don't Have Account &rarr;</Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
