import { AuthFormIconGreen, AuthFormIconRed, AuthFormIconYellow } from "./AuthForm.styled";

const AuthFormIconValid = ({ icon }) => {
  switch (icon) {
    case 'red':
      return <AuthFormIconRed />
    
    case 'yellow':
      return <AuthFormIconYellow />
     
    case 'green':
      return <AuthFormIconGreen />

    default:
      return "";
  }
};

export default AuthFormIconValid;
