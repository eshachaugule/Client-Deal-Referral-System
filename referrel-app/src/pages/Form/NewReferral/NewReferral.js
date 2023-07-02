import React, { useState } from 'react';
import '../CreateNewAccount/CreateAccount.css';
import FormSignup from './FormSignup.js';
import FormSuccess from './FormSuccess.js';
import Navbar from '../../../components/Navbar.js';


const NewReferral = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
    <Navbar/>
   
      <div className='form-container'>
       
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default NewReferral;