import { createSlice } from '@reduxjs/toolkit';
import { getAllUsersAsync, getMostActiveUsers, getUserIdAsync } from './userThunk';
import { logoutUser } from '../authUser/authUserThunk';

const initialState = {
  user: null,
  users: [],
  mostActiveUsers: [],
  status: 'idle',
  error: null,
  loading: true
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsersAsync.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
        state.users = [];
      })
      .addCase(getAllUsersAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loading = false;
        state.error = null;
        state.users = action.payload.data;
        state.user = null;
        state.mostActiveUsers = [];
      })
      .addCase(getAllUsersAsync.rejected, (state, action) => {
        state.status = 'rejected';
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getUserIdAsync.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
        state.user = null;
      })
      .addCase(getUserIdAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loading = false;
        state.error = null;
        state.user = action.payload.data;
        state.users = [];
        state.mostActiveUsers = [];
      })
      .addCase(getUserIdAsync.rejected, (state, action) => {
        state.status = 'rejected';
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getMostActiveUsers.pending, (state, action) => {
        state.status = 'loading';
        state.loading = true;
        state.error = action.payload;
      })
      .addCase(getMostActiveUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loading = false;
        state.mostActiveUsers = action.payload.data.data;
        state.users = [];
        state.user = null;
      })
      .addCase(getMostActiveUsers.rejected, (state, action) => {
        state.status = 'rejected';
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = true;
        state.status = 'idle';
        state.error = null;
        state.users = [];
        state.user = null;
        state.mostActiveUsers = [];
      })
      
      
      ;
  }
});

export default userSlice.reducer;
