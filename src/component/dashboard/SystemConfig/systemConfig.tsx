"use client";
import { useState } from "react";
import { MonitorCog } from "lucide-react";
import ConfigurationList from "./ConfigurationList";
import PaginationControls from "./PaginationControls";
import { useTheme } from "@/app/dashboard/layout";

interface ConfigurationItem {
  id: string;
  date: string;
  isExpanded?: boolean;
  details?: SystemDetails;
}

interface SystemDetails {
  date: string;
  displayPCB: string;
  softwareVersion: string;
  hwVersion: string;
  supplier: string;
  size: string;
  propellant: string;
  puNumber: string;
  technology: string;
  electricitySales: string;
  saleWeekdays: string;
  saleSaturday: string;
  saleSunday: string;
  communicationType: string;
  heatPump1Efficiency: number;
  heatPump2Efficiency: number;
  sender: string;
  terminalSerialNo: string;
  simCardNo: string;
  operator: string;
  highLoadWeekdays: string;
  highLoadSaturday: string;
  highLoadSunday: string;
  loadWeekdays: string;
  loadSunday: string;
  highLoadSundayDuplicate: string;
  powerUnitEfficiencyLimit: string;
  heatBackUp: string;
  systemModule: string;
  consumptionHighLoad: string;
  consumptionLowLoad: string;
}

export default function SystemConfig() {
  const { darkMode } = useTheme();
  const [systemId] = useState("1979599994 XRGI-25 CARB test / OR35041");
  const [configurations, setConfigurations] = useState<ConfigurationItem[]>([
    {
      id: "1",
      date: "16-09-24 05:57",
      isExpanded: true,
      details: {
        date: "18-09-24 13:55",
        displayPCB: "460E92CEE4",
        softwareVersion: "1.15.16",
        hwVersion: "4",
        supplier: "Toyota 4Y",
        size: "25.0kW",
        propellant: "Natural gas",
        puNumber: "0719000025",
        technology: "Lambda1",
        electricitySales: "No",
        saleWeekdays: "00:00-23:59",
        saleSaturday: "00:00-23:59",
        saleSunday: "00:00-23:59",
        communicationType: "Ethernet",
        heatPump1Efficiency: 0,
        heatPump2Efficiency: 0,
        sender: "England",
        terminalSerialNo: "1F0024000247383",
        simCardNo: "54:10:EC:9A:AF:9F",
        operator: "ETHERNET",
        highLoadWeekdays: "00:00-23:59",
        highLoadSaturday: "00:00-23:59",
        highLoadSunday: "00:00-23:59",
        loadWeekdays: "00:00-23:59",
        loadSunday: "00:00-23:59",
        highLoadSundayDuplicate: "00:00-23:59",
        powerUnitEfficiencyLimit: "24.0 kW",
        heatBackUp: "No",
        systemModule: "ESC MODE",
        consumptionHighLoad: "24.0 kW",
        consumptionLowLoad: "24.0 kW",
      },
    },
    {
      id: "2",
      date: "16-09-24 03:26",
      isExpanded: true,
      details: {
        date: "18-09-24 13:55",
        displayPCB: "460E92CEE4",
        softwareVersion: "1.15.16",
        hwVersion: "4",
        supplier: "Toyota 4Y",
        size: "25.0kW",
        propellant: "Natural gas",
        puNumber: "0719000025",
        technology: "Lambda1",
        electricitySales: "No",
        saleWeekdays: "00:00-23:59",
        saleSaturday: "00:00-23:59",
        saleSunday: "00:00-23:59",
        communicationType: "Ethernet",
        heatPump1Efficiency: 0,
        heatPump2Efficiency: 0,
        sender: "England",
        terminalSerialNo: "1F0024000247383",
        simCardNo: "54:10:EC:9A:AF:9F",
        operator: "ETHERNET",
        highLoadWeekdays: "00:00-23:59",
        highLoadSaturday: "00:00-23:59",
        highLoadSunday: "00:00-23:59",
        loadWeekdays: "00:00-23:59",
        loadSunday: "00:00-23:59",
        highLoadSundayDuplicate: "00:00-23:59",
        powerUnitEfficiencyLimit: "24.0 kW",
        heatBackUp: "No",
        systemModule: "ESC MODE",
        consumptionHighLoad: "24.0 kW",
        consumptionLowLoad: "24.0 kW",
      },
    },
    { id: "3", date: "15-09-24 15:24", isExpanded: false },
    { id: "4", date: "15-09-24 03:23", isExpanded: false },
    { id: "5", date: "14-09-24 15:22", isExpanded: false },
    { id: "6", date: "14-09-24 03:21", isExpanded: false },
    { id: "7", date: "13-09-24 15:20", isExpanded: false },
    { id: "8", date: "13-09-24 15:24", isExpanded: false },
    { id: "9", date: "12-09-24 03:23", isExpanded: false },
    { id: "10", date: "12-09-24 15:22", isExpanded: false },
    { id: "11", date: "11-09-24 03:21", isExpanded: false },
    { id: "12", date: "11-09-24 15:20", isExpanded: false },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(configurations.length / itemsPerPage);

  const toggleExpand = (id: string) => {
    setConfigurations((prevConfigs) =>
      prevConfigs.map((config) =>
        config.id === id
          ? { ...config, isExpanded: !config.isExpanded }
          : config
      )
    );
  };

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const currentConfigs = configurations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderPageNumbers = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`px-3 py-1 border rounded-md text-sm ${
              i === currentPage
                ? "bg-blue-50 border-gray-300"
                : "border-gray-300"
            }`}
          >
            {i}
          </button>
        );
      } else if (
        (i === currentPage - 2 && currentPage > 3) ||
        (i === currentPage + 2 && currentPage < totalPages - 2)
      ) {
        pages.push(
          <span key={i} className="px-2 text-gray-500">
            ...
          </span>
        );
      }
    }
    return pages;
  };

  return (
    <div className={`${darkMode ? "bg-gray-800" : "bg-gray-50"} p-4 md:p-6 rounded-lg`}>
      <div className="mb-4 flex items-center">
        <div className={`mr-2`}> 
            <MonitorCog className={`${darkMode ? "text-gray-100" : "text-blue-900"} `}/>
        </div>
        <h2 className={`${darkMode ? "text-gray-100" : "text-blue-900"} text-lg font-semibold`}>
          System Configuration
        </h2>
      </div>

      <div className="mb-1 md:ml-8">
        <h3 className={`${darkMode ? "text-gray-200" : "text-gray-800"} font-medium`}>{systemId}</h3>
      </div>

      <div className={`${darkMode ? "text-gray-300" : "text-sm text-gray-600"} mb-6 md:ml-8`}>
        <p>The list below contains system configurations, showing the latestfirst.</p>
        <p>To open a configuration click the grey or white line</p>
      </div>

      {/* Configuration List */}
      <ConfigurationList
        currentConfigs={currentConfigs}
        toggleExpand={toggleExpand}
      />

      {/* Pagination */}
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        handlePageChange={handlePageChange}
        renderPageNumbers={renderPageNumbers}
      />
    </div>
  );
}
