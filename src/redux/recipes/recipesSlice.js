import { createSlice } from '@reduxjs/toolkit';
import { getRecipesByCategory, getRecipesPreview } from './recipesOperation';

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    preview: null,
  },
  extraReducers: builder =>
    builder
      // .addCase(getRecipesPreview.pending, state => {})
      .addCase(getRecipesPreview.fulfilled, (state, action) => {
        state.preview = action.payload.result;
      })
      // .addCase(getRecipesPreview.rejected, state => {})
      // .addCase(getRecipesPreview.pending, state => {})
      .addCase(getRecipesByCategory.fulfilled, (state, action) => {      
        state.currentCategory = {
          name: action.payload.result[0]?.category,
          recipes: action.payload.result,
          page: 1
        };
      })
      // .addCase(getRecipesPreview.rejected, state => {})
});

export const recipesReducer = recipesSlice.reducer;