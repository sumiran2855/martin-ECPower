"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "@/app/dashboard/layout";
import Pagination from "@/component/Pagination";
import { get_Facility, InstallationData } from "@/helper/facilityHelper";
import ECPowerLoader from "@/component/loader";
import { useTranslation } from "react-i18next";

const InstallationTable: React.FC = () => {
  const { t } = useTranslation("home"); 
  const { darkMode } = useTheme();
  const [installations, setInstallations] = useState<InstallationData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [paginatedInstallations, setPaginatedInstallations] = useState<InstallationData[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  
  const maxVisible = 5;

  useEffect(() => {
    const getFacility = async () => {
      try {
        setLoading(true);
        const facilities = await get_Facility();
        setInstallations(facilities);
      } catch (error) {
        console.error("Error fetching facilities:", error);
      } finally {
        setLoading(false);
      }
    };
    getFacility();
  }, []);

  useEffect(() => {
    const calculatedTotalPages = Math.ceil(installations.length / itemsPerPage);
    setTotalPages(calculatedTotalPages);

    if (currentPage > calculatedTotalPages) {
      setCurrentPage(calculatedTotalPages || 1);
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedInstallations(installations.slice(startIndex, endIndex));
  }, [currentPage, itemsPerPage, installations]);

  const toggleSelection = (index: number) => {
    const globalIndex = (currentPage - 1) * itemsPerPage + index;
    const updatedInstallations = [...installations];
    updatedInstallations[globalIndex].selected =
      !updatedInstallations[globalIndex].selected;
    setInstallations(updatedInstallations);
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };
  
  if (loading) {
    return <ECPowerLoader size="md" isVisible={true} />;
  }

  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-white"
      } py-2 px-4 rounded-lg shadow-sm transition-colors duration-300`}
    >
      {/* Desktop View */}
      <div className="w-full overflow-x-auto hidden md:block">
        <table className="w-full border-separate border-spacing-y-2">
          <thead>
            <tr className={darkMode ? "text-gray-300" : "text-gray-700"}>
              <th className="text-left px-4 py-2 font-medium">{t('installation.number')}</th>
              <th className="text-left px-4 py-2 font-medium">
              {t('installation.installation_name')}
              </th>
              <th className="text-left px-4 py-2 font-medium">{t('installation.address')}</th>
              <th className="text-left px-4 py-2 font-medium">{t('installation.postal_code')}</th>
              <th className="text-left px-4 py-2 font-medium">{t('installation.city')}</th>
              <th className="text-left px-4 py-2 font-medium">{t('installation.country')}</th>
            </tr>
          </thead>
          <tbody>
            {paginatedInstallations.map((installation, index) => (
              <tr
                key={index}
                className={`${darkMode ? "bg-gray-700" : "bg-white"} shadow-sm`}
              >
                <td className="px-4 py-4 rounded-l-lg">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={installation.selected}
                      onChange={() => toggleSelection(index)}
                      className={`mr-3 h-5 w-5 rounded cursor-pointer ${
                        darkMode
                          ? "bg-gray-600 border-gray-500"
                          : "border-gray-300"
                      }`}
                    />
                    {installation.xrgiID}
                  </div>
                </td>
                <td className="px-4 py-4">{installation.name}</td>
                <td className="px-4 py-4">{installation.address}</td>
                <td className="px-4 py-4">{installation.postalCode}</td>
                <td className="px-4 py-4">{installation.city}</td>
                <td className="px-4 py-4 rounded-r-lg">
                  {/* <img src="/flag.png" alt="Country Flag" className="w-8 h-6" /> */}
                  -
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {paginatedInstallations.map((installation, index) => (
          <div
            key={index}
            className={`${
              darkMode ? "bg-gray-700" : "bg-white"
            } p-4 rounded-lg shadow-sm`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={installation.selected}
                  onChange={() => toggleSelection(index)}
                  className={`mr-3 h-5 w-5 rounded ${
                    darkMode ? "bg-gray-600 border-gray-500" : "border-gray-300"
                  }`}
                />
                <span className="font-medium">#{installation.xrgiID}</span>
              </div>
              <div className="w-8 h-6">
                <img src="/flag.png" alt="Country Flag" className="w-8 h-6" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <div>
                <span
                  className={`text-xs ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {t('installation.installation_name')}
                </span>
                <p className="mt-1">{installation.name}</p>
              </div>

              <div>
                <span
                  className={`text-xs ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {t('installation.address')}
                </span>
                <p className="mt-1">{installation.address}</p>
              </div>

              <div className="flex space-x-4">
                <div className="flex-1">
                  <span
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {t('installation.postal_code')}
                  </span>
                  <p className="mt-1">{installation.postalCode}</p>
                </div>
                <div className="flex-1">
                  <span
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {t('installation.city')}
                  </span>
                  <p className="mt-1">{installation.city}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Component */}
      <Pagination
        maxVisible={maxVisible}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
        darkMode={darkMode}
      />
    </div>
  );
};

export default InstallationTable;
