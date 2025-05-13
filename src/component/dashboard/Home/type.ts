export interface SystemStatusCardProps {
  count: string;
  status: string;
  bgColor: string;
  darkBgColor: string;
}

export interface DealerItemChildProps {
  name: string;
  isDealer?: boolean;
  children?: DealerItemChildProps[];
}

export interface DealerItemProps {
  name: string;
  isDealer?: boolean;
  children?: DealerItemChildProps[];
  level?: number;
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

export const dealerData = [
    {
      name: "EC POWER - GERMANY",
      isDealer: true,
      children: [
        { name: "Carb test 01", isDealer: false },
        { name: "Carb test 02", isDealer: false },
      ]
    },
    {
      name: "EC POWER - ITALY",
      isDealer: true,
      children: [
        { name: "Carb test 03", isDealer: false },
        { name: "Carb test 04", isDealer: false },
      ]
    },
    {
      name: "EC POWER - FRANCE",
      isDealer: true,
      children: [
        { name: "Carb test 05", isDealer: false },
        { name: "Carb test 06", isDealer: false },
      ]
    }
  ];

