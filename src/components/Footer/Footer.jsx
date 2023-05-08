import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import {
  BenefitsItem,
  BenefitsList,
  FooterBottom,
  FooterBottomContainer,
  FooterTag,
  FooterTop,
  FooterTopBoxWrap,
  FooterTopContainer,
  FormSubcribeMsg,
  FormSubcribeText,
  FormSubcribeWrap,
  LogoWrap,
} from './Footer.styled';
import SocialMedia from 'components/SocialMedia/SocialMedia';
import FormSubcribe from 'components/FormSubcribe/FormSubcribe';
import {
  DecoreLeafsBottom,
  DecoreLeafsTop,
} from 'components/common/DecoreLeafs.styled';

const Footer = () => {
  return (
    <FooterTag>
      <FooterTop>
        <FooterTopContainer>
          <FooterTopBoxWrap>
            <LogoWrap>
              <Logo newClass={'logo--footer'}/>
              <BenefitsList>
                <BenefitsItem>Database of recipes that can be replenished</BenefitsItem>
                <BenefitsItem>Flexible search for desired and unwanted ingredients</BenefitsItem>
                <BenefitsItem>Ability to add your own recipes with photos</BenefitsItem>
                <BenefitsItem>Convenient and easy to use</BenefitsItem>
              </BenefitsList>
            </LogoWrap>
            <Navigation newClass={'nav__list--footer'} />
            <FormSubcribeWrap>
              <FormSubcribeMsg>Subscribe to our Newsletter</FormSubcribeMsg>
              <FormSubcribeText>
                Subscribe up to our newsletter. Be in touch with latest news and
                special offers, etc.
              </FormSubcribeText>
              <FormSubcribe />
            </FormSubcribeWrap>
          </FooterTopBoxWrap>
          <SocialMedia newClass={'social-media__list--footer'} />
          {/* <SocialMedia newClass={"social-media__list--add"} /> */}
        </FooterTopContainer>
      </FooterTop>
      <FooterBottom>
        <FooterBottomContainer>
          <p>© 2023 All Rights Reserved.</p>
          <p>Terms of Service</p>
        </FooterBottomContainer>
        <DecoreLeafsBottom />
      </FooterBottom>
      <DecoreLeafsTop />
    </FooterTag>
  );
};

export default Footer;
