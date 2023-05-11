import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getRecipesByCategory } from "redux/recipes/recipesOperation";
import MainTitle from "components/MainTitle/MainTitle";
import Container from "components/common/Container.styled";
import RecipeList from "components/RecipeList/RecipeList";
import { selectCurrentCategory } from "redux/recipes/recipesSelectors";

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const { categoryName: name } = useParams();
  const [render, setRender] = useState(1);
  const currentCategory = useSelector(selectCurrentCategory);
  const currentCategoryRecipes = currentCategory?.recipes;

  useEffect(() => {
    if (render) {
      setRender(0);
      return;
    }

    dispatch(getRecipesByCategory({ category: name }));
  }, [dispatch, name, render]);

  return (
    <Container>
      <MainTitle title={'Categories'} />
      {currentCategoryRecipes && <RecipeList recipesList={currentCategoryRecipes} />}
    </Container>
  );
};

export default CategoriesPage;