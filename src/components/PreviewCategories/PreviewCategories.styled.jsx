import styled from "styled-components";
import { Link } from "react-router-dom";
import { minDevice } from "components/common/breakpoints";

export const PreviewCategoriesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  @media ${minDevice.tablet} {gap: 50px;};
  @media ${minDevice.desktop} {gap: 100px;};
`;
export const PreviewCategoriesItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${minDevice.tablet} {gap: 40px;};
  @media ${minDevice.desktop} {gap: 50px;};
`;
export const PreviewCategoriesItemTitle = styled(Link)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: #001833;

  @media ${minDevice.tablet} {font-size: 44px;};
`;
export const PreviewCategoriesItemNavLink = styled(Link)`
  margin-left: auto;
`;
