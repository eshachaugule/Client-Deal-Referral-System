import React, { useState } from 'react';
import  { Navigate } from 'react-router-dom';
import '../CreateNewAccount/CreateAccount.css';
import FormLogin from './FormLogin.js';
import OutNavbar from '../../../components/OutNavbar.js';


const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
    <OutNavbar/>
      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormLogin submitForm={submitForm} />
        ) : (
          <Navigate to="/newreferral" />

        )}
      </div>
    </>
  );
};

export default Login;