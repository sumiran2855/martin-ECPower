"use client";
import React from "react";
import { FaDesktop } from "react-icons/fa";
import { useTheme } from "@/app/dashboard/layout"; 
import { useTranslation } from "react-i18next";
import { getStatusCards, SystemStatusCardProps } from "./type";

const SystemStatusCard: React.FC<SystemStatusCardProps> = ({
  count,
  status,
  bgColor,
  darkBgColor,
}) => {
  const { darkMode } = useTheme();
  return (
    <div className={`${darkMode ? darkBgColor : bgColor} rounded-lg p-4 flex flex-col items-center justify-center h-24 md:h-28 shadow-sm w-full transition-colors duration-300`}>
      <h2 className={`text-xl md:text-2xl font-bold ${darkMode ? 'text-white' : 'text-blue-900'}`}>{count}</h2>
      <p className={`${darkMode ? 'text-gray-300' : 'text-blue-900'} text-sm md:text-base`}>{status}</p>
    </div>
  );
};

const SystemStatus: React.FC = () => {
  const { t } = useTranslation("home")
  const { darkMode } = useTheme();
  const statusCards = getStatusCards(t);
  
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