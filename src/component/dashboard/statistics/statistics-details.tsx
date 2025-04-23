import { useTheme } from "@/app/dashboard/layout";
import { InstallationData } from "@/helper/facilityHelper";
import { Calendar, ChartNoAxesCombined } from "lucide-react";
import { useState } from "react";
import Call_for_system from "./operational-analysis/call-for-system/call-for-system";

interface Props {
    selectedInstallation: InstallationData;
    goBack: () => void;
  }

export default function StatisticsDetail({selectedInstallation,goBack }: Props) {
  const { darkMode } = useTheme();
  const [fromDate, setFromDate] = useState("01-06-24 00:00");
  const [toDate, setToDate] = useState("02-06-25 00:00");
  const [showGetData,setShowGetData] = useState(false);

  const handleGetData = () => {
    setShowGetData(true);
  };
  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-white"
      } py-2 px-4 rounded-lg shadow-sm transition-colors duration-300`}
    >
      {!showGetData ? (
        <>
      <div className="flex items-center my-4">
        <ChartNoAxesCombined className="text-blue-500 mr-2 text-xl" />
        <h1 className="text-2xl font-medium">Statistics</h1>
      </div>

      <p
        className={`text-medium font-semibold mb-4 ml-8 ${
          darkMode ? "text-gray-400" : "text-gray-700"
        }`}
      >
        See system statistics {selectedInstallation.xrgiID} / {selectedInstallation.name}
      </p>

      <div className={`p-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded-lg`}>
        <p className="font-normal mb-4">
          Please note: Both date and hour must be set
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <label className="block text-xs mb-1">
              From Date (DD-MM-YY HH:MM) *
            </label>
            <div className="relative">
              <input
                type="text"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className={`w-full p-2 border rounded-md ${
                  darkMode ? "bg-gray-600 border-gray-500" : "border-gray-300"
                }`}
              />
              <div className="absolute right-2 top-2">
                <Calendar className="w-5 h-5 text-gray-500 mt-1" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs mb-1">
              To Date (DD-MM-YY HH:MM) *
            </label>
            <div className="relative">
              <input
                type="text"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className={`w-full p-2 border rounded-md ${
                  darkMode ? "bg-gray-600 border-gray-500" : "border-gray-300"
                }`}
              />
              <div className="absolute right-2 top-2">
                <Calendar className="w-5 h-5 text-gray-500 mt-1" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={goBack}
            className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded cursor-pointer"
          >
            Back
          </button>
          <button
            onClick={handleGetData}
            className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded cursor-pointer"
          >
            Get Data
          </button>
        </div>
      </div>
      </>
      ) : (
        <Call_for_system selectedInstallation={selectedInstallation}/>
      )}
    </div>
  );
}
