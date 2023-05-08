import { RecipeCardImg, RecipeCardLink, RecipeCardTitle } from "./RecipeCard.styled";

const RecipeCard = () => {
  return (
    <RecipeCardLink to='/'>
      <RecipeCardImg src={`${process.env.PUBLIC_URL}/images/recipecard.jpg`} width={300} height={324}/>
      <RecipeCardTitle>Portuguese prego</RecipeCardTitle>
    </RecipeCardLink>
  )
}

export default RecipeCard;