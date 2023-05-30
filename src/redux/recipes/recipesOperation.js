import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRecipesPreview = createAsyncThunk(
  'recipes/getRecipesPreview',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/recipes/preview');
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
  async ({category, page}, thunkAPI) => {
    try {
      const res = await axios.get(`/recipes/categories/${category}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getRecipesById = createAsyncThunk(
  'recipes/getRecipesById',
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`/recipes/${id}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getFavorite = createAsyncThunk(
  'favorite/getFavorite',
  async (page, thunkAPI) => {
    if (!page) page = 1;
    try {
      const res = await axios.get(`/recipes/favorites?page=${page}&limit=4`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addFavorite = createAsyncThunk(
  'favorite/addFavorite',
  async (_id, thunkAPI) => {
    try {
      const res = await axios.put(`/recipes/favorites/${_id}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteFavorite = createAsyncThunk(
  'favorite/deleteFavorite',
  async (_id, thunkAPI) => {
    try {
      const res = await axios.patch(`/recipes/favorites/${_id}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);