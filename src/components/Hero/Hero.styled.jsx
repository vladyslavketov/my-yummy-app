import Container from 'components/common/Container.styled';
import styled from 'styled-components';

export const HeroSection = styled.section``;
export const HeroContainer = styled(Container)`
  display: flex;
`;
export const HeroBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 505px;
`;
export const HeroBox2 = styled.div``;


export const HeroTitle = styled.h1`
  margin-bottom: 14px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 1;
  text-align: center;
  letter-spacing: -0.005em;
  color: #8BAA36;

  span {
    color: #22252A;
  }
`;
export const HeroText = styled.p`
  margin-bottom: 14px;
  
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* or 133% */

  letter-spacing: -0.02em;

  color: #23262A;
`;

