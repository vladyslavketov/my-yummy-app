import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  AuthForm,
  AuthFormBtnSubmit,
  AuthFormIconLock,
  AuthFormIconMail,
  AuthFormIconUser,
  AuthFormInput,
  AuthFormLabel,
  AuthFormPassValidaMsg,
  AuthFormPassValidaMsg2,
  AuthFormTitle,
  AuthFormValidaMsg,
} from './AuthForm.styled';
import { checkPasswordSecure, validateEmail, validateName, validatePassword, validatePasswordSecure } from 'components/Auth/AuthValidate';
import AuthFormIconValid from './AuthFormIconValid';
import { register } from 'redux/auth/authOperation';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameClass, setNameClass] = useState('');
  const [emailClass, setEmailClass] = useState('');
  const [passwordClass, setPasswordClass] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordSecure, setPasswordSecure] = useState('');
  const [passwordSecureMsg, setPasswordSecureMsg] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleBlur = e => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true);
        break;
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;

      default:
        return;
    }
  };
  const handleName = e => {
    setName(e.target.value);
    setNameError(validateName(e));
  };
  const handleEmail = e => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e));
  };
  const handlePassword = e => {
    setPassword(e.target.value);
    setPasswordError(validatePassword(e));
    setPasswordSecureMsg(validatePasswordSecure(e));
    setPasswordSecure(checkPasswordSecure(e.target.value));
  };
  const handleSubmit = async e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  useEffect(() => {
    if (nameDirty && nameError) setNameClass('red');
    else if (nameDirty && name && !nameError) setNameClass('green');
    else setNameClass('');
  }, [nameDirty, name, nameError]);

  useEffect(() => {
    if (emailDirty && emailError) setEmailClass('red');
    else if (emailDirty && email && !emailError) setEmailClass('green');
    else setEmailClass('');
  }, [emailDirty, email, emailError]);

  useEffect(() => {
    if (passwordDirty) {
      if (passwordError) setPasswordClass('red');
      else if (password && !passwordError) {
        setPasswordClass('yellow');
        if (!passwordSecure) setPasswordClass('green');
      }
    } else setPasswordClass('');
  }, [passwordDirty, password, passwordError, passwordSecure]);

  useEffect(() => {
    const isFormDataEmpty = !Boolean(name) && !Boolean(email) && !Boolean(password);
    const isFormDataValid = !Boolean(nameError) && !Boolean(emailError) && !Boolean(passwordError);
    const isTrue = (!isFormDataEmpty && isFormDataValid && !passwordSecure);
    setIsValid(isTrue);
  }, [name, email, password, nameError, emailError, passwordError, passwordSecure]);

  return (
    <AuthForm id="registerForm" onSubmit={handleSubmit}>
      <AuthFormTitle>Registration</AuthFormTitle>
      <AuthFormLabel className={nameClass}>
        <AuthFormIconUser />
        <AuthFormInput
          value={name}
          onBlur={e => handleBlur(e)}
          onChange={e => handleName(e)}
          type="text"
          name="name"
          placeholder="Name"
          autoComplete="off"
          minlength="2"
          required
        />
        {nameClass && <AuthFormIconValid icon={nameClass} />}
        {nameDirty && nameError && (
          <AuthFormValidaMsg>{nameError}</AuthFormValidaMsg>
        )}
      </AuthFormLabel>
      <AuthFormLabel className={emailClass}>
        <AuthFormIconMail />
        <AuthFormInput
          value={email}
          onBlur={e => handleBlur(e)}
          onChange={e => handleEmail(e)}
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
          required
        />
        {emailClass && <AuthFormIconValid icon={emailClass} />}
        {emailDirty && emailError && (
          <AuthFormValidaMsg>{emailError}</AuthFormValidaMsg>
        )}
      </AuthFormLabel>
      <AuthFormLabel className={passwordClass}>
        <AuthFormIconLock />
        <AuthFormInput
          onBlur={e => handleBlur(e)}
          onChange={e => handlePassword(e)}
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="new-password"
          minlength="5"
          required
        />
        {passwordClass && <AuthFormIconValid icon={passwordClass} />}
        {passwordDirty && !passwordSecure && (
          <AuthFormPassValidaMsg>{passwordSecureMsg}</AuthFormPassValidaMsg>
        )}
        {passwordDirty && passwordSecure && (
          <AuthFormPassValidaMsg>{passwordSecureMsg}</AuthFormPassValidaMsg>
        )}

        {passwordDirty && passwordError && (
          <AuthFormPassValidaMsg2>{passwordError}</AuthFormPassValidaMsg2>
        )}
        {passwordDirty && !passwordError && passwordSecure && (
          <AuthFormPassValidaMsg2>{passwordSecure}</AuthFormPassValidaMsg2>
        )}
      </AuthFormLabel>
      <AuthFormBtnSubmit type="submit" disabled={!isValid}>
        Sign up
      </AuthFormBtnSubmit>
    </AuthForm>
  );
};

export default RegisterForm;
