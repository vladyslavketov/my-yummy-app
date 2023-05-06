import { useEffect, useState } from 'react';
import {
  AuthForm,
  AuthFormBtnSubmit,
  AuthFormIconLock,
  AuthFormIconMail,
  AuthFormInput,
  AuthFormLabel,
  AuthFormTitle,
  AuthFormValidaMsg,
} from './AuthForm.styled';
import AuthFormIconValid from './AuthFormIconValid';
import { validateEmail, validatePassword } from 'components/Auth/AuthValidate';

const SigninForm = () => {
  // const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [emailClass, setEmailClass] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordClass, setPasswordClass] = useState('');
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleBlur = e => {
    switch (e.target.name) {
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
  const handleEmail = e => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e));
  };
  const handlePassword = e => {
    setPassword(e.target.value);
    setPasswordError(validatePassword(e));
  };
  const handleSubmit = async e => {
    e.preventDefault();

    const form = e.currentTarget;

    // dispatch(
    //   register({
    //     name: form.elements.name.value,
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // );
    form.reset();
  };

  useEffect(() => {
    if (emailDirty && emailError) setEmailClass('red');
    else if (emailDirty && email && !emailError) setEmailClass('green');
    else setEmailClass('');
  }, [emailDirty, email, emailError]);

  useEffect(() => {
    if (passwordDirty) {
      if (passwordError) setPasswordClass('red');
      else if (password && !passwordError) {
        setPasswordClass('green');
      }
    }
    else setPasswordClass('');
   
  }, [passwordDirty, password, passwordError]);

  useEffect(() => {
    const isFormDataEmpty = !Boolean(email) && !Boolean(password);
    const isFormDataValid = !Boolean(emailError) && !Boolean(passwordError);
    const isTrue = (!isFormDataEmpty && isFormDataValid);
    setIsValid(isTrue);
  }, [email, password, emailError, passwordError]);

  return (
    <AuthForm id="registerForm" onSubmit={handleSubmit}>
      <AuthFormTitle>Sign In</AuthFormTitle>
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
        { passwordClass && <AuthFormIconValid icon={passwordClass}/>}
        { passwordDirty && passwordError && <AuthFormValidaMsg>{passwordError}</AuthFormValidaMsg>}
      </AuthFormLabel>
      <AuthFormBtnSubmit type="submit" disabled={!isValid}>
        Sign up
      </AuthFormBtnSubmit>
    </AuthForm>
  );
};

export default SigninForm;
