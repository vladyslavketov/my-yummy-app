import styled from "styled-components";

const dajc = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BtnRect = styled.button`
  ${dajc}
  flex-shrink: 0;
  width: 200px;
  height: 60px;

  font-size: 16px;
  line-height: 1.12;
 
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const BtnRectBlack = styled(BtnRect)`
  color: #FAFAFA;

  background: #1E1F28;

  &:hover, :focus {
    color: #8BAA36;
  }
`;
export const BtnRectGreen = styled(BtnRect)`
  color: #FAFAFA;

  background: #8BAA36;

  &:hover, :focus {
    color: #23262A;
  }
`;
export const BtnRectGray= styled(BtnRect)`
  color: #23262A;

  background: #D9D9D9;

  &:hover, :focus {
    background: transparent;
    border: 1px solid #23262A;
  }
`;


const BtnOval = styled.button`
  ${dajc}
  flex-shrink: 0;
  width: 160px;
  height: 70px;

  font-size: 16px;
  line-height: 1.5;

  border-radius: 24px 44px;
  border: none;
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const BtnOvalBlack = styled(BtnOval)`
  color: #FAFAFA;

  background: #22252A;

  &:hover, :focus {
    background: #8BAA36;
  }
`;
export const BtnOvalGreen = styled(BtnOval)`
  color: #FAFAFA;

  background: #8BAA36;

  &:hover, :focus {
    background: #22252A;
  }
`;
export const BtnOvalTransparent= styled(BtnOval)`
  color: #FAFAFA;

  background: transparent;
  border: 2px solid;
  border-color: #FAFAFA;

  &:hover, :focus {
    color: #8BAA36;
    border-color: #8BAA36;
  }
`;