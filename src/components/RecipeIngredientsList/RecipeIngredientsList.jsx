import Container from "components/common/Container.styled";
import { RecipeIngredientsListSection, RecipeIngredientsListTag, RecipeIngredientsTitleColumn, RecipeIngredientsTitleColumnWrap } from "./RecipeIngredientsList.styled";
import { selectCurrentRecipeIngredients } from "redux/recipes/recipesSelectors";
import { useSelector } from "react-redux";
import RecipeIngredientsItem from "components/RecipeIngredientsItem/RecipeIngredientsItem";

const RecipeIngredientsList = () => {
  const currentRecipeIngredients = useSelector(selectCurrentRecipeIngredients);

  return (
    <RecipeIngredientsListSection>
      <Container>
        <RecipeIngredientsTitleColumnWrap>
          <RecipeIngredientsTitleColumn>Ingredients</RecipeIngredientsTitleColumn>
          <RecipeIngredientsTitleColumn>Number</RecipeIngredientsTitleColumn>
          <RecipeIngredientsTitleColumn>Add to list</RecipeIngredientsTitleColumn>
        </RecipeIngredientsTitleColumnWrap>
        {currentRecipeIngredients && 
          <RecipeIngredientsListTag>
            {currentRecipeIngredients?.map(item => (
              <RecipeIngredientsItem key={item._id} ingredientData={item} />
            ))}
          </RecipeIngredientsListTag>
        }
      </Container>
    </RecipeIngredientsListSection>
  )
}

export default RecipeIngredientsList;