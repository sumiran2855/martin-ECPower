"use client";
import React, { useEffect, useState } from "react";
import { FaHandshake, FaPlus } from "react-icons/fa6";
import { useTheme } from "@/app/dashboard/layout";
import DealerItem from "@/component/cards/dealerItemCards";
import { useTranslation } from "react-i18next";
import AddDealerModal from "@/component/dashboard/Home/add-dealer";
import { getAuthTokens } from "@/helper/authHelper";
import { getAllDealer } from "@/controller/dealer-controller";
import ECPowerLoader from "@/component/loader";
import { DealerData } from "./type";

const Dealer: React.FC = () => {
  const { t } = useTranslation("home");
  const { token, idToken } = getAuthTokens();
  const { darkMode } = useTheme();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [dealers, setDealers] = useState<DealerData[]>([]);
  const [loading, setLoading] = useState(true);

  const handleAddDealer = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const fetchDealers = async () => {
    try {
      setLoading(true);
      if (token && idToken) {
        const dealerData = await getAllDealer(token, idToken);
        const processedDealers = dealerData.map((dealer: DealerData) => ({
          ...dealer,
          children: dealer.customer_id ? [] : [],
        }));
        setDealers(processedDealers);
      }
    } catch (error) {
      console.error("Failed to fetch dealers:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDealers();
  }, [token, idToken]);

  const refreshDealers = () => {
    fetchDealers();
  };

  if (loading) {
    return <ECPowerLoader size="md" isVisible={true} />;
  }

  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } p-4 rounded-lg shadow-sm transition-colors duration-300`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <FaHandshake
            className={`${
              darkMode ? "text-blue-400" : "text-blue-500"
            } mr-2 text-xl`}
          />
          <h1 className="text-xl font-semibold">{t("dealer.dealer")}</h1>
        </div>
        <button
          onClick={handleAddDealer}
          className={`p-2 rounded-full cursor-pointer ${
            darkMode
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white transition-colors`}
          aria-label="Add dealer"
        >
          <FaPlus />
        </button>
      </div>
      <div
        className={`border cursor-pointer ${
          darkMode ? "border-gray-700" : "border-gray-200"
        } rounded-lg max-h-64 overflow-y-auto scrollbar-thin ${
          darkMode
            ? "scrollbar-thumb-gray-600 scrollbar-track-gray-800"
            : "scrollbar-thumb-gray-300 scrollbar-track-gray-100"
        }`}
      >
        {dealers.length > 0 ? (
          dealers.map((dealer) => (
            <DealerItem
              key={dealer.id}
              name={dealer.dealer_name}
              isDealer={true}
              children={dealer.children || []}
              dealerId={dealer.id}
              customerId={dealer.customer_id}
            />
          ))
        ) : (
          <div className="py-4 px-4 text-center text-gray-500 dark:text-gray-400">
            {t("dealer.no_dealers")}
          </div>
        )}
      </div>
      <AddDealerModal 
        isOpen={isAddModalOpen} 
        onClose={closeAddModal} 
        onDealerAdded={refreshDealers} 
      />
    </div>
  );
};

export default Dealer;
