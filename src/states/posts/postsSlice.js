import { createSlice } from '@reduxjs/toolkit';
import { createPostAsync, getDetailPostAsync, getMyPostAsync, postsAsync } from './postThunk';

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
      })
      .addCase(getMyPostAsync.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
        state.posts = [];
      })
      .addCase(getMyPostAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loading = false;
        state.error = null;
        state.posts = action.payload.data;
      })
      .addCase(getMyPostAsync.rejected, (state, action) => {
        state.status = 'rejected';
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getDetailPostAsync.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
        state.posts = [];
      })
      .addCase(getDetailPostAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loading = false;
        state.error = null;
        state.posts = action.payload.data;
      })
      .addCase(getDetailPostAsync.rejected, (state, action) => {
        state.status = 'rejected';
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createPostAsync.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(createPostAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loading = false;
        state.error = null;
        state.posts = action.payload.data;
      })
      .addCase(createPostAsync.rejected, (state, action) => {
        state.status = 'rejected';
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default postsSlice.reducer;
