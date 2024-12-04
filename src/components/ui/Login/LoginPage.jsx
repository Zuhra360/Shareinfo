import { Box } from '@mantine/core'
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { useFormik } from 'formik';
export const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password:'',
    },
    
  });
  const validate = values => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length > 8) {
      errors.password = 'Must be 8 characters or more';
    }
    return errors;
  };
  return (
    <div className='flex flex-col h-screen w-full'>
      
    <Box className='w-[100%] bg-[#141518] h-screen flex items-center justify-center'>
      <div className='w-[400px] h-[400px] border border-orange-600  rounded-[10px] flex justify-center flex-col items-center'>
        <h1 className='text-4xl font-bold mt-12 p-2 text-white'>Login </h1>
        <div className='flex flex-col w-80  h-96 p-4'>

        <form  className="flex flex-col gap-4 items-center" onSubmit={formik.handleSubmit}>
          
          <div className="flex flex-col  text-lg  ">
          <label className="mr-5 text-white" htmlFor="email">Email </label>
          <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="border-2 text-white bg-inherit border-orange-600 w-80 p-1 text-base rounded "
          />
          </div>
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}

          <div className="relative flex flex-col  text-lg  text-white ">
          <label   htmlFor="password"> Password </label>
          <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'} 
              onChange={formik.handleChange}
              value={formik.values.password}
              className="border-2 text-white border-orange-600 w-80 p-1 text-base text-white rounded bg-inherit "
          />
            
          </div>
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}

          <button onClick={handleLogin} className="font-medium text-lg items-center bg-orange-600 text-white px-8 mt-8 py-1 rounded-lg" type="submit">Login</button>
          </form>
        </div>
      </div>
    </Box>

  </div>
  )
}

