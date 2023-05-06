// import checkPasswordValidation from './AuthValidationPass';

export const validateName = e => {
  const re = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;

  if (!re.test(String(e.target.value).toLowerCase())) {
    return 'A name must contain just A-Z, a-z, 0-9 characters';
  } else if (e.target.value.length < 2 || e.target.value.length > 16) {
    return 'A name must contain 2 to 16 characters.';
  } else return '';
};
export const validateEmail = e => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(String(e.target.value).toLowerCase())) {
    return "Email can contain only latin letters, numbers, '@' and '.'";
  } else return '';
};
export const validatePassword = e => {
  if (e.target.value.length < 6 || e.target.value.length > 16) {
    return 'Password must contain 6 to 16 characters.';
  } else return '';
};
export const validatePasswordSecure = e => {
  if (e.target.value.length < 6 || e.target.value.length > 16) {
    return 'Enter a valid Password';
  } else {
    const pasValid = checkPasswordSecure(e.target.value);
    if (pasValid) return 'Your password is little secure';
    else return 'Password is secure';
  }
};

export const checkPasswordSecure = value => {
  const isWhitespace = /^(?=.*\s)/;
  if (isWhitespace.test(value)) {
    return "Password must not contain Whitespaces.";
  }

  const isContainsUppercase = /^(?=.*[A-Z])/;
  if (!isContainsUppercase.test(value)) {
    return "Password must have at least one Uppercase Character.";
  }

  const isContainsLowercase = /^(?=.*[a-z])/;
  if (!isContainsLowercase.test(value)) {
    return "Password must have at least one Lowercase Character.";
  }

  const isContainsNumber = /^(?=.*[0-9])/;
  if (!isContainsNumber.test(value)) {
    return "Password must contain at least one Digit.";
  }

  const isContainsSymbol =
    /^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹])/;
  if (!isContainsSymbol.test(value)) {
    return "Password must contain at least one Special Symbol.";
  }

  const isValidLength = /^.{6,16}$/;
  if (!isValidLength.test(value)) {
    return "Password must be 6-16 Characters Long.";
  }

  return "";
}