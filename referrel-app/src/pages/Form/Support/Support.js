import React, { useState } from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import Navbar from '../../../components/Navbar.js';
import FormSignup from './FormSignup.js';
import FormSuccess from './FormSuccess.js';

function Support({submitForm}) {
    const [isSubmitted, setIsSubmitted] = useState(false);

  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <>
    <Navbar/>
    <div className='form-containersupport'>
       
       {!isSubmitted ? (
         <FormSignup submitForm={submitForm} />
       ) : (
         <FormSuccess />
       )}
     </div>
    
    </>
  )
}

export default Support