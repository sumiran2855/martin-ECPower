import { getFacility } from "@/controller/facility-controller";

export interface InstallationData {
  xrgiID: string;
  name: string;
  address: string;
  postalCode: string;
  city: string;
  selected: boolean;
}

export const get_Facility = async (): Promise<InstallationData[]> => {
  const token = localStorage.getItem("token") || "";
  const IdToken = localStorage.getItem("IdToken") || "";

  try {
    const data = await getFacility(token, IdToken);
    return data.map((facility: any) => ({
      xrgiID: facility.xrgiID || "",
      name: facility.modelNumber || "",
      address: facility.location.address || "",
      postalCode: facility.location.postalCode || "",
      city: facility.location.city || "",
      selected: false,
    }));
  } catch (error) {
    console.error("Failed to fetch facilities:", error);
    return [];
  }
};
