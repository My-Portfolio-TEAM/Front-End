import { createSlice } from '@reduxjs/toolkit';
import { getAllUsersAsync, getUserIdAsync } from './userThunk';

const initialState = {
  user: {},
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
        state.user = {};
      })
      .addCase(getAllUsersAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loading = false;
        state.error = null;
        state.user = action.payload.data;
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
      });
  }
});

export default userSlice.reducer;
