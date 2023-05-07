import styled from 'styled-components';
import { breakpoint, minDevice } from 'components/common/breakpoints';
import { LogoImg } from 'components/Logo/Logo.styled';

export const WelcomePageSection = styled.section`
  display: flex;
  align-items: center;
  min-height: 100vh;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('${process.env.PUBLIC_URL}/images/welcome-page-bg.webp');
`;
export const WelcomePageContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;

  @media ${minDevice.mobile} {
    width: ${breakpoint.mobile};
  }

  @media ${minDevice.tablet} {
    width: ${breakpoint.tablet};
    padding: 0 134px;
  }

  @media ${minDevice.desktop} {
    width: ${breakpoint.desktop};
  }
`;
export const WelcomePageBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const WelcomePageLogo = styled(LogoImg)`
  width: 54px;
  height: 54px;
  margin-bottom: 28px;

  @media ${minDevice.tablet} {
    width: 68px;
    height: 68px;
    margin-bottom: 44px;
  }
`;
export const WelcomePageTitle = styled.h1`
  width: 247px;
  height: 24px;
  margin-bottom: 14px;

  font-weight: 600;
  font-breakpoint: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  text-align: center;
  font-feature-settings: 'liga' off;
  color: ${props => props.theme.global.light};

  @media ${minDevice.tablet} {
    width: 288px;
    height: 35px;
    font-breakpoint: 28px;
  }
`;
export const WelcomePageText = styled.p`
  width: 305px;
  height: 72px;
  margin-bottom: 44px;

  font-breakpoint: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${props => props.theme.global.light};

  @media ${minDevice.tablet} {
    width: 505px;
    margin-bottom: 38px;

    font-breakpoint: 18px;
    line-height: 1.33;
  }

  @media ${minDevice.desktop} {
    width: 540px;
    margin-bottom: 40px;
  }
`;
export const WelcomePageNavList = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media ${minDevice.tablet} {
    gap: 18px;
  }
`;
