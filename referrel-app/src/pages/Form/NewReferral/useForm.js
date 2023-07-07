import { useState, useEffect } from 'react';
import Axios from 'axios';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    clientname: '',
    clientcompany: '',
    dealtype: '',
    region: '',
    industry: '',
    product: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    console.log(value)
  };

  const url = ""
  const handleSubmit = e => {
    e.preventDefault();

    
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleDropdown = e => {
    values.product=e
    console.log(e)
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, handleDropdown, values, errors };
};

export default useForm;