import { LogoImg, LogoLink, LogoText } from './Logo.styled';

const Logo = ({ newClass }) => {
  return (
    <LogoLink to="/">
      <LogoImg src={`${process.env.PUBLIC_URL}/images/logo.svg`} />
      {newClass && <LogoText className={newClass}>So Yummy</LogoText>}
    </LogoLink>
  );
};

export default Logo;

// TODO - logo form IMG to SVG
// TODO - add hover & focus to svg
