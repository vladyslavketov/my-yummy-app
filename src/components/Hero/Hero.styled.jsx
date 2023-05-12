import Container from 'components/common/Container.styled';
import { maxDevice, minDevice } from 'components/common/breakpoints';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeroSection = styled.section`
  position: relative;
  top: -62px;

  overflow: hidden;

  @media ${maxDevice.tablet} {padding-top: 62px;}
`;
export const HeroContainer = styled(Container)`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 777px;
  padding-top: 68px;

  @media ${minDevice.tablet} {
    flex-direction: row;
    justify-content: space-between;
    height: 640px;
  }
  @media ${minDevice.desktop} {height: 800px;}
`;
export const HeroBox = styled.div`
  display: flex;
  flex-direction: column;

  // width: 505px;
  z-index: 1;

  @media ${maxDevice.tablet} {align-items: center;}
`;
export const HeroTitle = styled.h1`
  margin-bottom: 14px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 1;
  text-align: center;
  letter-spacing: -0.005em;
  color: #8BAA36;

  span {
    color: #22252A;
  }

  @media ${minDevice.tablet} {
    margin-bottom: 24px;

    text-align: start;
    font-size: 60px;
  }
  @media ${minDevice.desktop} {
    margin-bottom: 14px;

    font-size: 100px;
  }
`;
export const HeroText = styled.p`
  width: 248px;
  margin-bottom: 14px;
  
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  text-align: center;
  letter-spacing: -0.02em;
  color: #23262A;

  @media ${minDevice.tablet} {
    margin-bottom: 32px;

    text-align: start;
  }
  @media ${minDevice.desktop} {
    margin-bottom: 50px;

    font-size: 18px;
    line-height: 1.33;
  }
`;

export const HeroBox2 = styled.div`
  flex: 0 0 360px;
  display: flex;
  width: 360px;
  height: 360px;

  background-image: url('${process.env.PUBLIC_URL}/images/decoratedMain/food.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 2;
`;
export const HeroDescWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 225px;
  height: 92px;
  padding: 8px;
  margin: auto 0 0 auto;

  background-color: #FFFFFF;
  // background-color: teal;
  border-radius: 8px;

  @media ${minDevice.tablet} {
    width: 261px;
    height: 100px;
    padding: 12px;
  }
  @media ${minDevice.desktop} {
    width: 298px;
    height: 114px;
    padding: 16px;
  }
`;
export const HeroDesc = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;
  color: #3E4462;

  span {
    color: #8BAA36;
  }

  @media ${minDevice.tablet} {
    font-size: 14px;
    line-height: 1.29;
  }
  @media ${minDevice.desktop} {
    line-height: 1.43;
  }
`;
export const HeroLink = styled(Link)`
  display: flex;
  align-items: center;
  margin: auto 0 0 auto;
  
  text-align: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.2px;
  color: #3E4462;
`;

export const HeroDecoreLeafsLeft = styled.div`
  position: absolute;
  top: -85px;
  left: -331px;

  width: 438px;
  height: 474px;

  background-image: url('${process.env.PUBLIC_URL}/images/decoratedMain/hero-leafs-left.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  pointer-events: none;


  @media ${minDevice.tablet} {
    top: 0;
    left: -234px;

    width: 292px;
    height: 315px;
  }
  @media ${minDevice.desktop} {
    top: -85px;
    left: -331px;

    width: 438px;
    height: 474px;
  }
`;
export const HeroDecoreLeafsRight = styled.div`
  position: absolute;
  // top: 0px;
  right: 0px;

  // width: 438px;
  // height: 474px;

  background-image: url('${process.env.PUBLIC_URL}/images/decoratedMain/hero-leafs-right.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  pointer-events: none;
  z-index: 1;

  @media ${minDevice.tablet} {
    top: -76px;
    right: -100px;

    width: 519px;
    height: 792px;
  }
  @media ${minDevice.desktop} {
    top: -138px;
    right: 0px;

    width: 676px;
    height: 944px;
  }
`;
export const HeroDecoreBg = styled.div`
  position: absolute;
  top: 10%;
  right: -300px;

  width: 506px;
  height: 100%;

  // background: linear-gradient(90deg, rgba(0,0,0,0) 50%, rgba(235,243,212,1) 50%);
  background-image: url('${process.env.PUBLIC_URL}/images/decoratedMain/bg2.svg');
  // background-image: url('${process.env.PUBLIC_URL}/images/decoratedMain/bg2.svg'), linear-gradient(90deg, rgba(0,0,0,0) 50%, rgba(235,243,212,1) 50%);; 
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  pointer-events: none;
  transform: rotate(32deg);

  @media ${minDevice.tablet} {
    top: -80px;
    right: -220px;

    width: 519px;

    transform: rotate(27deg);
  }
  @media ${minDevice.desktop} {
    top: -100px;
    right: -260px;

    width: 753px;

    transform: rotate(0deg);
  }
`;