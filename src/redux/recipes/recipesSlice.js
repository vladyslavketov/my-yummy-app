import { createSlice } from '@reduxjs/toolkit';
import { getCategoriesList, getRecipesByCategory, getRecipesById, getRecipesPreview } from './recipesOperation';

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    preview: null,
    loading: true,
  },
  extraReducers: builder =>
    builder
      // .addCase(getRecipesPreview.pending, state => {})
      .addCase(getRecipesPreview.fulfilled, (state, action) => {
        state.preview = action.payload.result;
        state.loading = false;
      })
      // .addCase(getRecipesPreview.rejected, state => {})
      // .addCase(getCategoriesList.pending, state => {})
      .addCase(getCategoriesList.fulfilled, (state, action) => {
        state.categoriesList = action.payload.categories;
      })
      // .addCase(getCategoriesList.rejected, state => {})
      .addCase(getRecipesByCategory.pending, state => {state.loading = true;})
      .addCase(getRecipesByCategory.fulfilled, (state, action) => {      
        state.currentCategory = {
          name: action.payload.result[0]?.category,
          recipes: action.payload.result,
          page: 1,
        };
        state.loading = false;
      })
      // .addCase(getRecipesByCategory.rejected, state => {})
      .addCase(getRecipesById.pending, state => {state.loading = true;})
      .addCase(getRecipesById.fulfilled, (state, action) => {      
        state.currentRecipe = action.payload.result[0];
        state.loading = false;
      })
      // .addCase(getRecipesById.rejected, state => {})
});

export const recipesReducer = recipesSlice.reducer;