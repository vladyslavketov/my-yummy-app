import styled from "styled-components";
import { minDevice } from "components/common/breakpoints";

export const StyledFavoriteList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 50px;

  @media ${minDevice.tablet} {gap: 40px;}
  @media ${minDevice.desktop} {gap: 50px;}
`