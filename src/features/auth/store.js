const store = configureStore({
  reducer: {
    login: LoginReducer,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
    logout: LogoutReducer,
  },
});

export default store;
