import { BtnRectGreen } from "components/common/Btns.styled";
import { maxDevice, minDevice } from "components/common/breakpoints";
import styled from "styled-components";

export const FormSubcribeTag = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;

  @media ${minDevice.tablet} and ${maxDevice.desktop} {
    flex-direction: row;
    gap: 12px;
  }
  @media ${minDevice.desktop} {gap: 16px;};
`;
export const FormSubcribeLabel = styled.label``;
export const FormSubcribeInput = styled.input`
  width: 204px;
  height: 38px;
  padding: 10px 14px 10px 42px;

  border-radius: 6px;
  border: 1px solid;
  border-color: #FAFAFA;
  opacity: 0.16;

  @media ${minDevice.tablet} {
    width: 259px;
    height: 50px;
  };
  @media ${minDevice.desktop} {
    width: 338px;
    height: 60px;
  };
`;
export const FormSubcribeBtn = styled(BtnRectGreen)`
  width: 100%;
  height: 38px;
  cursor: pointer;

  @media ${minDevice.tablet} and ${maxDevice.desktop} {
    width: 170px;
    height: 50px;
  };
  @media ${minDevice.desktop} {height: 60px;};
`;
