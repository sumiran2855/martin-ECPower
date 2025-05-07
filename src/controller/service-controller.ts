import AuthHelper from "@/helper/authHelper";
import { SERVICE_API_ROUTES } from "../../routes/service-routes";

export const CreateServiceReport = async (
  token: string,
  IdToken: string,
  payload: any
) => {
  const result = await AuthHelper.ApiRequest({
    endpoint: SERVICE_API_ROUTES.CREATE_SERVICE_REPORT,
    method: "POST",
    body: payload,
    token: token,
    IdToken: IdToken,
  });

  if (!result || !result.success || !result.data) {
    console.log("Error in creating service report");
  }

  return result.data;
};

export const getServiceReport = async (
    token: string,
    IdToken: string,
    id: string
  ) => {
    const result = await AuthHelper.ApiRequest({
      endpoint: `${SERVICE_API_ROUTES.GET_SERVICE_REPORT}/${id}`,
      method: "GET",
      token: token,
      IdToken: IdToken,
    });
  
    if (!result || !result.success || !result.data) {
      console.log("No service report data available");
    }
  
    return result.data;
  };
  
