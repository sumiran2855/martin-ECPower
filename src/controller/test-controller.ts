import AuthHelper from "@/helper/authHelper";
import { TEST_API_ROUTES } from "../../routes/test-routes";

export const CreateTest = async (
  token: string,
  IdToken: string,
  payload: any
) => {
  const result = await AuthHelper.ApiRequest({
    endpoint: TEST_API_ROUTES.CREATE_TEST,
    method: "POST",
    body: payload,
    token: token,
    IdToken: IdToken,
  });

  if (!result || !result.success || !result.data) {
    console.log("Error in creating test");
  }

  return result.data;
};

export const getTest = async (token: string, IdToken: string) => {
  const result = await AuthHelper.ApiRequest({
    endpoint: TEST_API_ROUTES.GET_TEST,
    method: "GET",
    token: token,
    IdToken: IdToken,
  });

  if (!result || !result.success || !result.data) {
    console.log("No test data available");
  }

  return result.data;
};
