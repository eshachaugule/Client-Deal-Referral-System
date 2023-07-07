import { useState, useEffect } from 'react';
import Axios from 'axios';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    clientname: '',
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
  const [data, setData] = useState([{}])

  const url = "http://127.0.0.1:5000/supporty"
  const handleSubmit = e => {
    e.preventDefault();

    const bodyyy = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
            body: JSON.stringify(values)
    }
    fetch("/supporty",  bodyyy)    
    .then(
        response => { 
          return response.json()
      }).then(json => {
        console.log(json)
      })

    // Axios.post("http://127.0.0.1:5000/supporty", {
    //   headers: {
    //          "Content-Type": "application/json",
    //        },
    //        mode: 'no-cors',
    //        clientname: values.clientname,
    //       dealtype: values.dealtype
    //       }).then((response)=> {
    //         console.log(response.values)
    //       })

    
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