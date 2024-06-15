import { createSlice } from '@reduxjs/toolkit';
import { createMyPhotoProfileAsync, myProfileAsync } from './myProfileThunk';
import { logoutUser } from '../authUser/authUserThunk';

const initialState = {
    myProfile: null,
    status: 'idle',
    error: null,
    loading: true,
    loadingPhoto: true,
    loadingBackground: true,
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
            state.loadingPhoto = false;
            state.loadingBackground = false;
            state.error = null;
            state.myProfile = action.payload.myProfile;
        })
        .addCase(myProfileAsync.rejected, (state, action) => {
            state.status = 'rejected';
            state.loading = false;
            state.loadingPhoto = false;
            state.loadingBackground = false;
            state.error = action.payload
        })
        .addCase(logoutUser.pending, (state) => {
            state.status = 'loading'
            state.loading = true
            })
            .addCase(logoutUser.fulfilled, (state) => {
            state.myProfile = null;
            state.status = 'idle';
            state.error = null;
            state.loading = false;
            })
        .addCase(createMyPhotoProfileAsync.pending, (state) => {
            state.loadingPhoto = true;
        })
        .addCase(createMyPhotoProfileAsync.fulfilled, (state) => {
            state.loadingPhoto = false;
        })
        .addCase(createMyPhotoProfileAsync.rejected, (state) => {
            state.loadingPhoto = false;
        });
    }
});

export default myProfileSlice.reducer;