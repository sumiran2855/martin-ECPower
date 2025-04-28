import { getFacility } from "@/controller/facility-controller";

export interface InstallationData {
  xrgiID: string;
  userID: string;
  name: string;
  address: string;
  postalCode: string;
  city: string;
  selected: boolean;
  email?: boolean;
  sms?: boolean;
}

export const get_Facility = async (): Promise<InstallationData[]> => {
  const token = localStorage.getItem("token") || "";
  const IdToken = localStorage.getItem("IdToken") || "";

  try {
    const data = await getFacility(token, IdToken);
    return data.map((facility: any) => ({
      xrgiID: facility.xrgiID || "",
      userID:facility.userID || "",
      name: facility.modelNumber || "",
      address: facility.location.address || "",
      postalCode: facility.location.postalCode || "",
      city: facility.location.city || "",
      email:facility.email || "",
      sms:facility.sms || "",
      selected: false,
    }));
  } catch (error) {
    console.error("Failed to fetch facilities:", error);
    return [];
  }
};
