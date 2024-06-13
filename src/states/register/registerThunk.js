import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosConfig';
import { toast } from 'react-toastify';

export const registerAsync = createAsyncThunk(
  'auth/register',
  async ({ name, email, password, password_confirmation }, { rejectWithValue }) => {
    if (!name || !email || !password || !password_confirmation) {
      toast.error('All fields are required');
      return rejectWithValue();
    }

    if (password != password_confirmation) {
      toast.error('Passwords do not match');
      return rejectWithValue();
    }

    try {
      const response = await axiosInstance.post('/api/register', {
        name,
        email,
        password,
        password_confirmation
      });
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue({ error: error.response.data.message });
    }
  }
);
