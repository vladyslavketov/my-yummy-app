import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { minDevice } from 'components/common/breakpoints';
import Container from 'components/common/Container.styled';

export const AuthPageSection = styled.section`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  min-height: 100vh;
  background: ${props => props.theme.auth.pageBgTop};
`;
export const AuthPageSectionBg = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 490px;

  background-image: url('${process.env.PUBLIC_URL}/images/auth/bg-bottom-mobile.svg');
  background-size: cover;
  background-repeat: no-repeat;

  @media ${minDevice.tablet} {
    height: 606px;

    background-image: url('${process.env.PUBLIC_URL}/images/auth/bg-bottom-tablet.svg');
  }

  @media ${minDevice.desktop} {
    height: 325px;

    background-image: url('${process.env.PUBLIC_URL}/images/auth/bg-bottom-desktop.svg');
  }
`;
export const AuthPageContainer = styled(Container)`
  // padding: 0 20px;
`;
export const AuthPageBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${minDevice.desktop} {
    flex-direction: row;
    align-items: flex-end;
    gap: 114px;
  }
`;
export const AuthPageBgImg = styled.div`
  width: 280px;
  height: 250px;
  flex-shrink: 0;

  background-image: url('${process.env.PUBLIC_URL}/images/auth/order-food-mobile.png');
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;

  @media ${minDevice.mobile} {
    width: 285px;
    height: 250px;
  }

  @media ${minDevice.tablet} {
    width: 409px;
    height: 359px;

    background-image: url('${process.env.PUBLIC_URL}/images/auth/order-food-tablet.png');
  }

  @media ${minDevice.desktop} {
    width: 532px;
    height: 469px;
    margin-bottom: 186px;

    background-image: url('${process.env.PUBLIC_URL}/images/auth/order-food-desktop.png');
  }
`;
export const AuthPageBox = styled.div`
  position: relative;
  bottom: 32px;

  flex-shrink: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  
  z-index: 1;

  @media ${minDevice.mobile} {width: 335px;}
  @media ${minDevice.tablet} {
    bottom: 12px;
    width: 500px;
    margin-bottom: 21px;
  }
  @media ${minDevice.desktop} {
    bottom: 0px;
    margin-bottom: 150px;
  }
`;
export const AuthPageNavLink = styled(NavLink)`
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
  text-align: center;
  color: ${props => props.theme.global.light};

  &:hover, :focus {
    color: ${props => props.theme.global.accent};;
  }
`;