import AuthHelper from "@/helper/authHelper";
import { FACILITY_API_ROUTES } from "../../routes/facility-routes";

export const getFacility = async (token: string, IdToken: string) => {
  const result = await AuthHelper.ApiRequest({
    endpoint: FACILITY_API_ROUTES.GET_FACILITY,
    method: "GET",
    token: token,
    IdToken: IdToken,
  });

  if (!result || !result.success || !result.data) {
    console.log("No facility data available");
  }

  return result.data;
};
