import RecipeCard from "components/RecipeCard/RecipeCard";
import { RecipesItem, RecipesList } from "./RecipeList.styled";

const RecipeList = () => {
  return (
  <RecipesList>
    <RecipesItem><RecipeCard /></RecipesItem>
    <RecipesItem><RecipeCard /></RecipesItem>
    <RecipesItem><RecipeCard /></RecipesItem>
    <RecipesItem><RecipeCard /></RecipesItem>
    {/* <RecipesItem><RecipeCard /></RecipesItem>
    <RecipesItem><RecipeCard /></RecipesItem>
    <RecipesItem><RecipeCard /></RecipesItem>
    <RecipesItem><RecipeCard /></RecipesItem> */}

  </RecipesList>
  )
}

export default RecipeList;