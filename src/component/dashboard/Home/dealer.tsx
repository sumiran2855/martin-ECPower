"use client";
import React from "react";
import { FaHandshake } from "react-icons/fa6";
import { useTheme } from "@/app/dashboard/layout"; 
import DealerItem from "@/component/cards/dealerItemCards";
import { useTranslation } from "react-i18next";

const Dealer: React.FC = () => {
  const { t } = useTranslation("home")
  const { darkMode } = useTheme();
  
  const dealerData = [
    {
      name: "EC power A/B",
      isDealer: true,
      children: [
        { name: "EC power - Carb test 01", isDealer: false },
        { name: "EC power - Carb test 02", isDealer: false },
      ]
    },
    {
      name: "EC power - D/C",
      isDealer: true,
      children: [
        { name: "EC power - Carb test 03", isDealer: false },
        { name: "EC power - Carb test 04", isDealer: false },
      ]
    },
    {
      name: "EC power - X/Y",
      isDealer: true,
      children: [
        { name: "EC power - Carb test 05", isDealer: false },
        { name: "EC power - Carb test 06", isDealer: false },
      ]
    }
  ];
  
  return (
    <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} p-4 rounded-lg shadow-sm transition-colors duration-300`}>
      <div className="flex items-center mb-4">
        <FaHandshake className={`${darkMode ? 'text-blue-400' : 'text-blue-500'} mr-2 text-xl`} />
        <h1 className="text-xl font-semibold">{t("dealer.dealer")}</h1>
      </div>
      <div className={`border cursor-pointer ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg max-h-72 overflow-y-auto scrollbar-thin ${darkMode ? 'scrollbar-thumb-gray-600 scrollbar-track-gray-800' : 'scrollbar-thumb-gray-300 scrollbar-track-gray-100'}`}>
        {dealerData.map((dealer, index) => (
          <DealerItem 
            key={index}
            name={dealer.name}
            isDealer={dealer.isDealer}
            children={dealer.children}
          />
        ))}
      </div>
    </div>
  );
};

export default Dealer;