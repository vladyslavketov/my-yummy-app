import { Link } from "react-router-dom";
import { LogoImg } from "./Logo.styled";

const Logo = () => {
  return (
    <Link to="/">
      <LogoImg src={`${process.env.PUBLIC_URL}/images/logo.svg`} />
    </Link>
  );
};

export default Logo;