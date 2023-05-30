import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentRecipe } from 'redux/recipes/recipesSelectors';
import {
  RecipePageHeroBtn,
  RecipePageHeroClockIcon,
  RecipePageHeroContainer,
  RecipePageHeroDesc,
  RecipePageHeroSection,
  RecipePageHeroTime,
  RecipePageHeroTitle,
} from './RecipePageHerostyled';
import { addFavorite, deleteFavorite } from 'redux/recipes/recipesOperation';

const RecipePageHero = () => {
  const dispatch = useDispatch();
  // const [inFavorites, setInFavorites] = useState('');
  const currentRecipe = useSelector(selectCurrentRecipe);
  const { recipeId } = useParams();

  if (!currentRecipe) return <RecipePageHeroSection />;

  const { title, description, time } = currentRecipe;

  const handleClickAddBtn = async recipeId => {
    await dispatch(currentRecipe.inFavorites ? deleteFavorite(recipeId) : addFavorite(recipeId));
  };

  return (
    <RecipePageHeroSection>
      <RecipePageHeroContainer>
        <RecipePageHeroTitle>{title}</RecipePageHeroTitle>
        <RecipePageHeroDesc>{description}</RecipePageHeroDesc>
        <RecipePageHeroBtn onClick={() => handleClickAddBtn(recipeId)}>
          {currentRecipe.inFavorites ? "Remove from favorite" : "Add to favorite"}
        </RecipePageHeroBtn>
        <RecipePageHeroTime>
          <RecipePageHeroClockIcon />
          <span>{time}</span>min
        </RecipePageHeroTime>
      </RecipePageHeroContainer>
    </RecipePageHeroSection>
  );
};

export default RecipePageHero;
