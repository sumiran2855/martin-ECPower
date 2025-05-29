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
      return result;
    }

    return result;
  } catch (error) {
    console.error("Request failed:", error);
    return null;
  }
};

export const getAllUser = async (
  token: string,
  IdToken: string,
) => {
  const result = await AuthHelper.ApiRequest({
    endpoint:  `${USER_API_ROUTES.GET_All_USER}`,
    method: "GET",
    token: token,
    IdToken: IdToken,
  });

  if (!result || !result.success || !result.data) {
    console.log("No user data found or failed to fetch dealers.");
  }

  return result.data;
};


export const getAllInactiveUsers = async (
    token: string,
    IdToken: string,
  ) => {
    const result = await AuthHelper.ApiRequest({
      endpoint:  `${USER_API_ROUTES.GET_All_USER}?status=InActive`,
      method: "GET",
      token: token,
      IdToken: IdToken,
    });
  
    if (!result || !result.success || !result.data) {
      console.log("No user data found or failed to fetch dealers.");
    }
  
    return result.data;
  };

  export const getAllUnVerifiedUsers = async (
    token: string,
    IdToken: string,
  ) => {
    const result = await AuthHelper.ApiRequest({
      endpoint: `${USER_API_ROUTES.GET_All_USER}?emailVerified=false`,
      method: "GET",
      token: token,
      IdToken: IdToken,
    });
  
    if (!result || !result.success || !result.data) {
      console.log("No user data found or failed to fetch dealers.");
    }
  
    return result.data;
  };