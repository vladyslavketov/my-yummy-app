export const selectLoading = state => state.recipes.loading;
export const selectRecipesPreview = state => state.recipes.preview;
export const selectCurrentCategory = state => state.recipes.currentCategory;
export const selectCategoriesList = state => state.recipes.categoriesList;
export const selectCurrentRecipe = state => state.recipes.currentRecipe;
export const selectCurrentRecipeIngredients = state => state.recipes.currentRecipe?.ingredients;