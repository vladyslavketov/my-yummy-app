import Container from "components/common/Container.styled";
import MainPageCategoriesList from "components/MainPageCatList/MainPageCatList";
import MainTitle from "components/MainTitle/MainTitle";
// import RecipeCard from "components/RecipeCard/RecipeCard";
// import RecipeList from "components/RecipeList/RecipeList";

const MainPage = () => {
  return (
    <Container>
      {/* <MainTitle title={'Main Page'} /> */}
      <MainTitle title={''} />
      {/* <RecipeList /> */}
      <MainPageCategoriesList />
    </Container>
  )
};

export default MainPage;