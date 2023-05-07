import MainTitle from "components/MainTitle/MainTitle";
import Container from "components/common/Container.styled";
import {
  BtnRectBlack,
  BtnRectGreen,
  BtnRectGray,
  BtnOvalBlack,
  BtnOvalGreen,
  BtnOvalTransparent,
} from 'components/common/Btns.styled';

const UiKit = () => {
  return (
    <Container>
      <MainTitle title={'Ui Kit'} />
      <div style={{display: 'flex', gap: 16, padding: 20}}>
        <BtnRectBlack>Press Me</BtnRectBlack>
        <BtnRectGreen>Press Me</BtnRectGreen>
        <BtnRectGray>Press Me</BtnRectGray>
      </div>
      <div style={{display: 'flex', gap: 16, padding: 20, backgroundColor: 'skyblue'}}>
        <BtnOvalBlack>Press Me</BtnOvalBlack>
        <BtnOvalGreen>Press Me</BtnOvalGreen>
        <BtnOvalTransparent>Press Me</BtnOvalTransparent>
      </div>
    </Container>
  );
};

export default UiKit;