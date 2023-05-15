import styled from 'styled-components';
import { minDevice } from 'components/common/breakpoints';
import Container from 'components/common/Container.styled';

export const RecipePreparationSection = styled.section`
  // display: flex;
  // align-items: center;
  // padding: 10px 29px 10px 10px;

  // background-color: #EBF3D4;
  // border-radius: 8px;

  // @media ${minDevice.tablet} {
  //   padding: 16px 58px 16px 24px;
  // }
  // @media ${minDevice.desktop} {
  //   padding: 20px 70px 20px 32px;
  // }
`;
export const RecipePreparationContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media ${minDevice.tablet} {
    gap: 50px;
  }
  @media ${minDevice.desktop} {
    flex-direction: row;
  }
`;

export const RecipePreparationWrap = styled.div`
  // display: flex;
  // flex-direction: column;
  // gap: 50px;
`;
export const RecipePreparationTitle = styled.h2`
  margin-bottom: 28px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.24px;
  color: #3E4462; /* Color - Text Primary */

  @media ${minDevice.tablet} {
    margin-bottom: 32px;
  }
`;
export const RecipePreparationList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media ${minDevice.tablet} {
    gap: 20px;
  }
  @media ${minDevice.desktop} {
    gap: 18px;
  }
`;
export const RecipePreparationItem = styled.li`
  display: flex;
  // align-items: center;
  gap: 14px;
`;
export const RecipePreparationItemNumber = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 20px;
  height: 20px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
  font-feature-settings: 'ss04' on;
  color: #FFFFFF;

  background-color: #8BAA36;
  border-radius: 100px;

  @media ${minDevice.tablet} {
    font-size: 14px;
  }
`;
export const RecipePreparationItemText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.8);

  @media ${minDevice.tablet} {
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const RecipePreparationImg = styled.img`
  object-fit: cover;
  aspect-ratio: 1/1;
  border-radius: 8px;

  @media ${minDevice.tablet} {
    flex: 0 0 432px;
    width: 432px;
    height: 432px;
  }
`;
