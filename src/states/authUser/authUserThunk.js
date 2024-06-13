import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosConfig';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';

const authUserAsync = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    if (!email || !password) {
      toast.error('Email and password must not be empty');
      return rejectWithValue();
    }

    try {
      const response = await axiosInstance.post('/api/login', { email, password });
      localStorage.setItem('access_token', response.data.token);
      toast.success('Login successful');
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message ?? 'email or password is incorrect';
      toast.error(errorMessage);
      return rejectWithValue({ error: errorMessage });
    }
  }
);

const checkAuthStatus = createAsyncThunk('auth/checkStatus', async (_, { rejectWithValue }) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    try {
      const response = await axiosInstance.get('/api/me', {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
});

const logoutUser = createAsyncThunk('auth/logoutUser', async (_, { dispatch, rejectWithValue }) => {
  dispatch(showLoading());
  try {
    await axiosInstance.post('/api/logout');
    localStorage.removeItem('access_token');
    toast.success('Logout successful');
    return { token: null };
  } catch (error) {
    toast.error(error.message);
    return rejectWithValue({ error: error.message });
  } finally {
    dispatch(hideLoading());
  }
});

export { authUserAsync, checkAuthStatus, logoutUser };
