"use client";

import {
  ChevronLeft,
  ChevronRight,
  List,
} from "lucide-react";
import { useState } from "react";
import HeatDistributor from "./modals/heat-distributor";
import Motor from "./modals/motor";
import HPC from "./modals/HPC";
import PMH from "./modals/PMH";
import { InstallationData } from "@/helper/facilityHelper";

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

interface CallDetailsProps {
  details: CallDetails;
  onBackClick: () => void;
  darkMode: boolean;
  selectedInstallation:InstallationData;
}

export default function CallDetails({
  details,
  onBackClick,
  darkMode,
  selectedInstallation
}: CallDetailsProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [HeatDistributorModal, setHeatDistributorModal] = useState(false);
  const [MotorModal, setMotorModal] = useState(false);
  const [HPCModal, setHPCModal] = useState(false);
  const [PMHModal, setPMHModal] = useState(false);



  const totalIncidents = details.incidents.length;
  const totalPages = Math.ceil(totalIncidents / itemsPerPage);
  const indexOfLastIncident = currentPage * itemsPerPage;
  const indexOfFirstIncident = indexOfLastIncident - itemsPerPage;
  const currentIncidents = details.incidents.slice(
    indexOfFirstIncident,
    indexOfLastIncident
  );

  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];

    pageNumbers.push(1);
    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);

    if (start > 2) {
      pageNumbers.push("ellipsis-start");
    }

    for (let i = start; i <= end; i++) {
      if (i !== 1 && i !== totalPages) {
        pageNumbers.push(i);
      }
    }

    if (end < totalPages - 1) {
      pageNumbers.push("ellipsis-end");
    }

    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  const getStatusColorClass = (status: string) => {
    if (status.includes("Full Stop")) return "text-yellow-500 text-sm";
    if (status.includes("EMERGENCY STOP")) return "text-red-500 text-sm";
    if (status.includes("Start-up")) return "text-green-700 text-sm";
    if (status.includes("Stand-by")) return "text-blue-500 text-sm";
    return "";
  };

  const getIncidentColorClass = (incident: string) => {
    if (incident.includes("ALARM")) return "text-yellow-500 text-sm";
    if (incident.includes("MISFIRE")) return "text-red-500 text-sm";
    if (incident.includes("START")) return "text-green-700 text-sm";
    if (incident.includes("MANUAL")) return "text-blue-500 text-sm";
    return "";
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-white"
      } py-2 px-4 rounded-lg shadow-sm transition-colors duration-300`}
    >
      <div className="p-4">
        <div   className={`flex items-center font-medium mb-4 ${darkMode ? 'text-gray-200' : 'text-blue-900'}`}>
          <List className="mr-2 text-xl w-6 h-6" />
          <h1 className="text-2xl font-medium">Call details</h1>
        </div>
        <p
          className={`text-medium font-semibold mb-2 ml-8 ${
            darkMode ? "text-gray-400" : "text-gray-700"
          }`}
        >
          {selectedInstallation.xrgiID} - {selectedInstallation.name}
        </p>
      </div>

      <div  className={`flex flex-wrap gap-4 mb-6 p-4 rounded-lg border-1 ${ darkMode ? 'bg-gray-900 border-yellow-400' : 'bg-yellow-50 border-yellow-400' }`}>
        <div className="flex flex-col items-center md:mx-6 cursor-pointer"  onClick={() => setHeatDistributorModal(true)}>
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-1">
            <div className="w-8 h-8 bg-blue-900 dark:bg-blue-500 rounded-md flex items-center justify-center">
              <img src="/image 117.png" alt="" />
            </div>
          </div>
          <span className="text-xs text-center">Heat Distributor</span>
        </div>

        <div className="flex flex-col items-center mx-6 cursor-pointer" onClick={()=>setMotorModal(true)}>
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-1">
            <div className="w-8 h-8 bg-blue-900 dark:bg-blue-500 rounded-md flex items-center justify-center">
              <img src="/image 118.png" alt="" />
            </div>
          </div>
          <span className="text-xs text-center">motor</span>
        </div>

        <div className="flex flex-col items-center mx-6 cursor-pointer" onClick={()=>setHPCModal(true)}>
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-1">
            <div className="w-8 h-8 bg-blue-900 dark:bg-blue-500 rounded-md flex items-center justify-center">
              <img src="/image 119.png" alt="" />
            </div>
          </div>
          <span className="text-xs text-center">HPC</span>
        </div>

        <div className="flex flex-col items-center mx-6 cursor-pointer" onClick={()=>setPMHModal(true)}>
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-1">
            <div className="w-8 h-8 bg-blue-900 dark:bg-blue-500 rounded-md flex items-center justify-center">
              <img src="/image 120.png" alt="" />
            </div>
          </div>
          <span className="text-xs text-center">PMH</span>
        </div>
      </div>

      {/* Call information */}
      <div className="rounded-lg shadow md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="flex flex-row gap-4">
          <div className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-800'}`}>
            Time of call:
          </div>
          <div className="text-sm ">{details.timeOfCall}</div>
        </div>

        <div className="flex flex-row gap-4">
          <div className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-800'}`}>
            Attempted redials:
          </div>
          <div className="text-sm">{details.attemptedRedials}</div>
        </div>

        <div className="flex flex-row gap-4">
          <div className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-800'}`}>
            Software validated:
          </div>
          <div className="text-sm">{details.softwareValidated}</div>
        </div>
      </div>

      {/* Main content - Operation status and System status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className={`font-medium ${darkMode ? 'text-blue-400':'text-blue-900'} mb-3`}>
            Operation status
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                Actual status:
              </span>
              <span className="font-sm text-yellow-500">
                {details.operationStatus.actualStatus}
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">Stopped</span>
              <span className="font-sm">
                {details.operationStatus.stopped}
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                Operational hours to next service:
              </span>
              <span className="font-sm">
                {details.operationStatus.operationalHoursToNextService}
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                Operating hours:
              </span>
              <span className="font-sm">
                {details.operationStatus.operatingHours}
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                Actual elec. produced:
              </span>
              <span className="font-sm">
                {details.operationStatus.actualElecProduced}
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                Forced standby:
              </span>
              <span className="font-sm">
                {details.operationStatus.forcedStandby}
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                Load level:
              </span>
              <span className="font-sm">
                {details.operationStatus.loadLevel}
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                Storage level:
              </span>
              <div>
                <div className="flex items-center">
                  <span className="font-sm">
                    {details.operationStatus.storageLevel}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                Oil pressure:
              </span>
              <span className="font-sm">
                {details.operationStatus.oilPressure}
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                Smartstarter board temp.:
              </span>
              <span className="font-sm">
                {details.operationStatus.smartstarterBoardTemp}
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                Boiler released:
              </span>
              <span className="font-sm">
                {details.operationStatus.boilerReleased}
              </span>
            </div>
          </div>
        </div>

        <div>
          <h2 className={`font-medium ${darkMode ? 'text-blue-400':'text-blue-900'} mb-3`}>
            System status
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                Control panel antenna signal:
              </span>
              <span className="font-sm">
                {details.systemStatus.controlPanelAntennaSignal}
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                Control panel PCB temp.:
              </span>
              <span className="font-sm">
                {details.systemStatus.controlPanelPCBTemp}
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                Control panel PSU Voltage:
              </span>
              <span className="font-sm">
                {details.systemStatus.controlPanelPSUVoltage}
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                Power Unit UPS accumulator:
              </span>
              <span className="font-sm text-red-500">
                {details.systemStatus.powerUnitUPSAccumulator}
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                Power Unit, PCB temperature:
              </span>
              <span className="font-sm">
                {details.systemStatus.powerUnitPCBTemperature}
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                Heat Distributor, PCB temperature:
              </span>
              <span className="font-sm">
                {details.systemStatus.heatDistributorPCBTemperature}
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                Flowmaster PSU Voltage:
              </span>
              <span className="font-sm">
                {details.systemStatus.flowmasterPSUVoltage}
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                Flowmaster, PCB temperature:
              </span>
              <span className="font-sm">
                {details.systemStatus.flowmasterPCBTemperature}
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                Surge protector:
              </span>
              <span className="font-sm">
                {details.systemStatus.surgeProtector}
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                Smartstarter last error:
              </span>
              <span className="font-sm">
                {details.systemStatus.smartstarterLastError}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Incident history table */}
      <div className="mt-8">
        <div className="grid grid-cols-4 border-b border-gray-200 dark:border-gray-700 py-2 font-medium">
          <div className="text-gray-500 dark:text-gray-400">
            Date of incident
          </div>
          <div className="text-gray-500 dark:text-gray-400">Incident type</div>
          <div className="text-gray-500 dark:text-gray-400">Incidents</div>
          <div className="text-gray-500 dark:text-gray-400">
            Status of incident
          </div>
        </div>

        {currentIncidents.map((incident, index) => (
          <div
            key={index}
            className="grid grid-cols-4 border-b border-gray-200 dark:border-gray-700 py-3"
          >
            <div className="text-sm">{incident.date}</div>
            <div className="text-sm md:ml-5">{incident.type}</div>
            <div className={getIncidentColorClass(incident.incident)}>
              {incident.incident}
            </div>
            <div className={getStatusColorClass(incident.status)}>
              {incident.status}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalIncidents > 0 && (
        <div className="flex justify-center mt-6 mb-4">
          <div className="flex items-center space-x-1">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md flex items-center text-sm ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> Previous
            </button>

            {getPageNumbers().map((page, index) =>
              page === "ellipsis-start" || page === "ellipsis-end" ? (
                <span key={`ellipsis-${index}`} className="px-2">
                  ...
                </span>
              ) : (
                <button
                key={`page-${page}`}
                onClick={() => goToPage(Number(page))}
                className={`px-3 py-1 border rounded-md text-sm ${
                  currentPage === page
                    ? ` ${
                        darkMode ? 'border-blue-700 bg-blue-900' : 'border-blue-300 bg-blue-50'
                      }`
                    : `${darkMode ? 'hover:bg-gray-700 border-gray-600' : 'hover:bg-gray-100 border-gray-300'}`
                }`}
              >
                {page}
              </button>
              )
            )}

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md flex items-center text-sm ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Next <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="ml-6 flex items-center">
            <span className="mr-2 text-sm">Show</span>
            <select
              className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md px-2 py-1 text-sm"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>
      )}
      </div>
      <HeatDistributor isOpen={HeatDistributorModal} onClose={() => setHeatDistributorModal(false)} />
      <Motor isOpen={MotorModal} onClose={() => setMotorModal(false)}/>
      <HPC isOpen={HPCModal} onClose={() => setHPCModal(false)}/>
      <PMH isOpen={PMHModal} onClose={() => setPMHModal(false)}/>
    </div>
  );
}
