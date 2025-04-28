"use client";
import React from "react";
import { FaDesktop } from "react-icons/fa";
import { useTheme } from "@/app/dashboard/layout"; 
import { useTranslation } from "react-i18next";

interface SystemStatusCardProps {
  count: string;
  status: string;
  bgColor: string;
  darkBgColor: string;
}

const SystemStatusCard: React.FC<SystemStatusCardProps> = ({
  count,
  status,
  bgColor,
  darkBgColor,
}) => {
  const { darkMode } = useTheme();
  
  return (
    <div
      className={`${darkMode ? darkBgColor : bgColor} rounded-lg p-4 flex flex-col items-center justify-center h-24 md:h-28 shadow-sm w-full transition-colors duration-300`}
    >
      <h2 className={`text-xl md:text-2xl font-bold ${darkMode ? 'text-white' : 'text-blue-900'}`}>{count}</h2>
      <p className={`${darkMode ? 'text-gray-300' : 'text-blue-900'} text-sm md:text-base`}>{status}</p>
    </div>
  );
};

const SystemStatus: React.FC = () => {
  const { t } = useTranslation("home")
  const { darkMode } = useTheme();
  
  const statusCards = [
    { count: "1202", status: t("systemStatus.ok"), bgColor: "bg-blue-100", darkBgColor: "bg-blue-900" },
    { count: "6601", status: t("systemStatus.full_stop"), bgColor: "bg-yellow-100", darkBgColor: "bg-yellow-900" },
    { count: "725", status: t("systemStatus.alarmstop"), bgColor: "bg-red-100", darkBgColor: "bg-red-900" },
    { count: "626", status: t("systemStatus.stopped_calling"), bgColor: "bg-blue-50", darkBgColor: "bg-blue-800" },
    { count: "555", status: t("systemStatus.standby"), bgColor: "bg-green-100", darkBgColor: "bg-green-900" },
    { count: "211", status: t("systemStatus.test_system"), bgColor: "bg-blue-50", darkBgColor: "bg-blue-800" },
    { count: "66", status: t("systemStatus.under_installation"), bgColor: "bg-purple-100", darkBgColor: "bg-purple-900" },
    { count: "75", status: t("systemStatus.waiting_position"), bgColor: "bg-green-50", darkBgColor: "bg-green-800" },
  ];

  return (
    <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} p-4 rounded-lg shadow-sm transition-colors duration-300`}>
      <div className="flex items-center mb-8">
        <FaDesktop className={`${darkMode ? 'text-blue-400' : 'text-blue-500'} mr-2 text-xl`} />
        <h1 className="text-xl font-semibold">{t("systemStatus.system_status")}</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 cursor-pointer">
        {statusCards.map((card, index) => (
          <SystemStatusCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default SystemStatus;