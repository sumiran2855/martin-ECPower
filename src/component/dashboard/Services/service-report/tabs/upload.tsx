import { useTheme } from "@/app/dashboard/layout";
import {
  Calendar,
  ChevronDown,
  Clock9,
  FileDiff,
  Upload,
  X,
} from "lucide-react";
import { useState } from "react";

export default function UploadReport() {
  const { darkMode } = useTheme();
  const [creationDate, setCreationDate] = useState("04-02-2025");
  const [deliveryDate, setDeliveryDate] = useState("04-02-2025");
  const [serviceType, setServiceType] = useState("");
  const [file, setFile] = useState<string | null>("File document name.pdf");

  const handleClearAll = () => {
    setCreationDate("");
    setDeliveryDate("");
    setServiceType("");
    setFile(null);
  };
  return (
    <div
      className={`${
        darkMode
          ? "bg-gray-800 border-1 border-white rounded-lg shadow-sm"
          : "bg-white rounded-lg shadow-sm"
      } p-6 mb-6`}
    >
      <h2
        className={`${
          darkMode ? "text-gray-200" : "text-gray-700"
        } text-lg font-medium mb-6 text-center`}
      >
        Upload service report
      </h2>

      <div className="space-y-4">
        <div>
          <label
            className={`${
              darkMode ? "text-gray-200" : "text-gray-500"
            } block text-sm  mb-1`}
          >
            Creation date
          </label>
          <div className="relative">
            <input
              type="text"
              value={creationDate}
              onChange={(e) => setCreationDate(e.target.value)}
              className={`w-full px-3 py-2 rounded-md 
                ${
                  darkMode
                    ? "bg-gray-800 text-gray-200 border border-gray-600 placeholder-gray-400"
                    : "bg-white text-gray-800 border border-gray-300 placeholder-gray-500"
                }`}
              placeholder="Enter start date"
              required
            />
            <span className="absolute right-3 top-2">
              <Clock9 className="w-5 h-5 text-gray-500 mt-1" />
            </span>
          </div>
        </div>

        <div>
          <label
            className={`${
              darkMode ? "text-gray-200" : "text-gray-500"
            } block text-sm  mb-1`}
          >
            Date of delivery <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
              className={`w-full px-3 py-2 rounded-md 
                ${
                  darkMode
                    ? "bg-gray-800 text-gray-200 border border-gray-600 placeholder-gray-400"
                    : "bg-white text-gray-800 border border-gray-300 placeholder-gray-500"
                }`}
              placeholder="Enter end date"
              required
            />
            <span className="absolute right-3 top-2">
              <Calendar className="w-5 h-5 text-gray-500 mt-1" />
            </span>
          </div>
        </div>

        <div>
          <label
            className={`${
              darkMode ? "text-gray-200" : "text-gray-500"
            } block text-sm  mb-1`}
          >
            Service Type <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className={`w-full px-3 py-2 rounded-md appearance-none ${
                darkMode
                  ? "bg-gray-800 text-gray-200 border border-gray-600"
                  : "bg-white text-gray-800 border border-gray-300"
              }`}
              required
            >
              <option value="">Select service type</option>
              <option value="maintenance">Maintenance</option>
              <option value="repair">Repair</option>
              <option value="installation">Installation</option>
            </select>
            <span className="absolute right-3 top-2 pointer-events-none">
              <ChevronDown
                className={`w-5 h-5 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              />
            </span>
          </div>
        </div>

        {/* File Upload */}
        <div className="mt-4">
          <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
            <button className="px-4 py-2 border border-blue-700 text-blue-700 rounded-md flex items-center mb-2 cursor-pointer">
              <span>Choose file</span>
              <Upload className="w-5 h-5 ml-1" />
            </button>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              Drag or Drop file here
            </p>
          </div>
        </div>

        {file && (
          <div
            className={`p-4 rounded-md flex items-center justify-between mt-4 
            ${
              darkMode
                ? "bg-gray-800 border border-gray-700"
                : "bg-gray-100 border border-gray-300"
            }`}
          >
            <div className="flex items-center">
              <FileDiff
                className={`w-5 h-5 ${
                  darkMode ? "text-blue-500" : "text-gray-800"
                } mr-1`}
              />
              <span
                className={`text-sm ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {file}
              </span>
            </div>
            <button onClick={() => setFile(null)}>
              <X
                className={`w-5 h-5 ${
                  darkMode ? "text-gray-300" : "text-gray-900"
                }`}
              />
            </button>
          </div>
        )}

        <div className="flex mt-6 pt-4">
          <button
            onClick={handleClearAll}
            className={`px-6 py-2 rounded-md mr-4 border cursor-pointer ${
              darkMode
                ? "border-gray-600 text-gray-200 hover:bg-gray-700"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"}`}>
            Clear all
          </button>
          <button
            className={`px-8 py-2 rounded-md cursor-pointer ${ darkMode
                ? "bg-blue-700 text-white hover:bg-blue-600"
                : "bg-blue-800 text-white hover:bg-blue-700"}`}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}
