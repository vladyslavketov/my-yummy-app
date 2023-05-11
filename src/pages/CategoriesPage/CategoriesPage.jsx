import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getCategoriesList, getRecipesByCategory } from "redux/recipes/recipesOperation";
import MainTitle from "components/MainTitle/MainTitle";
import Container from "components/common/Container.styled";
import RecipeList from "components/RecipeList/RecipeList";
import { selectCategoriesList, selectCurrentCategory } from "redux/recipes/recipesSelectors";
import CategoriesTab from "components/CategoriesTab/CategoriesTab";

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const { categoryName: name } = useParams();
  const [render, setRender] = useState(1);
  const categoriesList = useSelector(selectCategoriesList);
  const currentCategory = useSelector(selectCurrentCategory);

  useEffect(() => {
    if (render) {
      setRender(0);
      return;
    }

    if (!categoriesList) dispatch(getCategoriesList());
    dispatch(getRecipesByCategory({ category: name }));
  }, [dispatch, render, categoriesList, name ]);

  return (
    <Container>
      <MainTitle title={'Categories'} />
      <CategoriesTab />
      {currentCategory?.recipes && <RecipeList />}
    </Container>
  );
};

export default CategoriesPage;