import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { minDevice } from "components/common/breakpoints";

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  @media ${minDevice.tablet} {
    gap: 30px;
  }
`;

export const HeaderNav = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 40px;

  color: ${props => props.theme.global.dark};

  &.active {
    color: ${props => props.theme.global.accent};
  }
`;