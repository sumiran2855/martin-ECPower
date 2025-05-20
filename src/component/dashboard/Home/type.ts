export interface SystemStatusCardProps {
  count: string;
  status: string;
  bgColor: string;
  darkBgColor: string;
}

export const getStatusCards = (t: (key: string) => string) => [
  { count: "1202", status: t("systemStatus.ok"), bgColor: "bg-blue-100", darkBgColor: "bg-blue-900" },
  { count: "6601", status: t("systemStatus.full_stop"), bgColor: "bg-yellow-100", darkBgColor: "bg-yellow-900" },
  { count: "725", status: t("systemStatus.alarmstop"), bgColor: "bg-red-100", darkBgColor: "bg-red-900" },
  { count: "626", status: t("systemStatus.stopped_calling"), bgColor: "bg-blue-50", darkBgColor: "bg-blue-800" },
  { count: "555", status: t("systemStatus.standby"), bgColor: "bg-green-100", darkBgColor: "bg-green-900" },
  { count: "211", status: t("systemStatus.test_system"), bgColor: "bg-blue-50", darkBgColor: "bg-blue-800" },
  { count: "66", status: t("systemStatus.under_installation"), bgColor: "bg-purple-100", darkBgColor: "bg-purple-900" },
  { count: "75", status: t("systemStatus.waiting_position"), bgColor: "bg-green-50", darkBgColor: "bg-green-800" },
];

export const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Germany",
    "France",
    "Japan",
    "Australia",
    "Denmark",
  ];

  export interface DealerItemChildProps {
    name: string;
    isDealer?: boolean;
  }
  
  export interface DealerItemProps {
    name: string;
    isDealer?: boolean;
    children?: DealerItemChildProps[];
    dealerId?: string;  
    customerId?: string; 
  }

  export interface DealerData {
    id: string;
    dealer_name: string;
    city: string;
    country: string;
    Address: string;
    postCode: string;
    customer_id?: string;
    createdAt: string;
    updatedAt: string;
    children?: DealerChildData[];
  }

export interface DealerChildData {
  name: string;
  isDealer?: boolean;
}

export interface CustomerData {
  id: string;
  name: string;
  email: string;
  phone_number: string;
  companyInfo: {
    name: string;
    companyName:string;
    address: string;
    city: string;
    postal_code: string;
    cvrNumber: string;
    email: string;
    phone: string;
  };
  contactPerson: {
    firstName: string;
    lastName: string;
    personalPhone: string;
    personalEmail: string;
  };
  selected?: boolean;
}

export interface FacilityData {
  id: string;
  xrgiID: string;
  modelNumber: string;
  name: string;
  location: {
    city: string;
    address: string;
    postalCode: string;
  };
  status: string;
  isInstalled: boolean;
  userID: string;
}