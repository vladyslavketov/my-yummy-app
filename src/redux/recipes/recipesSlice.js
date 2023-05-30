import { createSlice } from '@reduxjs/toolkit';
import { addFavorite, deleteFavorite, getCategoriesList, getFavorite, getRecipesByCategory, getRecipesById, getRecipesPreview } from './recipesOperation';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  preview: null,
  currentRecipe: null,
  favorites: [],
  loading: true,
  isLoading: false,
  error: null,
};

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
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
        state.currentRecipe = action.payload;
        state.loading = false;
      })
      // .addCase(getRecipesById.rejected, state => {})

      .addCase(addFavorite.pending, (state) => {
        handlePending(state);
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentRecipe.inFavorites = true;
        // state.favorites.push(action.payload);
      })
      .addCase(addFavorite.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(getFavorite.pending, state => {
        handlePending(state);
      })
      .addCase(getFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.favorites = action.payload;
      })
      .addCase(getFavorite.rejected, (state, action) => {
        handleRejected(state, action);
      })

      .addCase(deleteFavorite.pending, state => {
        handlePending(state);
      })
      .addCase(deleteFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // const index = state.favorites.findIndex(
        //   recipe => recipe.id === action.payload.id
        // );
        // state.favorites.splice(index, 1);
        state.currentRecipe.inFavorites = false;
      })
      .addCase(deleteFavorite.rejected, (state, action) => {
        handleRejected(state, action);
      })
});

export const recipesReducer = recipesSlice.reducer;