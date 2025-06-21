// validatinf email

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    return "Email is required.";
  }
  if (!re.test(email)) {
    return "Invalid Email Format";
  }
  return "";
};

// validating password

export const validatePassword = (password) => {
  if (!password) {
    return "Password is Required";
  }
  if (password.length < 6) {
    return "Password must be at least 6 characters.";
  }
  return "";
};
