import Container from "components/common/Container.styled";
import { NotFoundPageContainer, NotFoundPageImg, NotFoundPageMsg, NotFoundPageMsgStart } from "./NotFoundPage.styled";
import MainTitle from "components/MainTitle/MainTitle";

const NotFoundPage = () => {
  return (
    <>
      <Container><MainTitle title={''} /></Container>
      <NotFoundPageContainer>
        <NotFoundPageImg src={`${process.env.PUBLIC_URL}/images/not-found-page.svg`}/>
        <NotFoundPageMsgStart>We are sorry,</NotFoundPageMsgStart>
        <NotFoundPageMsg>but the page you were looking for can’t be found.</NotFoundPageMsg>
      </NotFoundPageContainer>
    </>
  )
}

export default NotFoundPage;