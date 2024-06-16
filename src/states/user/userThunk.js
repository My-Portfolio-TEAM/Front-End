import { createAsyncThunk } from '@reduxjs/toolkit';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import axiosInstance from '../../api/axiosConfig';

export const getAllUsersAsync = createAsyncThunk(
  'user/getAllUsers',
  async (_, { dispatch, rejectWithValue }) => {
    dispatch(showLoading());
    try {
      const response = await axiosInstance.get('/api/users');
      return response.data.data;
    } catch (error) {
      return rejectWithValue({ error: error.message });
    } finally {
      dispatch(hideLoading());
    }
  }
);

export const getUserIdAsync = createAsyncThunk(
  'user/getUserId',
  async ({id}, { dispatch, rejectWithValue }) => {
    dispatch(showLoading());
    try {
      const response = await axiosInstance.get(`/api/users/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: error.message });
    } finally {
      dispatch(hideLoading());
    }
  }
);
export const getMostActiveUsers = createAsyncThunk(
  'user/mostActiveUsers',
  async (_, { dispatch, rejectWithValue }) => {
    dispatch(showLoading());
    try {
      const response = await axiosInstance.get(`/api/most-active-users`);
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: error.message });
    } finally {
      dispatch(hideLoading());
    }
  }
);
