import { useSelector } from "react-redux";
import { RecipePageHeroBtn, RecipePageHeroClockIcon, RecipePageHeroContainer, RecipePageHeroDesc, RecipePageHeroSection, RecipePageHeroTime, RecipePageHeroTitle } from "./RecipePageHerostyled";
import { selectCurrentRecipe } from "redux/recipes/recipesSelectors";

const RecipePageHero = () => {
  const currentRecipe = useSelector(selectCurrentRecipe);
  
  if (!currentRecipe) return <RecipePageHeroSection />

  const {title, description, time} = currentRecipe;

  return (
    <RecipePageHeroSection>
      <RecipePageHeroContainer>
        <RecipePageHeroTitle>{title}</RecipePageHeroTitle>
        <RecipePageHeroDesc>{description}</RecipePageHeroDesc>
        <RecipePageHeroBtn>Add to favorite recipes</RecipePageHeroBtn>
        <RecipePageHeroTime>
          <RecipePageHeroClockIcon />
          <span>{time}</span>min
        </RecipePageHeroTime>
      </RecipePageHeroContainer>
    </RecipePageHeroSection>
  )
}

export default RecipePageHero;