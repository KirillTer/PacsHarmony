export const validate = ({email, password}) => {
  const errors = {}
  if (!email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "Invalid email address";
  }
  if (!password) {
    errors.password = "Required";
  } else if (password.length < 6) {
    errors.password = "Password should be at least 6 characters";
  }
  return errors
}
// export const validate = ({email, password}) => {
//   const errors = {};
  // if (!email) {
  //   errors.email = "Required";
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
  //   errors.email = "Invalid email address";
  // }
  // if (!password) {
  //   errors.password = "Required";
  // } else if (password.length < 6) {
  //   errors.password = "Password should be at least 6 characters";
  // }
//   return errors;
// };

// export const warn = values => {
//   const warnings = {};
//   if (values.age < 19) {
//     warnings.age = "Hmm, you seem a bit young...";
//   }
//   return warnings;
// };
