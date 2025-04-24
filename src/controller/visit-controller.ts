import AuthHelper from "@/helper/authHelper";
import { VISIT_API_ROUTES } from "../../routes/visit-routes";

export const CreateVisit = async (
  token: string,
  IdToken: string,
  payload: any
) => {
  const result = await AuthHelper.ApiRequest({
    endpoint: VISIT_API_ROUTES.CREATE_VISIT,
    method: "POST",
    body: payload,
    token: token,
    IdToken: IdToken,
  });

  if (!result || !result.success || !result.data) {
    console.log("Error in creating visit");
  }

  return result.data;
};

export const getVisit = async (token: string, IdToken: string) => {
  const result = await AuthHelper.ApiRequest({
    endpoint: VISIT_API_ROUTES.GET_VISIT,
    method: "GET",
    token: token,
    IdToken: IdToken,
  });

  if (!result || !result.success || !result.data) {
    console.log("No visit data available");
  }

  return result.data;
};
