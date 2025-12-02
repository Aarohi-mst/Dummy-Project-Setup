import axios from "axios";
import store from "../../features/auth/store";

const navigate = () => {
  window.location.href = path;
};

const axiosInstance = axios.create({
  baseURL: process.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const state = store?.getState();
    const { authToken } = state?.login || {};
    const tokenToUse = authToken;
    if (tokenToUse) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${tokenToUse}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    const config = response.config;
    const data = response.data; //{status code, message}
    const statusCode = data?.statusCode;
    const statusMsg = data?.message || "";
    if (!config.url?.includes("/get") && !config.url?.includes("dashboard")) {
      if ((statusCode === 200 || statusCode === 201) && statusMsg) {
        showToast(statusMsg, "success");
      }
      if (
        statusCode !== undefined &&
        ((statusCode >= 400 && statusCode < 500) ||
          (statusCode >= 500 && statusCode < 600))
      ) {
        showToast(statusMsg, "error");
      }
      if (statusCode === 419) {
        navigate("/login");
        store.dispatch(clearAuthState());
      }
      return response;
    }
  },
  async (error) => {
    if (error.message === "Network Error" && !error.response) {
      showToast("Server is unavailable. Please try again later.", "error");
    } else if (
      error.status !== undefined &&
      ((error.status >= 400 && error.status < 500) ||
        (error.status >= 500 && error.status < 600))
    ) {
      showToast(error.message, "error");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
