import { AuthPageBgImg, AuthPageBox, AuthPageBoxWrap, AuthPageContainer, AuthPageNavLink, AuthPageSection, AuthPageSectionBg } from "components/Auth/AuthPage.styled";
import SigninForm from "components/Auth/SigninForm";

const SigninPage = () => {
  return (
    <AuthPageSection>
      <AuthPageContainer>
        <AuthPageBoxWrap>
          <AuthPageBgImg />
          <AuthPageBox>
            <SigninForm />
            <AuthPageNavLink to="/register">Registration</AuthPageNavLink>
          </AuthPageBox>
        </AuthPageBoxWrap>
      </AuthPageContainer>
      <AuthPageSectionBg />
    </AuthPageSection>
  )
};

export default SigninPage;