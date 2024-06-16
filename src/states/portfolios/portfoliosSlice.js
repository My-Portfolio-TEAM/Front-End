import { createSlice } from '@reduxjs/toolkit';
import { createPortfolioAsync, portfolioDetailAsync, portfoliosAsync } from './portfoliosThunk';
import { logoutUser } from '../authUser/authUserThunk';

const initialState = {
  portfolios: [],
  status: 'idle',
  error: null,
  loading: false
};

const portfolioSlice = createSlice({
  name: 'portfolios',
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(portfoliosAsync.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
        state.portfolios = [];
      })
      .addCase(portfoliosAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loading = false;
        state.error = null;
        state.portfolios = action.payload.data;
      })
      .addCase(portfoliosAsync.rejected, (state, action) => {
        state.status = 'rejected';
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(portfolioDetailAsync.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(portfolioDetailAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loading = false;
        state.error = null;
        state.portfolios = Array.isArray(action.payload.data) ? action.payload.data : [];
      })
      .addCase(portfolioDetailAsync.rejected, (state, action) => {
        state.status = 'rejected';
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createPortfolioAsync.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(createPortfolioAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loading = false;
        state.error = null;
        state.portfolios = action.payload.data;
      })
      .addCase(createPortfolioAsync.rejected, (state, action) => {
        state.status = 'rejected';
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.portfolios = [];
      });
  }
});

export default portfolioSlice.reducer;
