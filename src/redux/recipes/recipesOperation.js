import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://yummy-app-backend.onrender.com/api/';

export const getRecipesPreview = createAsyncThunk(
  'recipes/getRecipesPreview',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/recipes/preview');
      // console.log(res.data);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCategoriesList = createAsyncThunk(
  'recipes/getCategoriesList',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/recipes/categories');
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getRecipesByCategory = createAsyncThunk(
  'recipes/getRecipesByCategory',
  // async ({category, page}, thunkAPI) => {
  async ({category, page}, thunkAPI) => {
    try {
      const res = await axios.get(`/recipes/categories/${category}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);