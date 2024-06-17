import { createSlice } from '@reduxjs/toolkit';
import { createPostAsync, getDetailPostAsync, getMyPostAsync, mostLikedPostsAsync, postsAsync } from './postThunk';
import { logoutUser } from '../authUser/authUserThunk';

const initialState = {
  posts: [],
  mostLikedPosts: [],
  searchInput: '',
  selectedPost: 'All Posts',
  page: 1,
  current_page: 1,
  last_page: 1,
  status: 'idle',
  error: null,
  loading: false,
  loadingSearch: false,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    searchPost: (state, action) => {
      state.searchInput = action.payload;
    },
    setPage: (state) => {
      state.page += 1; 
    },
    setPageToOne: (state) => {
      state.page = 1;
    },
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(postsAsync.pending, (state) => {
        state.status = 'loading';
        state.loading = false;
      })
      .addCase(postsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loading = false;
        state.loadingSearch = false;
        state.error = null;
        state.current_page = action.payload.current_page;
        state.last_page = action.payload.last_page;

        if(state.current_page === 1) {
          state.posts = action.payload.posts;
          } else {
            state.posts = [...state.posts, ...action.payload.posts];
        }
      })
      .addCase(postsAsync.rejected, (state, action) => {
        state.status = 'rejected';
        state.loading = false;
        state.loadingSearch = false;
        state.error = action.payload;
        state.current_page = 1;
      })
      .addCase(mostLikedPostsAsync.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
        state.mostLikedPosts = [];
      })
      .addCase(mostLikedPostsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loading = false;
        state.error = null;
        state.mostLikedPosts = action.payload.data;
      })
      .addCase(mostLikedPostsAsync.rejected, (state, action) => {
        state.status = 'rejected';
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getMyPostAsync.pending, (state) => {
        state.status = 'loading';
        state.loading = true;

      })
      .addCase(getMyPostAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loading = false;
        state.loadingSearch = false;
        state.error = null;
        state.current_page = action.payload.current_page;
        state.last_page = action.payload.last_page;

        if(state.current_page === 1) {
          state.posts = action.payload.posts;
          } else {
            state.posts = [...state.posts, ...action.payload.posts];
        }
      })
      .addCase(getMyPostAsync.rejected, (state, action) => {
        state.status = 'rejected';
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getDetailPostAsync.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
        state.currentPost = null;
      })
      .addCase(getDetailPostAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loading = false;
        state.error = null;
        state.currentPost = action.payload;
      })
      .addCase(getDetailPostAsync.rejected, (state, action) => {
        state.status = 'rejected';
        state.loading = false;
        state.error = action.payload;
        state.currentPost = null;
      })
      .addCase(createPostAsync.pending, (state) => {
        state.status = 'loading';
        state.current_page = 1;
        state.page = 1;
        state.loading = true;
        state.searchInput = '';
        state.selectedPost = 'All Posts';

      })
      .addCase(createPostAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loading = false;
        state.error = null;
        state.posts = action.payload;
      })
      .addCase(createPostAsync.rejected, (state, action) => {
        state.status = 'rejected';
        state.loading = false;
        state.error = action.payload;
      })
      ;
  }
});
export const { searchPost, setPage, setSelectedPost, setPageToOne } = postsSlice.actions;
export default postsSlice.reducer;
