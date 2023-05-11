import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { minDevice } from 'components/common/breakpoints';

export const CategoriesListWrap = styled.div`
  margin-bottom: 50px;

  border-bottom: 1px solid #E0E0E0;

  overflow-x: scroll;
  
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const CategoriesList = styled.ul`
  display: flex;
  gap: 28px;

  @media ${minDevice.tablet} {gap: 55px;};
`;
export const CategoriesListItem = styled.li``;
export const CategoriesListLink = styled(NavLink)`
  position: relative;
  bottom: -1px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 16px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  color: #E0E0E0;

  border-bottom: 2px solid transparent;
  transition: all 600ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;

  &:hover, &:focus, &.active {
    color: #8BAA36;

    border-color: #8BAA36;
  }
`;
