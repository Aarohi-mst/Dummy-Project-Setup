import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_AUTH_PATHS } from "../../api/auth.api";
import axiosInstance from "../../network/interceptor/axiosInstance";

export const LoginUser = createAsyncThunk(
  "auth/LoginUser",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(API_AUTH_PATHS.adminLogin, payload);
      return res.data;
    } catch (error) {
      return rejectWithValue({
        message: "Login failed",
      });
    }
  }
);

export const ForgotPassword = createAsyncThunk(
  "auth/ForgotPassword",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(
        API_AUTH_PATHS.adminForgotPassword,
        payload
      );
      return res.data;
    } catch (error) {
      return rejectWithValue({
        message: "Request failed",
      });
    }
  }
);

export const ResetPassword = createAsyncThunk(
  "auth/ResetPassword",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(
        API_AUTH_PATHS.adminResetPassword,
        payload
      );
      return res.data;
    } catch (error) {
      return rejectWithValue({
        message: "Reset password request failed",
      });
    }
  }
);

export const LogoutUser = createAsyncThunk(
  "auth/LogoutUser",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(API_AUTH_PATHS.adminLogout, payload);
      return res.data;
    } catch (error) {
      return rejectWithValue({
        message: "Logout failed",
      });
    }
  }
);
