import { HeroBox, HeroBox2, HeroContainer, HeroSection, HeroText, HeroTitle } from "./Hero.styled";
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
          <p>Delicious and healthy way to enjoy a variety of fresh ingredients in one satisfying meal</p>
        </HeroBox2>
      </HeroContainer>
    </HeroSection>
  )
}

export default Hero;