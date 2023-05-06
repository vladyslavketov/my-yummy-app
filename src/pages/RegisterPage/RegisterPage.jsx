import { AuthPageBgImg, AuthPageBox, AuthPageBoxWrap, AuthPageContainer, AuthPageNavLink, AuthPageSection, AuthPageSectionBg } from "components/Auth/AuthPage.styled";
import RegisterForm from "components/Auth/RegisterForm";

const RegisterPage = () => {
  return (
    <AuthPageSection>
      <AuthPageContainer>
        <AuthPageBoxWrap>
          <AuthPageBgImg />
          <AuthPageBox>
            <RegisterForm />
            <AuthPageNavLink to="/signin">Sign In</AuthPageNavLink>
          </AuthPageBox>
        </AuthPageBoxWrap>
      </AuthPageContainer>
      <AuthPageSectionBg />
    </AuthPageSection>
  )
};

export default RegisterPage;