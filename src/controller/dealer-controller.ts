import AuthHelper from "@/helper/authHelper";
import { DEALER_API_ROUTES } from "../../routes/dealer-routes";

export const CreateDealer = async (
  token: string,
  IdToken: string,
  payload: any
) => {
  try {
    const result = await AuthHelper.ApiRequest({
      endpoint: DEALER_API_ROUTES.CREATE_DEALER,
      method: "POST",
      body: payload,
      token,
      IdToken,
    });

    if (!result || !result.success || !result.data) {
      console.error("Error in creating dealer:", result?.message || "Unknown error");
      return null;
    }

    return result.data;
  } catch (error) {
    console.error("Request failed:", error);
    return null;
  }
};


export const getAllDealer = async (
    token: string,
    IdToken: string,
  ) => {
    const result = await AuthHelper.ApiRequest({
      endpoint: `${DEALER_API_ROUTES.GET_ALL_DEALER}`,
      method: "GET",
      token: token,
      IdToken: IdToken,
    });
  
    if (!result || !result.success || !result.data) {
      console.log("No dealer data found or failed to fetch dealers.");
    }
  
    return result.data;
  };

export const getCustomer = async (id: string, token: string, IdToken: string) => {
  const result = await AuthHelper.ApiRequest({
    endpoint: `${DEALER_API_ROUTES.GET_CUSTOMER}/${id}`,
    method: "GET",
    token: token,
    IdToken: IdToken,
  });

  if (!result || !result.success || !result.data) {
    console.log("No customer data found or failed to fetch customer.");
  }

  return result.data;
};

export const getFacilityById = async (id: string, token: string, IdToken: string) => {
  const result = await AuthHelper.ApiRequest({
    endpoint: `${DEALER_API_ROUTES.GET_FACILITY_BY_ID}/${id}`,
    method: "GET",
    token: token,
    IdToken: IdToken,
  });

  if (!result || !result.success || !result.data) {
    console.log("No facility data found or failed to fetch facility.");
  }

  return result.data;
};

export const getAllCustomer = async (
    token: string,
    IdToken: string,
  ) => {
    const result = await AuthHelper.ApiRequest({
      endpoint: `${DEALER_API_ROUTES.GET_ALL_CUSTOMER}`,
      method: "GET",
      token: token,
      IdToken: IdToken,
    });
  
    if (!result || !result.success || !result.data) {
      console.log("No customers data found or failed to fetch customer.");
    }
    return result.data;
  };