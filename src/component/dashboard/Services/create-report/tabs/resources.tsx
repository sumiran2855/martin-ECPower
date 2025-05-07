import React, { useEffect, useState } from "react";
import { useTheme } from "@/app/dashboard/layout";
import { ChevronDown, LockKeyhole, X } from "lucide-react";

type WorkType = "Working time" | "Transport time" | "Driven Distance";

interface ResourceLog {
  serviceTechnician: string;
  workType: WorkType;
  resourceQuantity: string;
  deliveryCreationDate: string;
  unit: string;
}

interface ResourcesTabProps {
  data: any;
  setData: (data: any) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function ResourcesTab({
  data,
  setData,
  onNext,
  onPrevious,
}: ResourcesTabProps) {
  const { darkMode } = useTheme();
  
  // Get current date in DD-MM-YYYY format
  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
  
  const today = new Date();
  const currentDate = formatDate(today);
  
  const [serviceTechnician, setServiceTechnician] = useState("");
  const [workType, setWorkType] = useState<WorkType | "">("");
  const [resourceQuantity, setResourceQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [resourceLogs, setResourceLogs] = useState<ResourceLog[]>([]);
  const [resourcesServiceLog, setResourcesServiceLog] = useState(false);

  useEffect(() => {
    if (data.resources) {
      if (Array.isArray(data.resources) && data.resources.length > 0) {
        setResourceLogs(data.resources);
        setServiceTechnician(data.resources[0].serviceTechnician || "");
        setResourcesServiceLog(true);
      } 
      else if (data.resources.technician) {
        setServiceTechnician(data.resources.technician || "");
        if (data.resources.logs && Array.isArray(data.resources.logs)) {
          setResourceLogs(data.resources.logs);
          setResourcesServiceLog(true);
        }
      }
    }
  }, [data.resources]);

  useEffect(() => {
    if (workType === "Working time" || workType === "Transport time") {
      setUnit("hrs");
    } else if (workType === "Driven Distance") {
      setUnit("km");
    } else {
      setUnit("");
    }
  }, [workType]);

  const getWorkTypeDescription = (type: WorkType | "") => {
    switch (type) {
      case "Working time":
        return "hours - Spent time: 0.25 = quarter, 1.5 = 1½ hours";
      case "Driven Distance":
        return "km - Distance covered in km to the client's destination";
      case "Transport time":
        return "hours - Time used for travelling to the client: 0.25 = a quarter, 1.25 = 1¼ hours";
      default:
        return "";
    }
  };

  const handleAddResource = () => {
    if (!serviceTechnician.trim() || !workType || !resourceQuantity) return;

    const newLog: ResourceLog = {
      serviceTechnician,
      workType: workType as WorkType,
      resourceQuantity,
      deliveryCreationDate: currentDate,
      unit,
    };

    const updatedLogs = [...resourceLogs, newLog];
    setResourceLogs(updatedLogs);
    setResourcesServiceLog(true);
    
    setData({
      ...data,
      resources: updatedLogs
    });
    
    setWorkType("");
    setResourceQuantity("");
  };

  const handleRemoveResource = (index: number) => {
    const updatedLogs = [...resourceLogs];
    updatedLogs.splice(index, 1);
    setResourceLogs(updatedLogs);
    
    setData({
      ...data,
      resources: updatedLogs
    });
    
    if (updatedLogs.length === 0) {
      setResourcesServiceLog(false);
    }
  };

  const handleNext = () => {
    setData({
      ...data,
      resources: resourceLogs
    });
    onNext();
  };

  const workTypes: WorkType[] = [
    "Working time",
    "Transport time",
    "Driven Distance",
  ];
  
  return (
    <div
      className={`${
        darkMode
          ? "bg-gray-800 border-1 border-white rounded-lg shadow-sm"
          : "bg-white rounded-lg shadow-sm"
      } p-4 md:p-6 mb-6`}
    >
      <p className="mb-4 md:mb-6 text-sm md:text-base">
        Choose the relevant service technician. Note that the technician must be
        existing as a service database user.
      </p>

      <div className="space-y-3 md:space-y-6">
        <div>
          <label className="block text-xs text-gray-500 dark:text-gray-400 m-1">
            Creation of delivery
          </label>
          <div className="relative">
            <input
              type="text"
              value={currentDate}
              readOnly
              className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
                darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white"
              }`}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <LockKeyhole
                className={`w-5 h-5 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs text-gray-500 dark:text-gray-400 m-1">
            Service technician
          </label>
          <input
            type="text"
            value={serviceTechnician}
            onChange={(e) => setServiceTechnician(e.target.value)}
            placeholder="-"
            className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
              darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white"
            }`}
            readOnly={resourceLogs.length > 0}
          />
          {resourceLogs.length > 0 && (
            <p className="text-xs text-gray-500 mt-1">
              This technician will be assigned to all resources
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs text-gray-500 dark:text-gray-400 m-1">
            Work type
          </label>
          <div className="relative">
            <select
              value={workType}
              onChange={(e) => setWorkType(e.target.value as WorkType)}
              className={`w-full px-3 py-2 border border-gray-300 rounded-md appearance-none ${
                darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white"
              }`}
            >
              <option value="">Select work type</option>
              {workTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <ChevronDown
                className={`w-5 h-5 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs text-gray-500 dark:text-gray-400 m-1">
            Number
          </label>
          <div className="relative">
            <input
              type="text"
              value={resourceQuantity}
              onChange={(e) => setResourceQuantity(e.target.value)}
              placeholder="Number"
              className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
                darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white"
              }`}
            />
            {workType && (
              <p className="text-xs text-gray-500 mt-1">
                {getWorkTypeDescription(workType)}
              </p>
            )}
          </div>
        </div>

        <div>
          <button
            onClick={handleAddResource}
            disabled={!serviceTechnician.trim() || !workType || !resourceQuantity}
            className={`${
              !serviceTechnician.trim() || !workType || !resourceQuantity
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            } ${
              darkMode
                ? "text-gray-200 hover:bg-gray-700"
                : "text-blue-900 hover:bg-gray-100"
            } border border-gray-300 rounded-md px-4 md:px-6 py-2 font-medium`}
          >
            Add service log
          </button>
        </div>
      </div>

      <div className="text-lg border-gray-200 py-2 px-2 md:px-4 my-4 border rounded-lg shadow">
        <h2
          className={`text-lg ${
            darkMode ? "text-gray-200" : "text-blue-900"
          } font-medium`}
        >
          Resources
        </h2>
        
        {resourcesServiceLog && resourceLogs.length > 0 && (
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full">
              <thead>
                <tr
                  className={`${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } border-b`}
                >
                  <th className="py-2 text-left text-xs md:text-sm font-medium">Date</th>
                  <th className="py-2 text-left text-xs md:text-sm font-medium">Technician</th>
                  <th className="py-2 text-left text-xs md:text-sm font-medium">Work Type</th>
                  <th className="py-2 text-left text-xs md:text-sm font-medium">Number</th>
                  <th className="py-2 text-left text-xs md:text-sm font-medium">Unit</th>
                  <th className="py-2 text-left text-xs md:text-sm font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {resourceLogs.map((log, index) => (
                  <tr
                    key={index}
                    className={`${
                      darkMode ? "border-gray-700" : "border-gray-200"
                    } border-b`}
                  >
                    <td className="py-2 text-xs md:text-sm">{log.deliveryCreationDate}</td>
                    <td className="py-2 text-xs md:text-sm">{log.serviceTechnician}</td>
                    <td className="py-2 text-xs md:text-sm">{log.workType}</td>
                    <td className="py-2 text-xs md:text-sm">{log.resourceQuantity}</td>
                    <td className="py-2 text-xs md:text-sm">{log.unit}</td>
                    <td className="py-2 text-xs md:text-sm">
                      <button 
                        onClick={() => handleRemoveResource(index)}
                        className={`p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer`}
                        title="Remove"
                      >
                        <X className={`w-4 h-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {!resourcesServiceLog || resourceLogs.length === 0 && (
          <p className="text-gray-500 mt-4">No resources added yet</p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 mt-6 md:mt-8">
        <button
          onClick={onPrevious}
          className={`${
            darkMode
              ? "text-gray-200 hover:bg-gray-700"
              : "text-blue-900 hover:bg-gray-100"
          } border border-gray-300 rounded-md px-4 md:px-6 py-2 font-medium cursor-pointer`}
        >
          Previous Step
        </button>
        <button
          onClick={handleNext}
          className={`${
            darkMode
              ? "text-gray-200 hover:bg-gray-700"
              : "text-blue-900 hover:bg-gray-100"
          } border border-gray-300 rounded-md px-4 md:px-6 py-2 font-medium cursor-pointer`}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}