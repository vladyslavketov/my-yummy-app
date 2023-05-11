import RecipeCard from 'components/RecipeCard/RecipeCard';
import { RecipesItem, RecipesList } from './RecipeList.styled';
import { breakpoint } from 'components/common/breakpoints';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

const RecipeList = ({ recipesList, isMainPage }) => { 
  const [newRecipesList, setNewRecipesList] = useState(recipesList);
  const isMobileScreen = useMediaQuery({ maxWidth: (breakpoint.tablet - 1) });
  const isTabletScreen = useMediaQuery({ minWidth: (breakpoint.tablet), maxWidth: (breakpoint.desktop - 1)  });
  
  useEffect(() => {
    if (!isMainPage) return

    if (isMobileScreen) setNewRecipesList(recipesList.slice(0,1))
    else if (isTabletScreen) setNewRecipesList(recipesList.slice(0,2))
    else (setNewRecipesList(recipesList))
  }, [isMainPage, recipesList, isMobileScreen, isTabletScreen])

  return (
    <RecipesList>
      {newRecipesList.map(item => (
        <RecipesItem key={item._id}>
          <RecipeCard recipesItem={item} />
        </RecipesItem>
      ))}
    </RecipesList>
  );
};

export default RecipeList;
