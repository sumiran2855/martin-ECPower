import AuthHelper from "@/helper/authHelper";
import { USER_API_ROUTES } from "../../routes/user-routes";

export const CreateUser = async (
  token: string,
  IdToken: string,
  payload: any
) => {
  try {
    const result = await AuthHelper.ApiRequest({
      endpoint: USER_API_ROUTES.CREATE_USER,
      method: "POST",
      body: payload,
      token,
      IdToken,
    });
    console.log("Create User Result:", result);

    if (!result || !result.success || !result.data) {
      console.error("Error in creating user:", result?.message || "Unknown error");
      return null;
    }

    return result.data;
  } catch (error) {
    console.error("Request failed:", error);
    return null;
  }
};