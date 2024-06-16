import { createSlice } from '@reduxjs/toolkit';
import { getAllUsersAsync, getMostActiveUsers, getUserIdAsync } from './userThunk';

const initialState = {
  user: {},
  users: [],
  mostActiveUsers: [],
  status: 'idle',
  error: null,
  loading: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: [],
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
      })
      .addCase(getAllUsersAsync.rejected, (state, action) => {
        state.status = 'rejected';
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getUserIdAsync.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
        state.user = {};
      })
      .addCase(getUserIdAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loading = false;
        state.error = null;
        state.user = action.payload.data;
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
      })
      .addCase(getMostActiveUsers.rejected, (state, action) => {
        state.status = 'rejected';
        state.loading = false;
        state.error = action.payload;
      })
      
      
      ;
  }
});

export default userSlice.reducer;
