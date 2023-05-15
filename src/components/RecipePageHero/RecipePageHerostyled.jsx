import styled from "styled-components";
import Container from "components/common/Container.styled";
import { minDevice } from "components/common/breakpoints";
import { BtnOvalTransparent } from "components/common/Btns.styled";
import { ReactComponent as ClockIcon } from '../../icons/clock.svg';

export const RecipePageHeroSection = styled.section`
  position: relative;
  top: -58px;

  min-height: 455px;

  background-image: url('${process.env.PUBLIC_URL}/images/recipe-page-bg-mobile.webp');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media ${minDevice.tablet} {
    top: -62px;

    min-height: 495px;

    background-image: url('${process.env.PUBLIC_URL}/images/recipe-page-bg-tablet.webp');
  }
  @media ${minDevice.desktop} {
    background-image: url('${process.env.PUBLIC_URL}/images/recipe-page-bg-desktop.webp');
  }
`;
export const RecipePageHeroContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 58px 38px 90px;

  @media ${minDevice.tablet} {padding: 62px 131px 32px}
  @media ${minDevice.desktop} {padding: 62px 392px 32px}
`;
export const RecipePageHeroTitle = styled.h1`
  margin: 80px 0 24px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  text-align: center;
  color: #8BAA36;

  @media ${minDevice.tablet} {
    margin: 73px 0 24px;

    font-size: 44px;
  }
  @media ${minDevice.tablet} {margin: 100px 0 24px;}
`;
export const RecipePageHeroDesc = styled.p`
  margin-bottom: 24px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  letter-spacing: -0.02em;
  color: #22252A;

  @media ${minDevice.tablet} {font-size: 18px;}
  @media ${minDevice.tablet} {margin-bottom: 30px;}
`;
export const RecipePageHeroBtn = styled(BtnOvalTransparent)`
  width: 150px;
  height: 35px;
  margin-bottom: 42px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;

  color: #22252A;

  border-color: #8BAA36;

  &:hover, :focus {
    color: #FAFAFA;
    background-color: #8BAA36;
  }

  @media ${minDevice.tablet} {
    width: 278px;
    height: 59px;
    margin-bottom: 60px;

    font-size: 16px;
  }
  @media ${minDevice.desktop} {
    width: 270px;
    height: 59px;
    margin-bottom: 47px;
  }
`;
export const RecipePageHeroTime = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.24px;
  color: #23262A;

  @media ${minDevice.tablet} {
    gap: 8px;

    font-size: 14px;
    line-height: 1.43;
  }
`;
export const RecipePageHeroClockIcon = styled(ClockIcon)`
  width: 14px;
  height: 14px;

  @media ${minDevice.tablet} {
    width: 20px;
    height: 20px;
  }
`;