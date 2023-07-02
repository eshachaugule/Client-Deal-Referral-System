import React from 'react';
import '../CreateNewAccount/CreateAccount.css';

const FormSuccess = () => {
  return (
    <>
    <div className='form-content-lefttt'>
    <img className='form-img-2' src='img/img-4.svg' alt='success-referral' />
  </div>
  <div className='form-content-righttt'>
  <h1 className='form-labell'>
    Find the perfect referral employee match below!
  </h1>
  <h2 className='form-labelll'>
    We have optimised our algorithm in a way that 
    you can have the client who matches your requirements 
    the most and will be able to help you with your business 
    expansion in the best way possible.
  </h2>

        <button className='form-inputtt-btn' type='submit' onClick={(e) => {
      e.preventDefault();
      window.location.href='/newreferral';
      }}>
          Create another Referral!
        </button>
  </div>
    </>
  );
};

export default FormSuccess;