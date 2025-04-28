"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "@/app/dashboard/layout";
import { FileChartColumn } from "lucide-react";
import { get_Facility, InstallationData } from "@/helper/facilityHelper";
import Pagination from "@/component/Pagination";
import ECPowerLoader from "@/component/loader";
import { useAlerts } from "@/component/alert";
import ServiceReport from "./service-report";

const Surveillance: React.FC = () => {
  const { darkMode } = useTheme();
  const { addAlert, AlertList } = useAlerts();
  const [installations, setInstallations] = useState<InstallationData[]>([]);
  const [selectedInstallations, setSelectedInstallations] = useState<InstallationData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [paginatedInstallations, setPaginatedInstallations] = useState<InstallationData[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectAllEmail, setSelectAllEmail] = useState(false);
  const [selectAllSMS, setSelectAllSMS] = useState(false);
  const [serviceReport, setServiceReport] = useState(false);
  const maxVisible = 10;

  useEffect(() => {
    const getFacility = async () => {
      try {
        setLoading(true);
        const facilities = await get_Facility();
        const facilitiesWithOptions = facilities.map(facility => ({
          ...facility,
          email: false,
          sms: false
        }));
        setInstallations(facilitiesWithOptions);
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

  const toggleSelection = (index: number, type: 'email' | 'sms' | 'selected') => {
    const globalIndex = (currentPage - 1) * itemsPerPage + index;
    const updatedInstallations = [...installations];
    
    if (type === 'selected') {
      updatedInstallations[globalIndex].selected = !updatedInstallations[globalIndex].selected;
    } else if (type === 'email') {
      updatedInstallations[globalIndex].email = !updatedInstallations[globalIndex].email;
    } else if (type === 'sms') {
      updatedInstallations[globalIndex].sms = !updatedInstallations[globalIndex].sms;
    }
    
    setInstallations(updatedInstallations);
  };

  const toggleSelectAll = (type: 'email' | 'sms') => {
    if (type === 'email') {
      const newValue = !selectAllEmail;
      setSelectAllEmail(newValue);
      const updatedInstallations = installations.map(installation => ({
        ...installation,
        email: newValue
      }));
      setInstallations(updatedInstallations);
    } else {
      const newValue = !selectAllSMS;
      setSelectAllSMS(newValue);
      const updatedInstallations = installations.map(installation => ({
        ...installation,
        sms: newValue
      }));
      setInstallations(updatedInstallations);
    }
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

  const handleCreateReport = () => {
    const selected = installations.filter((inst) => inst.selected);
    if (selected.length !== 1) {
      addAlert({
        type: "warning",
        message: "Please select exactly one installation to create a test.",
        showIcon: true
      });
      return;
    }
    setSelectedInstallations(selected);
  };

  const handleRowClick = (installation: InstallationData) => {
    setSelectedInstallations([installation]);
    setServiceReport(true);
  };

  if (loading) {
    return <ECPowerLoader size="md" isVisible={true} />;
  }

  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-white"
      } rounded-lg shadow transition-colors duration-300`}
    >
            {!serviceReport ? (
        <>
        <div className="p-4">
          <AlertList />
          <div className="flex items-center mb-2">
            <div className="p-2 rounded-md">
              <FileChartColumn className="text-blue-500" />
            </div>
            <h1 className="text-2xl font-medium">Surveillance</h1>
          </div>
          
          <div className="mb-6 ml-12">
            <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-700"}`}>
              It is possible to order surveillance of one or more units per SMS or e-mail. When a units is in alarmstop a SMS or e-mail is automatically sent to the person who registered the unit.
            </p>
            <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-700"}`}>
              To see hours until next service point at the indicator to the right
            </p>
          </div>

          <div className="flex justify-end mb-4">
            <div className="flex items-center space-x-4 gap-6">
              <span className="font-medium">Set all XRGI®-ID :</span>
              <div className="flex items-center space-x-2">
                <span>E-mail</span>
                <input
                  type="checkbox"
                  checked={selectAllEmail}
                  onChange={() => toggleSelectAll('email')}
                  className={`h-5 w-5 rounded cursor-pointer ${
                    darkMode
                      ? "bg-gray-700 border-gray-600"
                      : "bg-white border-gray-300"
                  }`}
                />
              </div>
              <div className="flex items-center space-x-2 mr-4">
                <span>SMS</span>
                <input
                  type="checkbox"
                  checked={selectAllSMS}
                  onChange={() => toggleSelectAll('sms')}
                  className={`h-5 w-5 rounded cursor-pointer ${
                    darkMode
                      ? "bg-gray-700 border-gray-600"
                      : "bg-white border-gray-300"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Desktop View */}
          <div className="w-full overflow-x-auto hidden md:block">
            <table className="w-full mb-4">
              <thead>
                <tr className={`border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
                  <th className="py-3 px-4 text-left font-medium">E-mail</th>
                  <th className="py-3 text-left font-medium">SMS</th>
                  <th className="py-3 text-left font-medium">XRGI®-ID</th>
                  <th className="py-3 text-left font-medium">XRGI® system name</th>
                  <th className="py-3 text-left font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {paginatedInstallations.map((installation, index) => (
                  <tr
                    key={index}
                    className={`border-b ${
                      darkMode ? "border-gray-700 hover:bg-gray-700" : "border-gray-200 hover:bg-gray-50"
                    } cursor-pointer transition-colors`}
                  >
                    <td className="py-3 px-4">
                      <input
                        type="checkbox"
                        checked={installation.email}
                        onChange={() => toggleSelection(index, 'email')}
                        className={`h-5 w-5 rounded cursor-pointer ${
                          darkMode
                            ? "bg-gray-700 border-gray-600"
                            : "bg-white border-gray-300"
                        }`}
                      />
                    </td>
                    <td className="py-3">
                      <input
                        type="checkbox"
                        checked={installation.sms}
                        onChange={() => toggleSelection(index, 'sms')}
                        className={`h-5 w-5 rounded cursor-pointer ${
                          darkMode
                            ? "bg-gray-700 border-gray-600"
                            : "bg-white border-gray-300"
                        }`}
                      />
                    </td>
                    <td className="py-3">{installation.xrgiID}</td>
                    <td className="py-3">{installation.name}</td>
                    <td 
                      className="py-3 text-right text-blue-500 pr-4"
                      onClick={() => handleRowClick(installation)}
                    >
                      <div className="flex justify-end">
                        &gt;
                      </div>
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
                <div className="flex justify-between mb-3">
                  <div>
                    <p className="font-medium">{installation.xrgiID}</p>
                    <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                      {installation.name}
                    </p>
                  </div>
                  <div
                    onClick={() => handleRowClick(installation)}
                    className="text-blue-500 cursor-pointer flex items-center"
                  >
                    &gt;
                  </div>
                </div>

                <div className="flex space-x-4 mt-2">
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>E-mail</span>
                    <input
                      type="checkbox"
                      checked={installation.email}
                      onChange={() => toggleSelection(index, 'email')}
                      className={`h-5 w-5 rounded cursor-pointer ${
                        darkMode
                          ? "bg-gray-600 border-gray-500"
                          : "border-gray-300"
                      }`}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>SMS</span>
                    <input
                      type="checkbox"
                      checked={installation.sms}
                      onChange={() => toggleSelection(index, 'sms')}
                      className={`h-5 w-5 rounded cursor-pointer ${
                        darkMode
                          ? "bg-gray-600 border-gray-500"
                          : "border-gray-300"
                      }`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

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
        </>
      ) : (
        <ServiceReport Installation={selectedInstallations[0]} onCancel={()=>setServiceReport(false)}/>
      )}
    </div>
  );
};

export default Surveillance;