import RecipeList from "components/RecipeList/RecipeList";
import { MainPageCatList, MainPageCatItem, MainPageCatItemTitle, MainPageCatItemNavLink } from "./MainPageCatList.styled";

const MainPageCategoriesList = () => {
  return (
  <MainPageCatList>
    <MainPageCatItem>
      <MainPageCatItemTitle>Breakfast</MainPageCatItemTitle>
      <RecipeList />
      <MainPageCatItemNavLink to='/categories/breakfast'>See more</MainPageCatItemNavLink>
    </MainPageCatItem>
    <MainPageCatItem>
      <MainPageCatItemTitle>Miscellaneous</MainPageCatItemTitle>
      <RecipeList />
      <MainPageCatItemNavLink to='/categories/miscellaneous'>See more</MainPageCatItemNavLink>
    </MainPageCatItem>
    <MainPageCatItem>
      <MainPageCatItemTitle>Chicken</MainPageCatItemTitle>
      <RecipeList />
      <MainPageCatItemNavLink to='/categories/chicken'>See more</MainPageCatItemNavLink>
    </MainPageCatItem>
    <MainPageCatItem>
      <MainPageCatItemTitle>Desserts</MainPageCatItemTitle>
      <RecipeList />
      <MainPageCatItemNavLink to='/categories/desserts'>See more</MainPageCatItemNavLink>
    </MainPageCatItem>
  </MainPageCatList>
  )
}

export default MainPageCategoriesList;