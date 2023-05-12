import { minDevice } from "components/common/breakpoints";
import styled from "styled-components";

export const RecipesList = styled.ul`
  display: flex;
  align-items: center;
  // justify-content: center;
  flex-wrap: wrap;
  row-gap: 100px;

  @media ${minDevice.tablet} {column-gap: 32px;}
  @media ${minDevice.desktop} {column-gap: 12px;}
`;

export const RecipesItem = styled.li`
  flex-basis: 100%;

  @media ${minDevice.tablet} {
    --items: 2;
    --gap: 32px;
    flex-basis: calc((100% - var(--gap) * (var(--items) - 1)) / var(--items));
  }
  @media ${minDevice.desktop} {
    --items: 4;
    --gap: 12px;
  }
`;