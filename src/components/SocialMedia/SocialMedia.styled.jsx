import styled from "styled-components";
import { Link } from "react-router-dom";
import { minDevice } from "components/common/breakpoints";

export const SocialMediaList = styled.ul`
  display: flex;
  align-items: center;
  gap: 14px;

  @media ${minDevice.tablet} {gap: 18px;};
`;
export const SocialMediaLink = styled(Link)`
  display: flex;
  align-items: center;

  svg {
    color: ${props => props.theme.socialMedia.colorIcon};

    .social-media__list--footer & {
      width: 20px;
      height: 20px;
      flex 0 0 20px;

      &:hover, &:focus {
        color: ${props => props.theme.socialMedia.colorIconHoverWhite};
      }
    }

    .social-media__list--add & {
      width: 26px;
      height: 26px;
      flex 0 0 26px;

      &:hover, &:focus {
        color: ${props => props.theme.socialMedia.colorIconHoverBlack};
      }
    }
  }
`;
