import { createAsyncThunk } from '@reduxjs/toolkit';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import axiosInstance from '../../api/axiosConfig';

export const postsAsync = createAsyncThunk(
  'auth/posts',
  async (_, { dispatch, rejectWithValue }) => {
    dispatch(showLoading());
    try {
      const response = await axiosInstance.get('/api/posts');
      return response.data.data;
    } catch (error) {
      toast.error(error.response.data);
      return rejectWithValue({ error: error.response.data });
    } finally {
      dispatch(hideLoading());
    }
  }
);

export const getMyPostAsync = createAsyncThunk(
  'auth/getMyPost',
  async (_, { dispatch, rejectWithValue }) => {
    dispatch(showLoading());
    try {
      const response = await axiosInstance.get('/api/my-posts');
      return response.data.data;
    } catch (error) {
      toast.error(error.response.data);
      return rejectWithValue({ error: error.response.data });
    } finally {
      dispatch(hideLoading());
    }
  }
);
