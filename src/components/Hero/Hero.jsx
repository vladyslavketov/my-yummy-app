import { HeroBox, HeroBox2, HeroContainer, HeroDecoreBg, HeroDecoreLeafsLeft, HeroDecoreLeafsRight, HeroDesc, HeroDescWrap, HeroLink, HeroSection, HeroText, HeroTitle } from "./Hero.styled";
import Search from "components/Search/Search";

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroBox>
          <HeroTitle><span>So</span>Yummy</HeroTitle>
          <HeroText>"What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.</HeroText>
          <Search></Search>
        </HeroBox>
        <HeroBox2>
          <HeroDescWrap>
            <HeroDesc><span>Delicious and healthy</span> way to enjoy a variety of fresh ingredients in one satisfying meal</HeroDesc>
            <HeroLink to={'/categories/breakfast'}>See recipes</HeroLink>
          </HeroDescWrap>
        </HeroBox2>
        <HeroDecoreLeafsLeft />
        <HeroDecoreLeafsRight />
        <HeroDecoreBg />
      </HeroContainer>
    </HeroSection>
  )
}

export default Hero;

// <HeroDecoreLeafsLeft /> 