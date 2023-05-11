import { useSelector } from "react-redux";
import { selectCategoriesList } from "redux/recipes/recipesSelectors";
import { CategoriesList, CategoriesListItem, CategoriesListLink, CategoriesListWrap } from "./CategoriesTab.styled";

const CategoriesTab = () => {
  const categories = useSelector(selectCategoriesList);

  return (
    <CategoriesListWrap>
      <CategoriesList>
        {categories?.map(item => (
          <CategoriesListItem key={item}>
            <CategoriesListLink to={`/categories/${item.toLowerCase()}`}>{item}</CategoriesListLink>
          </CategoriesListItem>
        ))}
      </CategoriesList>
    </CategoriesListWrap>
  )
}

export default CategoriesTab;