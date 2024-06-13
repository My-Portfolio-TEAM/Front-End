import { createSlice } from "@reduxjs/toolkit"
import { registerAsync } from "./registerThunk";

const initialState = {
  user: null,
  status: 'idle',
  error: null,
}

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
  }
})

export default registerSlice.reducer