import { createSlice } from '@reduxjs/toolkit';
import { postsAsync } from './postThunk';

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
  loading: false
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(postsAsync.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
        state.posts = [];
      })
      .addCase(postsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loading = false;
        state.error = null;
        state.posts = action.payload.data;
      })
      .addCase(postsAsync.rejected, (state, action) => {
        state.status = 'rejected';
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default postsSlice.reducer;
