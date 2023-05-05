import { useNavigate } from 'react-router-dom';

import {
  BtnOvalBlack,
  BtnOvalTransparent,
} from 'components/common/Btns.styled';
import {
  WelcomePageSection,
  WelcomePageContainer,
  WelcomePageBox,
  WelcomePageLogo,
  WelcomePageTitle,
  WelcomePageText,
  WelcomePageNavList,
} from './WelcomePage.styled';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
      <WelcomePageSection>
        <WelcomePageContainer>
          <WelcomePageBox>
            <WelcomePageLogo src={`${process.env.PUBLIC_URL}/images/logo.svg`} />
            <WelcomePageTitle>Welcome to the app!</WelcomePageTitle>
            <WelcomePageText>
              This app offers more than just a collection of recipes - it is
              designed to be your very own digital cookbook. You can easily save
              and retrieve your own recipes at any time.
            </WelcomePageText>
            <WelcomePageNavList>
              <BtnOvalBlack onClick={() => navigate('/register')}>
                Registration
              </BtnOvalBlack>
              <BtnOvalTransparent onClick={() => navigate('/signin')}>
                Sign in
              </BtnOvalTransparent>
            </WelcomePageNavList>
          </WelcomePageBox>
        </WelcomePageContainer>
      </WelcomePageSection>
  );
};

export default WelcomePage;
