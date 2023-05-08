import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { customBreakpoint, maxDevice, minDevice } from "components/common/breakpoints";

export const NavList = styled.ul`
  display: flex;
  align-items: center;

  &.nav__list--header {
    gap: 30px;

    @media ${maxDevice.desktop} {
      display: none
    }

    // @media ${customBreakpoint("max", 1400)} {
    //   display: none
    // }
  }

  &.nav__list--footer {
    flex-direction: column;
    gap: 14px;

    @media ${minDevice.tablet} {
      gap: 20px;
    }
    @media ${minDevice.desktop} {
      gap: 24px;
    }
  }
`;
// export const NavItem = styled.li``;

export const HeaderNav = styled(NavLink)`
  .nav__list--header & {
    height: 40px;

    color: ${props => props.theme.navigation.colorNavLinkHeader};
  }

  .nav__list--footer & {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29px;
    letter-spacing: -0.02em;
    color: ${props => props.theme.navigation.colorNavLinkFooter};
  }

  &:hover, &:focus, &.active {
    color: ${props => props.theme.global.accent};
  }
`;