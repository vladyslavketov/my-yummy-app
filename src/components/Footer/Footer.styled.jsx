import styled from "styled-components";
import Container from "components/common/Container.styled";
import { maxDevice, minDevice } from "components/common/breakpoints";

export const FooterTag = styled.footer`
  position: relative;
  
  overflow: hidden;
`;

export const FooterTop = styled.div`
  position: relative;

  padding: 28px 0 18px;

  background: ${props => props.theme.footer.bgColor};
  z-index: 1;

  @media ${minDevice.tablet} {padding: 50px 0 24px;};
  @media ${minDevice.desktop} {padding: 64px 0 50px;};
`;
export const FooterTopContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;
export const FooterTopBoxWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 32px;

  @media ${maxDevice.tablet} {
    flex-direction: column;
  }

  @media ${minDevice.tablet} {
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 72px;
  }
`;
export const LogoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;

  @media ${minDevice.tablet} {width: 338px;};
`;
export const BenefitsList = styled.ul`
  width: 338px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  list-style: disc;
  padding-left: 18px;

  @media ${maxDevice.tablet} {display: none;};
`;
export const BenefitsItem = styled.li`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: #FAFAFA;

  // ::marker {
  //   color: green;
  // }
`;
export const FormSubcribeWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;

  @media ${minDevice.tablet} and ${maxDevice.desktop} {
    align-items: center;
    flex: 0 0 100%;
  }
  @media ${minDevice.tablet} {width: 338px;};
`;
export const FormSubcribeMsg = styled.strong`
  margin-bottom: 14px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5px;
  color: #FAFAFA;

  @media ${maxDevice.desktop} {
    display: none;
  }
`;
export const FormSubcribeText = styled.p`
  display: none;

  @media ${minDevice.desktop} {
    display: block;
    margin-bottom: 28px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: #FAFAFA;
  }
`;

export const FooterBottom = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  height: 66px;

  overflow: hidden;
`;
export const FooterBottomContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  z-index: 1;
`;