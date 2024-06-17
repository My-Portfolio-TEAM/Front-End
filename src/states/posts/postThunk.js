import { createAsyncThunk } from '@reduxjs/toolkit';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import axiosInstance from '../../api/axiosConfig';

export const postsAsync = createAsyncThunk(
  'posts/fetchPosts',
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
  'posts/getMyPost',
  async (_, { dispatch, rejectWithValue }) => {
    dispatch(showLoading());
    try {
      const response = await axiosInstance.get('/api/my-posts');
      return response.data.data;
    } catch (error) {
      toast.error(error.response.data.data);
      return rejectWithValue({ error: error.response.data });
    } finally {
      dispatch(hideLoading());
    }
  }
);

export const getDetailPostAsync = createAsyncThunk(
  'posts/getDetailPost',
  async ({ id }, { dispatch, rejectWithValue }) => {
    dispatch(showLoading());
    try {
      const response = await axiosInstance.get(`/api/posts/${id}`);
      return response.data.data;
    } catch (error) {
      toast.error(error.response.data);
      return rejectWithValue({ error: error.response.data });
    } finally {
      dispatch(hideLoading());
    }
  }
);

export const createPostAsync = createAsyncThunk(
  'posts/createPost',
  async ({ content, image }, { dispatch, rejectWithValue }) => {
    dispatch(showLoading());

    try {
      const formData = new FormData();
      formData.append('content', content);
      formData.append('image', image);

      const response = await axiosInstance.post('/api/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      dispatch(postsAsync());

      toast.success(response.data);
      return response.data;
    } catch (error) {
      toast.error(error.response.data);
      return rejectWithValue({ error: error.response.data });
    }
  }
);
