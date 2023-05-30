import RecipeIngredientsList from "components/RecipeIngredientsList/RecipeIngredientsList";
import RecipePageHero from "components/RecipePageHero/RecipePageHero";
import RecipePreparation from "components/RecipePreparation/RecipePreparation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipesById } from "redux/recipes/recipesOperation";
import { selectCurrentRecipe, } from "redux/recipes/recipesSelectors";

const RecipePage = () => {
  const dispatch = useDispatch();
  const [render, setRender] = useState(1);
  const { recipeId: id } = useParams();
  const currentRecipe = useSelector(selectCurrentRecipe);

  useEffect(() => {
    if (render) {
      setRender(0);
      return;
    }
    dispatch(getRecipesById(id));

  }, [render, dispatch, id]);

  return (
    <>
      <RecipePageHero />
      <RecipeIngredientsList />
      {currentRecipe && <RecipePreparation currentRecipe={currentRecipe}/>}
    </>
    
  )
};

export default RecipePage;