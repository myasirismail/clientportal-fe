import { ssoAxios } from "./interceptors";

export const getUserProfileApi = async () => {
  const response = await ssoAxios.get("/Account/GetUserProfile");
  return response.data;
}; 