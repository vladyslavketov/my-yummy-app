import styled from 'styled-components';
import { minDevice } from 'components/common/breakpoints';
import { ReactComponent as PickIcon } from '../../icons/pick.svg';

export const IngredientItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 29px 10px 10px;

  background-color: #EBF3D4;
  border-radius: 8px;

  @media ${minDevice.tablet} {
    padding: 16px 58px 16px 24px;
  }
  @media ${minDevice.desktop} {
    padding: 20px 70px 20px 32px;
  }
`;
export const IngredientImg = styled.img`
  flex 0 0 60px;
  height: 60px;
  margin-right: 4px;
  object-fit: contain;

  @media ${minDevice.tablet} {
    flex 0 0 144px;
    height: 144px;
    margin-right: 24px;
  }
  @media ${minDevice.desktop} {
    flex 0 0 160px;
    height: 160px;
    margin-right: 40px;
  }
`;
export const IngredientTitle = styled.p`
  margin-right: auto;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.24px;
  color: #3E4462; // Color - Text Primary

  @media ${minDevice.tablet} {
    font-size: 24px;
    line-height: 1;
  }
`;
export const IngredientNumber = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  margin-right: 28px;
  padding: 4px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;
  text-align: right;
  color: #FAFAFA;

  background-color: #8BAA36;
  border-radius: 4px;

  @media ${minDevice.tablet} {
    height: 35px;
    padding: 4px 8px;
    margin-right: 78px;

    font-size: 18px;
  }
  @media ${minDevice.desktop} {
    margin-right: 151px;
  }
`;
export const IngredientLabel = styled.label`
  position: relative;

  width: 18px;
  height: 18px;

  border: 1px solid rgba(126, 126, 126, 0.5);
  border-radius: 4px;

  @media ${minDevice.tablet} {
    width: 36px;
    height: 36px;
  }
`;
export const IngredientCheckbox = styled.input`
  width: 0px;
  height: 0px;
  opacity: 0;
`;
export const IngredientCheckboxIcon = styled(PickIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 9px;
  height: 9px;
  display: none;

  input:checked + &{
    display: block;
  }

  @media ${minDevice.tablet} {
    width: 18px;
    height: 18px;
  }
`;
