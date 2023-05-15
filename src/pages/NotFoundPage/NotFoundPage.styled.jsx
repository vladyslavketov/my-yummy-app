import styled from 'styled-components';
import { minDevice } from 'components/common/breakpoints';
import Container from 'components/common/Container.styled';

export const NotFoundPageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NotFoundPageImg = styled.img`
  width: 259px;
  height: 179px;
  margin-bottom: 14px;

  object-fit: cover;

  @media ${minDevice.tablet} {
    width: 498px;
    height: 328px;
    margin-bottom: 32px;
  }
`;
  export const NotFoundPageMsgStart = styled.strong`
  margin-bottom: 8px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.11;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: #000000;

  @media ${minDevice.tablet} {
    margin-bottom: 14px;

    font-size: 24px;
    line-height: 1;
  }
`;
export const NotFoundPageMsg = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  text-align: center;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: #000000;

  opacity: 0.5;
  @media ${minDevice.tablet} {
    font-size: 18px;
    line-height: 1.33;
  }
`;