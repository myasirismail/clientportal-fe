import axios from "axios";
import { RedirectToLogin } from "../utils";
const baseURL = import.meta.env.VITE_APP_BASE_URL;
const ssoURL = import.meta.env.VITE_APP_SSO_BASE_URL;
const createAxiosInstance = (baseURL) => {
  const instance = axios.create({
    baseURL,
  });

  instance.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "token"
      )}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      let run = Boolean(localStorage.getItem("run") || false);

      // Check if the error is due to an expired token (401 Unauthorized)
      if (error.response.status === 401 && !originalRequest._retry && !run) {
        originalRequest._retry = true;
        // localStorage.setItem("run", true);
        try {
          // Call the API to refresh the token and update it in localStorage
          const res = await axios.post(
            "https://devapi-sso.lyca.sa/api/Auth/NewAuthToken",
            {
              refreshToken: localStorage.getItem("refreshToken"),
              authToken: localStorage.getItem("token"),
            }
          );

          // Update the token in localStorage
          let refreshResponse = res.data;
          if (refreshResponse?.succeeded) {
            localStorage.setItem("token", refreshResponse.data.authToken);
            localStorage.setItem(
              "refreshToken",
              refreshResponse.data.refreshToken
            );
            localStorage.removeItem("run");
          } else {
            RedirectToLogin();
            return Promise.reject();
          }

          // Retry the original request with the new token
          return instance(originalRequest);
        } catch (refreshError) {
          RedirectToLogin();
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    }
  );

  return instance;
};

export const lycaAxios = createAxiosInstance(baseURL);
export const ssoAxios = createAxiosInstance(ssoURL);
