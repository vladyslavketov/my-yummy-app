import { useState } from 'react';
import {
  IngredientCheckbox,
  IngredientCheckboxIcon,
  IngredientImg,
  IngredientItem,
  IngredientLabel,
  IngredientNumber,
  IngredientTitle,
} from './RecipeIngredientsItem.styled';

const RecipeIngredientsItem = ({ ingredientData }) => {
  const [checked, setChecked] = useState(false);
  const { ttl, thb, measure } = ingredientData;

  return (
    <IngredientItem>
      <IngredientImg src={thb} alt={ttl} />
      <IngredientTitle>{ttl}</IngredientTitle>
      <IngredientNumber>{measure}</IngredientNumber>
      <IngredientLabel>
        <IngredientCheckbox
          type="checkbox"
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />
        <IngredientCheckboxIcon />
      </IngredientLabel>
    </IngredientItem>
  );
};

export default RecipeIngredientsItem;
