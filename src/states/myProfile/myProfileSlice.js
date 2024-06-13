import { createSlice } from '@reduxjs/toolkit';
import { myProfileAsync } from './myProfileThunk';
import { logoutUser } from '../authUser/authUserThunk';

const initialState = {
    myProfile: null,
    postCount: null,
    portfolioCount: null,
    status: 'idle',
    error: null,
    loading: false
}

const myProfileSlice = createSlice({
    name: 'myProfile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(myProfileAsync.pending, (state) => {
            state.status = 'loading';
            state.loading = true;
        })
        .addCase(myProfileAsync.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.loading = false;
            state.error = null;
            state.myProfile = action.payload.myProfile;
            state.postCount = action.payload.postCount;
            state.portfolioCount = action.payload.portfolioCount
        })
        .addCase(myProfileAsync.rejected, (state, action) => {
            state.status = 'rejected';
            state.loading = false;
            state.error = action.payload
        })
        .addCase(logoutUser.pending, (state) => {
            state.status = 'loading'
            state.loading = true
          })
          .addCase(logoutUser.fulfilled, (state) => {
            state.myProfile = null;
            state.postCount = null;
            state.portfolioCount = null;
            state.status = 'idle';
            state.error = null;
            state.loading = false;
          });
    }
});

export default myProfileSlice.reducer;