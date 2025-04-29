import { useTheme } from "@/app/dashboard/layout";
import { InstallationData } from "@/helper/facilityHelper";
import { Calendar, FileChartColumn, TimerIcon } from "lucide-react";
import { useState } from "react";

interface CreateTestFormProps {
  Installation: InstallationData | null;
  onCancel:()=>void;
}

export default function ServiceReport({ Installation,onCancel }: CreateTestFormProps) {
  const { darkMode } = useTheme();
  const [date, setDate] = useState("04-02-2025");
  const [time, setTime] = useState("12:59");

  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-white"
      } transition-colors duration-300 p-6 max-w-full`}
    >
      <div className="flex items-center mb-4">
        <div className="p-2 rounded-md">
          <FileChartColumn className="text-blue-500" />
        </div>
        <h1
          className={`text-xl md:text-2xl font-bold ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Service reports
        </h1>
      </div>

      <div className="mb-6">
        <p
          className={`text-sm md:text-base font-medium ml-8 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {Installation?.xrgiID} / {Installation?.name}
        </p>
      </div>

      <div
        className={`p-6 rounded-lg mb-6 ${
          darkMode ? "bg-gray-700" : "bg-white"
        } shadow`}
      >
        <div className="mb-6">
          <p
            className={`font-medium mb-4 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Service type:
          </p>

          <div className="flex items-center">
            <div
              className={`relative w-5 h-5 rounded-full border ${
                darkMode ? "border-gray-500" : "border-gray-400"
              } flex items-center justify-center mr-2`}
            >
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            </div>
            <label
              className={`${darkMode ? "text-gray-200" : "text-gray-700"}`}
            >
              Regular Service
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label
              className={`block text-sm mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              Date
            </label>
            <div
              className={`relative rounded border ${
                darkMode
                  ? "bg-gray-700 border-gray-600"
                  : "bg-white border-gray-300"
              } flex items-center`}
            >
              <input
                type="text"
                value={date}
                placeholder="Enter Date"
                onChange={(e) => setDate(e.target.value)}
                className={`w-full p-2 rounded focus:outline-none ${
                  darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
                }`}
              />
              <div className="absolute right-2">
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div>
            <label
              className={`block text-sm mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              Time
            </label>
            <div
              className={`relative rounded border ${
                darkMode
                  ? "bg-gray-700 border-gray-600"
                  : "bg-white border-gray-300"
              } flex items-center`}
            >
              <input
                type="text"
                value={time}
                placeholder="Enter Time"
                onChange={(e) => setTime(e.target.value)}
                className={`w-full p-2 rounded border ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300 text-gray-800"
                } focus:outline-none`}
              />
              <div className="absolute right-2">
                <TimerIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-start">
          <button
          onClick={onCancel}
            className={`px-6 py-2 rounded border cursor-pointer ${
              darkMode
                ? "border-gray-600 text-white hover:bg-gray-600"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            } transition-colors`}
          >
            Cancel
          </button>
          <button className="px-6 py-2 rounded bg-blue-800 text-white hover:bg-blue-900 transition-colors cursor-pointer">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
