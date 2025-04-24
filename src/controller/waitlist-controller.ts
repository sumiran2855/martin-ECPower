import AuthHelper from "@/helper/authHelper";
import { WAITLIST_API_ROUTES } from "../../routes/waitlist-routes";

export const CreateWaitlist = async (
  token: string,
  IdToken: string,
  payload: any
) => {
  const result = await AuthHelper.ApiRequest({
    endpoint: WAITLIST_API_ROUTES.CREATE_WAITLIST,
    method: "POST",
    body: payload,
    token: token,
    IdToken: IdToken,
  });

  if (!result || !result.success || !result.data) {
    console.log("Error in creating waitlist");
  }

  return result.data;
};

export const getWaitlist = async (token: string, IdToken: string) => {
  const result = await AuthHelper.ApiRequest({
    endpoint: WAITLIST_API_ROUTES.GET_WAITLIST,
    method: "GET",
    token: token,
    IdToken: IdToken,
  });

  if (!result || !result.success || !result.data) {
    console.log("No waitlist data available");
  }

  return result.data;
};
