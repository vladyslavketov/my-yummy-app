import styled from "styled-components";
import { breakpoint } from "components/common/breakpoints";

export const LogoImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: ${props => props.theme.global.accent};

  @media ${breakpoint.tablet} {
    width: 44px;
    height: 44px;
  }
`;