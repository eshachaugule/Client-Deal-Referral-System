export default function validateLoginInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Username required';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.password) {
      errors.password = 'Password is required';
    }
    
    return errors;
  }