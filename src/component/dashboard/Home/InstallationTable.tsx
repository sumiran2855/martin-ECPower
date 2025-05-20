"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "@/app/dashboard/layout";
import Pagination from "@/component/Pagination";
import ECPowerLoader from "@/component/loader";
import { useTranslation } from "react-i18next";
import { ChevronDown, ChevronUp } from "lucide-react";
import { getAllCustomer, getFacilityById} from "@/controller/dealer-controller";
import EditModal from "./edit-installation";
import { CustomerData, FacilityData } from "./type";

const CustomerTable: React.FC = () => {
  const { t } = useTranslation("home");
  const { darkMode } = useTheme();
  const [customers, setCustomers] = useState<CustomerData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [paginatedCustomers, setPaginatedCustomers] = useState<CustomerData[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [expandedRows, setExpandedRows] = useState<Record<number, boolean>>({});
  const [selectedCustomer, setSelectedCustomer] = useState<CustomerData | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [facilityData, setFacilityData] = useState<Record<string, FacilityData[]>>({});
  const maxVisible = 5;

  useEffect(() => {
    const getCustomers = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token") || "";
        const idToken = localStorage.getItem("idToken") || "";
        const customerData = await getAllCustomer(token, idToken);
        setCustomers(customerData || []);

        const facilityMap: Record<string, FacilityData[]> = {};

        if (customerData && customerData.length > 0) {
          for (const customer of customerData) {
            if (customer.id) {
              try {
                const facility = await getFacilityById(
                  customer.id,
                  token,
                  idToken
                );
                if (facility) {
                  facilityMap[customer.id] = Array.isArray(facility)
                    ? facility
                    : [facility];
                }
              } catch (error) {
                console.error(
                  `Error fetching facility for customer ${customer.id}:`,
                  error
                );
              }
            }
          }
        }

        setFacilityData(facilityMap);
      } catch (error) {
        console.error("Error fetching customers:", error);
      } finally {
        setLoading(false);
      }
    };
    getCustomers();
  }, []);

  useEffect(() => {
    const calculatedTotalPages = Math.ceil(customers.length / itemsPerPage);
    setTotalPages(calculatedTotalPages);

    if (currentPage > calculatedTotalPages) {
      setCurrentPage(calculatedTotalPages || 1);
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedCustomers(customers.slice(startIndex, endIndex));
  }, [currentPage, itemsPerPage, customers]);

  const toggleSelection = (index: number) => {
    const globalIndex = (currentPage - 1) * itemsPerPage + index;
    const updatedCustomers = [...customers];
    updatedCustomers[globalIndex].selected =
      !updatedCustomers[globalIndex].selected;
    setCustomers(updatedCustomers);
  };

  const toggleRowExpansion = (index: number) => {
    setExpandedRows((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const openEditModal = (customer: CustomerData) => {
    setSelectedCustomer(customer);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedCustomer(null);
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
              <th className="text-left px-4 py-2 font-medium">
                {t("installation.number")}
              </th>
              <th className="text-left px-4 py-2 font-medium">
                {t("installation.installation_name")}
              </th>
              <th className="text-left px-4 py-2 font-medium">
                {t("installation.address")}
              </th>
              <th className="text-left px-4 py-2 font-medium">
                {t("installation.postal_code")}
              </th>
              <th className="text-left px-4 py-2 font-medium">
                {t("installation.city")}
              </th>
              <th className="text-left px-4 py-2 font-medium">
                {t("installation.country")}
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedCustomers.map((customer, index) => (
              <React.Fragment key={index}>
                <tr className={`${ darkMode ? "bg-gray-700" : "bg-white" } shadow-sm cursor-pointer`} >
                  <td className="px-4 py-4 rounded-l-lg">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        readOnly
                        checked={customer.selected || false}
                        onClick={() => openEditModal(customer)}
                        onChange={() => toggleSelection(index)}
                        className={`mr-3 h-5 w-5 rounded cursor-pointer ${
                          darkMode
                            ? "bg-gray-600 border-gray-500"
                            : "border-gray-300"
                        }`}
                      />
                      {customer.companyInfo?.cvrNumber || "-"}
                    </div>
                  </td>
                  <td
                    className="px-4 py-4"
                    onClick={() => toggleRowExpansion(index)}
                  >
                    {customer.companyInfo?.companyName || "-"}
                  </td>
                  <td
                    className="px-4 py-4"
                    onClick={() => toggleRowExpansion(index)}
                  >
                    {customer.companyInfo?.address || "-"}
                  </td>
                  <td
                    className="px-4 py-4"
                    onClick={() => toggleRowExpansion(index)}
                  >
                    {customer.companyInfo?.postal_code || "-"}
                  </td>
                  <td
                    className="px-4 py-4"
                    onClick={() => toggleRowExpansion(index)}
                  >
                    {customer.companyInfo?.city || "-"}
                  </td>
                  <td
                    className="px-4 py-4 rounded-r-lg"
                    onClick={() => toggleRowExpansion(index)}
                  >
                    {"-"}
                  </td>
                </tr>
                {expandedRows[index] && (
                  <tr>
                    <td colSpan={7} className="p-0">
                      <div
                        className={`${
                          darkMode ? "bg-gray-600" : "bg-gray-50"
                        } px-8 py-4 rounded-lg`}
                      >
                        {customer.id &&
                        facilityData[customer.id] &&
                        facilityData[customer.id].length > 0 ? (
                          <table className="w-full border-separate border-spacing-y-1">
                            <thead>
                              <tr className={ darkMode ? "text-gray-300" : "text-gray-700" } >
                                <th className="text-left px-3 py-2 text-sm font-medium">
                                  XRGI_ID
                                </th>
                                <th className="text-left px-3 py-2 text-sm font-medium">
                                  Model Number
                                </th>
                                <th className="text-left px-3 py-2 text-sm font-medium">
                                  Address
                                </th>
                                <th className="text-left px-3 py-2 text-sm font-medium">
                                  City
                                </th>
                                <th className="text-left px-3 py-2 text-sm font-medium">
                                  Postal Code
                                </th>
                                <th className="text-left px-3 py-2 text-sm font-medium">
                                  Status
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {facilityData[customer.id].map(
                                (facility, facilityIndex) => (
                                  <tr key={facilityIndex} className={`${ darkMode ? "bg-gray-700" : "bg-white"} shadow-sm`} >
                                    <td className="px-3 py-3 rounded-l-lg">
                                      {facility.xrgiID || "-"}
                                    </td>
                                    <td className="px-3 py-3">
                                      {facility.modelNumber || "-"}
                                    </td>
                                    <td className="px-3 py-3">
                                      {facility.location?.address || "-"}
                                    </td>
                                    <td className="px-3 py-3">
                                      {facility.location?.city || "-"}
                                    </td>
                                    <td className="px-3 py-3">
                                      {facility.location?.postalCode || "-"}
                                    </td>
                                    <td className="px-3 py-3 rounded-r-lg">
                                      {facility.status || "-"}
                                    </td>
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        ) : (
                          <div className="text-center py-4">
                            No facility data available
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {paginatedCustomers.map((customer, index) => (
          <div key={index}>
            <div className={`${ darkMode ? "bg-gray-700" : "bg-white"} p-4 rounded-lg shadow-sm`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    readOnly
                    checked={customer.selected || false}
                    onChange={() => toggleSelection(index)}
                    onClick={() => openEditModal(customer)}
                    className={`mr-3 h-5 w-5 rounded ${
                      darkMode
                        ? "bg-gray-600 border-gray-500"
                        : "border-gray-300"
                    }`}
                  />
                  <span className="font-medium">
                    #{customer.companyInfo?.cvrNumber || "-"}
                  </span>
                </div>
                <button
                  onClick={() => toggleRowExpansion(index)}
                  className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  {expandedRows[index] ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>
              </div>

              <div className="grid grid-cols-1 gap-2">
                <div>
                  <span
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {t("customer.company_name") || "Company Name"}
                  </span>
                  <p className="mt-1">
                    {customer.companyInfo?.companyName || "-"}
                  </p>
                </div>

                <div>
                  <span
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {t("customer.address") || "Address"}
                  </span>
                  <p className="mt-1">{customer.companyInfo?.address || "-"}</p>
                </div>

                <div className="flex space-x-4">
                  <div className="flex-1">
                    <span
                      className={`text-xs ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {t("customer.postal_code") || "Postal Code"}
                    </span>
                    <p className="mt-1">
                      {customer.companyInfo?.postal_code || "-"}
                    </p>
                  </div>
                  <div className="flex-1">
                    <span
                      className={`text-xs ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {t("customer.city") || "City"}
                    </span>
                    <p className="mt-1">{customer.companyInfo?.city || "-"}</p>
                  </div>
                </div>

                <div>
                  <span
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {t("customer.email") || "Email"}
                  </span>
                  <p className="mt-1">{customer.companyInfo?.email || "-"}</p>
                </div>
              </div>
            </div>

            {expandedRows[index] && (
              <div
                className={`${
                  darkMode ? "bg-gray-600" : "bg-gray-50"
                } p-4 mt-1 rounded-lg shadow-sm`}
              >
                <h4 className="font-medium mb-3 text-sm">
                  {t("customer.facilities") || "Facility Details"}
                </h4>
                {customer.id &&
                facilityData[customer.id] &&
                facilityData[customer.id].length > 0 ? (
                  <div className="space-y-3">
                    {facilityData[customer.id].map(
                      (facility, facilityIndex) => (
                        <div
                          key={facilityIndex}
                          className={`${
                            darkMode ? "bg-gray-700" : "bg-white"
                          } p-3 rounded-lg shadow-sm`}
                        >
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <span
                                className={`text-xs ${
                                  darkMode ? "text-gray-400" : "text-gray-500"
                                }`}
                              >
                                XRGI ID
                              </span>
                              <p className="mt-1">{facility.xrgiID || "-"}</p>
                            </div>
                            <div>
                              <span
                                className={`text-xs ${
                                  darkMode ? "text-gray-400" : "text-gray-500"
                                }`}
                              >
                                Model Number
                              </span>
                              <p className="mt-1">
                                {facility.modelNumber || "-"}
                              </p>
                            </div>
                            <div>
                              <span
                                className={`text-xs ${
                                  darkMode ? "text-gray-400" : "text-gray-500"
                                }`}
                              >
                                Address
                              </span>
                              <p className="mt-1">
                                {facility.location?.address || "-"}
                              </p>
                            </div>
                            <div>
                              <span
                                className={`text-xs ${
                                  darkMode ? "text-gray-400" : "text-gray-500"
                                }`}
                              >
                                City
                              </span>
                              <p className="mt-1">
                                {facility.location?.city || "-"}
                              </p>
                            </div>
                            <div>
                              <span
                                className={`text-xs ${
                                  darkMode ? "text-gray-400" : "text-gray-500"
                                }`}
                              >
                                Postal Code
                              </span>
                              <p className="mt-1">
                                {facility.location?.postalCode || "-"}
                              </p>
                            </div>
                            <div>
                              <span
                                className={`text-xs ${
                                  darkMode ? "text-gray-400" : "text-gray-500"
                                }`}
                              >
                                Status
                              </span>
                              <p className="mt-1">{facility.status || "-"}</p>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  <div className="text-center py-3 text-sm">
                    No facility data available
                  </div>
                )}
              </div>
            )}
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

      <EditModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        installation={selectedCustomer}
      />
    </div>
  );
};

export default CustomerTable;
