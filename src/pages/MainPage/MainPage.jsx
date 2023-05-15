import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "components/common/Container.styled";
import PreviewCategories from "components/PreviewCategories/PreviewCategories";
import { getRecipesPreview } from "redux/recipes/recipesOperation";
import { selectLoading, selectRecipesPreview } from "redux/recipes/recipesSelectors";
import { OtherCategoriesBtn, PreviewCategoriesSection } from "./MainPage.styled";
import { useNavigate } from "react-router-dom";
import Hero from "components/Hero/Hero";
import Loading from "components/Loading/Loading";
// import Loading from "components/Loading/Loading";

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [render, setRender] = useState(1);
  const recipesPreview = useSelector(selectRecipesPreview);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    if (render) {
      setRender(0);
      return;
    }
    if (recipesPreview) return

    dispatch((getRecipesPreview()));
  }, [dispatch, render, setRender, recipesPreview]);

  return (
    <>
      {isLoading && <Loading />}
      <Hero />
      <PreviewCategoriesSection>
        <Container>
          {recipesPreview && <PreviewCategories recipesPreview={recipesPreview} />}
          <OtherCategoriesBtn onClick={() => navigate('/categories/beef')} >Other categories</OtherCategoriesBtn>
        </Container>
      </PreviewCategoriesSection>
    </>
  )
};

export default MainPage;