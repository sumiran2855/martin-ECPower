"use client"
import { useTheme } from "@/app/dashboard/layout";
import { useState, useEffect, useMemo } from "react";
import { ChevronRight, ChevronLeft, List, ArrowLeft } from "lucide-react";
import CallDetails from "./call-details";

interface SystemCall {
  time: string;
  cause: {
    type: string;
    code: string;
  };
  status: string;
  latestIncidents: string;
  statusOfIncident: string;
  details?: CallDetails;
}

interface CallDetails {
  id: string;
  system: string;
  timeOfCall: string;
  attemptedRedials: number;
  softwareValidated: string;
  operationStatus: {
    actualStatus: string;
    stopped: string;
    operationalHoursToNextService: string;
    operatingHours: string;
    actualElecProduced: string;
    forcedStandby: string;
    loadLevel: string;
    storageLevel: string;
    oilPressure: string;
    smartstarterBoardTemp: string;
    boilerReleased: string;
  };
  systemStatus: {
    controlPanelAntennaSignal: string;
    controlPanelPCBTemp: string;
    controlPanelPSUVoltage: string;
    powerUnitUPSAccumulator: string;
    powerUnitPCBTemperature: string;
    heatDistributorPCBTemperature: string;
    flowmasterPSUVoltage: string;
    flowmasterPCBTemperature: string;
    surgeProtector: string;
    smartstarterLastError: string;
  };
  incidents: {
    date: string;
    type: string;
    incident: string;
    status: string;
  }[];
}

export default function Alarmstop_per_week() {
  const { darkMode } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedCall, setSelectedCall] = useState<SystemCall | null>(null);
  const [showCallDetails, setShowCallDetails] = useState(false);
  const [displayedCalls, setDisplayedCalls] = useState<SystemCall[]>([]);

  const systemInfo = {
    id: "1979599994",
    system: "XRGI-25 CARB test / OR35041",
    totalCalls: 186, 
  };

  const allSystemCalls = useMemo(() => {
    const generateSampleCalls = (total: number): SystemCall[] => {
      const calls: SystemCall[] = [];
      for (let i = 0; i < total; i++) {
        calls.push({
          time: `02-11-24 ${(15 + i % 9).toString().padStart(2, '0')}:${(i * 3 % 60).toString().padStart(2, '0')}`,
          cause: {
            type: i % 3 === 1 ? "ALARM" : "Normal",
            code: i % 3 === 1 ? `${i + 2},ALARM` : `${i + 1},Normal (${i % 8 + 1}/24)`,
          },
          status: i % 4 === 0 ? "Full Stop" : i % 4 === 1 ? "Running" : i % 4 === 2 ? "Standby" : "Emergency",
          latestIncidents: i % 5 === 0 ? "No new events" : `Event #${i + 100}`,
          statusOfIncident: i % 5 === 0 ? "No new events" : i % 5 === 1 ? "Resolved" : i % 5 === 2 ? "Pending" : "Active",
          details: {
            id: "1979599994",
            system: "XRGI-25 CARB test / OR35041",
            timeOfCall: `02-11-24 ${(15 + i % 9).toString().padStart(2, '0')}:${(i * 3 % 60).toString().padStart(2, '0')}`,
            attemptedRedials: i % 3,
            softwareValidated: "OK",
            operationStatus: {
              actualStatus: i % 4 === 0 ? "0, Full Stop" : i % 4 === 1 ? "1, Running" : i % 4 === 2 ? "2, Standby" : "3, Emergency",
              stopped: "698 hours 36 minutes",
              operationalHoursToNextService: "3629 hours",
              operatingHours: "12373 hours",
              actualElecProduced: "1W",
              forcedStandby: "No",
              loadLevel: "0%(VHP mode only)",
              storageLevel: "0%",
              oilPressure: "No",
              smartstarterBoardTemp: "ABSENT",
              boilerReleased: "N/A",
            },
            systemStatus: {
              controlPanelAntennaSignal: "0 (Max. 31)",
              controlPanelPCBTemp: "24.50 °C",
              controlPanelPSUVoltage: "24.1V",
              powerUnitUPSAccumulator: "Error",
              powerUnitPCBTemperature: "27.4 °C",
              heatDistributorPCBTemperature: "29.50 °C",
              flowmasterPSUVoltage: "0.0V",
              flowmasterPCBTemperature: "Not available",
              surgeProtector: "Ok",
              smartstarterLastError: "000",
            },
            incidents: [
              {
                date: "23-06-20 14:54",
                type: "Message",
                incident: "81, ALARM ACKNOWLEDGED",
                status: "0, Full Stop",
              },
              {
                date: "23-06-20 15:18",
                type: "Message",
                incident: "112, MISFIRE",
                status: "61, EMERGENCY STOP",
              },
              {
                date: "23-06-20 15:22",
                type: "Message",
                incident: "78, START - STORAGE COLD",
                status: "5, Start-up (+ OK)",
              },
              {
                date: "23-06-20 15:24",
                type: "Message",
                incident: "65, MANUAL START",
                status: "40, Stand-by",
              },
              {
                date: "23-06-20 15:24",
                type: "Message",
                incident: "81, ALARM ACKNOWLEDGED",
                status: "0, Full Stop",
              },
            ],
          },
        });
      }
      return calls;
    };
    
    return generateSampleCalls(systemInfo.totalCalls);
  }, []); 

  const totalPages = Math.ceil(systemInfo.totalCalls / itemsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, allSystemCalls.length);
    setDisplayedCalls(allSystemCalls.slice(startIndex, endIndex));
  }, [currentPage, itemsPerPage, allSystemCalls]); 

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleCallClick = (call: SystemCall) => {
    setSelectedCall(call);
    setShowCallDetails(true);
  };

  const handleBackClick = () => {
    setShowCallDetails(false);
    setSelectedCall(null);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    
    buttons.push(
      <button
        key="first"
        onClick={() => goToPage(1)}
        className={`px-2 py-1 border ${
          currentPage === 1
            ? "bg-blue-50 border-blue-500 dark:bg-blue-900 dark:border-blue-400"
            : "border-gray-300 dark:border-gray-600"
        } rounded-md text-sm`}
      >
        1
      </button>
    );

    if (currentPage > 3) {
      buttons.push(<span key="ellipsis1" className="px-2">...</span>);
    }

    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (i === 1 || i === totalPages) continue;
      buttons.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`px-2 py-1 border ${
            currentPage === i
              ? "bg-blue-50 border-blue-500 dark:bg-blue-900 dark:border-blue-400"
              : "border-gray-300 dark:border-gray-600"
          } rounded-md text-sm hidden sm:block`}
        >
          {i}
        </button>
      );
    }

    if (currentPage < totalPages - 2 && totalPages > 3) {
      buttons.push(<span key="ellipsis2" className="px-2">...</span>);
    }

    if (totalPages > 1) {
      buttons.push(
        <button
          key="last"
          onClick={() => goToPage(totalPages)}
          className={`px-2 py-1 border ${
            currentPage === totalPages
              ? "bg-blue-50 border-blue-500 dark:bg-blue-900 dark:border-blue-400"
              : "border-gray-300 dark:border-gray-600"
          } rounded-md text-sm`}
        >
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

  const handleItemsPerPageChange = (newValue: number) => {
    setItemsPerPage(newValue);
    setCurrentPage(1);
  };

  if (showCallDetails && selectedCall && selectedCall.details) {
    return (
      <CallDetails 
        details={selectedCall.details} 
        onBackClick={handleBackClick} 
        darkMode={darkMode}
      />
    );
  }

  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-white"
      } py-2 px-4 rounded-lg shadow-sm transition-colors duration-300`}
    >
      <div className="p-4">
        <div className="flex items-center text-blue-900 dark:text-blue-400 font-medium mb-4">
        <List className="mr-2 text-xl w-7 h-7"/>
        <h1 className="text-2xl font-medium">See calls for the system</h1>
        </div>
        <p className={`text-medium font-semibold mb-2 ml-8 ${ darkMode ? "text-gray-400" : "text-gray-700"}`} >
        {systemInfo.id} {systemInfo.system}
        </p>
        <p className={`text-sm mb-4 ml-8 ${darkMode ? "text-gray-400" : "text-gray-700"}`}>
        Click on the system for which you want to generate an operational analysis 
        </p>
      </div>

      <div className="px-4 py-2 font-medium mb-2">
        Total {systemInfo.totalCalls} calls
      </div>

      <div className="grid grid-cols-12 gap-1 px-4 py-4 border-b border-gray-200 dark:border-gray-700 font-medium text-sm">
        <div className="col-span-2 md:col-span-2">Time of call</div>
        <div className="col-span-3 md:col-span-3">Cause</div>
        <div className="col-span-3 md:col-span-2">Current status</div>
        <div className="col-span-2 md:col-span-2">Latest incidents</div>
        <div className="col-span-2 md:col-span-2">Status of incident</div>
        <div className="hidden md:block md:col-span-1"></div>
      </div>

      <div className="divide-y divide-gray-100 dark:divide-gray-700">
        {displayedCalls.map((call, index) => (
          <div
            key={index}
            onClick={() => handleCallClick(call)}
            className="grid grid-cols-12 gap-1 px-4 py-4 items-center text-sm hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
          >
            <div className="col-span-2 md:col-span-2">{call.time}</div>
            <div
              className={`col-span-3 md:col-span-3 ${
                call.cause.type === "ALARM" ? "text-red-500" : "text-green-600"
              }`}
            >
              {call.cause.code}
            </div>
            <div className="col-span-3 md:col-span-2 text-yellow-500">
              0.{call.status}
            </div>
            <div className="col-span-2 md:col-span-2">
              {call.latestIncidents}
            </div>
            <div className="col-span-2 md:col-span-2">
              {call.statusOfIncident}
            </div>
            <div className="hidden md:flex md:col-span-1 justify-end">
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center px-4 py-3 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-1 mb-3 sm:mb-0">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Previous
          </button>

          {renderPaginationButtons()}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm disabled:opacity-50"
          >
            Next <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="flex items-center">
          <span className="ml-8 mr-1 text-sm">Show</span>
          <select
            value={itemsPerPage}
            onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
            className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md px-2 py-1 text-sm"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>
    </div>
  );
}