import styled from 'styled-components';
import { minDevice } from 'components/common/breakpoints';

export const RecipeIngredientsListSection = styled.section`
  position: relative;
  top: -58px;

  padding-top: 32px;
`;
export const RecipeIngredientsTitleColumnWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  height: 42px;
  padding: 12px 14px;
  margin-bottom: 24px;

  background-color: #8baa36;
  border-radius: 8px;

  @media ${minDevice.tablet} {
    gap: 38px;
    height: 60px;
    padding: 21px 40px;
    margin-bottom: 32px;
  }

  @media ${minDevice.desktop} {
    gap: 109px;
    margin-bottom: 50px;
  }
`;
export const RecipeIngredientsTitleColumn = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  letter-spacing: 0.03em;
  color: #fafafa;

  :first-child {
    margin-right: auto;
  }

  @media ${minDevice.tablet} {
    font-size: 18px;
  }
`;

export const RecipeIngredientsListTag = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// @media ${minDevice.tablet} {}
