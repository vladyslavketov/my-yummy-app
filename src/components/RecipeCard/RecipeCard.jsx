import {
  RecipeCardImg,
  RecipeCardLink,
  RecipeCardTitle,
} from './RecipeCard.styled';

const RecipeCard = ({ recipesItem }) => {
  const { _id, title, preview } = recipesItem;

  return (
    <RecipeCardLink to={`/recipe/${_id}`}>
      {/* <RecipeCardImg src={`${process.env.PUBLIC_URL}/images/recipecard.jpg`} width={300} height={324}/> */}
      <RecipeCardImg src={preview} width={300} height={324} />
      <RecipeCardTitle>{title}</RecipeCardTitle>
    </RecipeCardLink>
  );
};

export default RecipeCard;
