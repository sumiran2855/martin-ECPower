import AuthHelper from "@/helper/authHelper";
import { AUTH_API_ROUTES } from "../../routes/auth-routes";

export const login = async (email: string, password: string) => {
  const result = await AuthHelper.ApiRequest({
    endpoint: AUTH_API_ROUTES.LOGIN,
    method: "POST",
    body: {
      email,
      password,
    },
  });

  if (result.success) {
    localStorage.setItem("token", result.data.token.accessToken);
    localStorage.setItem("IdToken", result.data.token.idToken);
    localStorage.setItem("i18nextLng", "en");
    localStorage.setItem("language", "en");
  }

  return result;
};
