import { createSlice } from "@reduxjs/toolkit";
import {
  ForgotPassword,
  LoginUser,
  LogoutUser,
  ResetPassword,
} from "./loginThunk";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(LoginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(LogoutUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(LogoutUser.fulfilled, () => {
      return initialState;
    });
    builder.addCase(LogoutUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(ForgotPassword.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(ForgotPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.data.password;
    });
    builder.addCase(ForgotPassword.rejected, (state) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(ResetPassword.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(ResetPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.data.token;
    });
    builder.addCase(ResetPassword.rejected, (state) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { clearAuthState } = loginSlice.actions;
export default loginSlice.reducer;