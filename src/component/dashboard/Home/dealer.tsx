"use client";
import React, { useState } from "react";
import { FaHandshake, FaPlus } from "react-icons/fa6";
import { useTheme } from "@/app/dashboard/layout"; 
import DealerItem from "@/component/cards/dealerItemCards";
import { useTranslation } from "react-i18next";
import { dealerData } from "./type";
import AddDealerModal from "@/component/dashboard/Home/add-dealer";

const Dealer: React.FC = () => {
  const { t } = useTranslation("home")
  const { darkMode } = useTheme();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
  const handleAddDealer = () => {
    setIsAddModalOpen(true);
  };
  
  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} p-4 rounded-lg shadow-sm transition-colors duration-300`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <FaHandshake className={`${darkMode ? 'text-blue-400' : 'text-blue-500'} mr-2 text-xl`} />
          <h1 className="text-xl font-semibold">{t("dealer.dealer")}</h1>
        </div>
        <button 
          onClick={handleAddDealer}
          className={`p-2 rounded-full cursor-pointer ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors`}
          aria-label="Add dealer"
        >
          <FaPlus />
        </button>
      </div>
      <div className={`border cursor-pointer ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg max-h-64 overflow-y-auto scrollbar-thin ${darkMode ? 'scrollbar-thumb-gray-600 scrollbar-track-gray-800' : 'scrollbar-thumb-gray-300 scrollbar-track-gray-100'}`}>
        {dealerData.map((dealer, index) => (
          <DealerItem 
            key={index}
            name={dealer.name}
            isDealer={dealer.isDealer}
            children={dealer.children}
          />
        ))}
      </div>
      <AddDealerModal 
        isOpen={isAddModalOpen}
        onClose={closeAddModal}
      />
    </div>
  );
};

export default Dealer;