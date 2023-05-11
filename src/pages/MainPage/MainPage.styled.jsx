import styled from 'styled-components';
import { minDevice } from 'components/common/breakpoints';
import { BtnOvalTransparent } from 'components/common/Btns.styled';

export const OtherCategoriesBtn = styled(BtnOvalTransparent)`
  width: 195px;
  height: 46px;
  margin: 40px auto 0;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #22252A;
  
  border-color: #8BAA36;

  &:hover, :focus {
    color: #FAFAFA;
    background: #8BAA36;
  }

  @media ${minDevice.tablet} {margin-top: 32px}
  @media ${minDevice.desktop} {margin-top: 14px}
`;
