import Logo from "components/Logo/Logo";
import { HeaderContainer, HeaderTag } from "./Header.styled";
import Navigation from "components/Navigation/Navigation";

const Header = () => {
  return (
    <HeaderTag>
      <HeaderContainer>
        <Logo />
        <Navigation newClass={"nav__list--header"} />
        <span>UserMenu</span>
      </HeaderContainer>
    </HeaderTag>
  );
};

export default Header;
