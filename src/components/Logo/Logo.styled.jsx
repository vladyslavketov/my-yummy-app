import styled from "styled-components";
import { minDevice } from "components/common/breakpoints";
import { Link } from "react-router-dom";

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;

  :hover, :focus {
    img {
      opacity: 0.8;
    };
    p {
      color: ${props => props.theme.global.accent};
    }'
  }'
`;

export const LogoImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: ${props => props.theme.global.accent};
  pointer-events: none;

  @media ${minDevice.tablet} {
    width: 44px;
    height: 44px;
  }
`;
export const LogoText = styled.p`
  display: none;

  @media ${minDevice.tablet} {
    &.logo--footer {
      display: block;

      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 1;
      letter-spacing: 0.015em;
      color: #FAFAFA;
      
      pointer-events: none;
    };
  }
`;