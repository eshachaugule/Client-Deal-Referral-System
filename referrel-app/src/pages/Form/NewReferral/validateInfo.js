export default function validateInfo(values) {
  let errors = {};

  if (!values.clientname.trim()) {
    errors.clientname = 'Client Name required';
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }
  if (!values.clientcompany.trim()) {
    errors.clientcompany = 'Client Company required';
  }
  if (!values.dealtype.trim()) {
    errors.dealtype = 'Deal Type required';
  }
  return errors;
}