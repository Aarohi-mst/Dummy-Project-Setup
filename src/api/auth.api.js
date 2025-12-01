const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_VERSION = import.meta.env.VITE_API_VERSION;

const BASE_URL = {
  AUTH: `${API_BASE_URL}/${API_VERSION}/auth`,
  DASHBOARD: `${API_BASE_URL}/${API_VERSION}/dashboard`,
};

export const API_AUTH_PATHS = {
  adminLogin: `${BASE_URL.AUTH}/admin/login`,
  adminForgotPassword: `${BASE_URL.AUTH}/admin/forgot-password`,
  adminResetPassword: `${BASE_URL.AUTH}/admin/reset-password`,
  adminLogout: `${BASE_URL.AUTH}/auth/logout,`,
};
