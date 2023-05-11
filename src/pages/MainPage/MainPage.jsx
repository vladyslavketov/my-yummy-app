import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "components/common/Container.styled";
import PreviewCategories from "components/PreviewCategories/PreviewCategories";
import { getRecipesPreview } from "redux/recipes/recipesOperation";
import { selectRecipesPreview } from "redux/recipes/recipesSelectors";
import { OtherCategoriesBtn, PreviewCategoriesSection } from "./MainPage.styled";
import { useNavigate } from "react-router-dom";
import Hero from "components/Hero/Hero";

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [render, setRender] = useState(1);
  const recipesPreview = useSelector(selectRecipesPreview);

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