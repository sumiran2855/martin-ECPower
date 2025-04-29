"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "@/app/dashboard/layout";
import { List } from "lucide-react";
import ParkingSystemForm from "./forms/ParkingSystemForm";
import { get_Facility, InstallationData } from "@/helper/facilityHelper";
import Pagination from "@/component/Pagination";
import ECPowerLoader from "@/component/loader";

const AddToWaitlist: React.FC = () => {
  const { darkMode } = useTheme();
  const [creating, setCreating] = useState(false);
  const [installations, setInstallations] = useState<InstallationData[]>([]);
  const [selectedInstallation, setSelectedInstallation] = useState<InstallationData | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [paginatedInstallations, setPaginatedInstallations] = useState<InstallationData[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const maxVisible = 10;

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
      {!creating ? (
        <>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center my-4">
            <div className="flex items-center">
              <List className="text-blue-500 mr-2 text-xl" />
              <h1 className="text-2xl font-medium">
                List of systems in waiting position
              </h1>
            </div>
          </div>
          {/* Desktop View */}
          <div className="w-full overflow-x-auto hidden md:block">
            <table className="w-full border-separate border-spacing-y-2 mb-3">
              <thead>
                <tr
                  className={`rounded-l-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <th className="text-left px-4 py-2 font-medium">XRGI®-ID</th>
                  <th className="text-left px-4 py-2 font-medium">
                    XRGI® system name
                  </th>
                  <th className="text-left px-4 py-2 font-medium">Until</th>
                  <th className="text-right"></th>
                </tr>
              </thead>
              <tbody>
                {paginatedInstallations.map((installation, index) => (
                  <tr
                    key={index}
                    className={`${
                      darkMode ? "bg-gray-700" : "bg-white"
                    } shadow-sm`}
                  >
                    <td className="px-4 py-2 rounded-l-lg">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          // checked={installation.selected}
                          checked={true}
                          onChange={() => toggleSelection(index)}
                          readOnly
                          className={`mr-3 h-5 w-5 rounded cursor-pointer ${
                            darkMode
                              ? "bg-gray-600 border-gray-500"
                              : "border-gray-300"
                          }`}
                        />
                        {installation.xrgiID}
                      </div>
                    </td>
                    <td className="px-4 py-2">{installation.name}</td>
                    <td className="px-4 py-2 text-left">-</td>
                    <td
                      onClick={() => {
                        setSelectedInstallation(paginatedInstallations[index]);
                        setCreating(true);
                      }}
                      className="px-4 py-3 text-right text-blue-500 cursor-pointer"
                    >
                      &gt;
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
                      readOnly
                      // checked={installation.selected}
                      checked={true}
                      onChange={() => toggleSelection(index)}
                      className={`mr-3 h-5 w-5 rounded ${
                        darkMode
                          ? "bg-gray-600 border-gray-500"
                          : "border-gray-300"
                      }`}
                    />
                    <span className="font-medium">#{installation.xrgiID}</span>
                  </div>
                  <div
                    onClick={() => {
                      setSelectedInstallation(paginatedInstallations[index]);
                      setCreating(true);
                    }}
                    className="text-blue-500 cursor-pointer"
                  >
                    &gt;
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  <div>
                    <span
                      className={`text-xs ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      XRGI® system name
                    </span>
                    <p className="mt-1">{installation.name}</p>
                  </div>

                  <div>
                    <span
                      className={`text-xs ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      XRGI®-ID
                    </span>
                    <p className="mt-1">{installation.xrgiID}</p>
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
        </>
      ) : (
        <ParkingSystemForm onCancel={() => setCreating(false)} Installation={selectedInstallation} />
      )}
    </div>
  );
};

export default AddToWaitlist;
