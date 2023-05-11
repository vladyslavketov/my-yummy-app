import RecipeList from 'components/RecipeList/RecipeList';
import {
  PreviewCategoriesItem,
  PreviewCategoriesItemNavLink,
  PreviewCategoriesItemTitle,
  PreviewCategoriesList,
} from './PreviewCategories.styled';

const PreviewCategories = ({ recipesPreview }) => {
  return (
    <PreviewCategoriesList>
      {recipesPreview.map(item => (
        <PreviewCategoriesItem key={item._id}>
          <PreviewCategoriesItemTitle to={`/categories/${item._id.toLowerCase()}`} >{item._id}</PreviewCategoriesItemTitle>
          <RecipeList recipesList={item.recipes} isMainPage={true} />
          <PreviewCategoriesItemNavLink to={`/categories/${item._id.toLowerCase()}`}>
            See more
          </PreviewCategoriesItemNavLink>
        </PreviewCategoriesItem>
      ))}
    </PreviewCategoriesList>
  );
};

export default PreviewCategories;
