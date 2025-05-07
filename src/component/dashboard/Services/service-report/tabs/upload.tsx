import { useTheme } from "@/app/dashboard/layout";
import DatePicker from "@/component/DatePicker";
import { InstallationData } from "@/helper/facilityHelper";
import { ChevronDown, FileDiff, Upload, X } from "lucide-react";
import { useState } from "react";

interface CreateTestFormProps {
  setServiceDetail: (value: boolean) => void;
}

export default function UploadReport({setServiceDetail}:CreateTestFormProps) {
  const { darkMode } = useTheme();
  const [creationDate, setCreationDate] = useState("2025-02-07 00:00");
  const [deliveryDate, setDeliveryDate] = useState("2025-02-09 00:00");
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
            <DatePicker
              selectedDate={creationDate}
              onDateChange={setCreationDate}
            />
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
            <DatePicker
              selectedDate={deliveryDate}
              onDateChange={setDeliveryDate}
            />
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
              <option value="">Regular service</option>
              <option value="repair">Repair</option>
              <option value="installation">Commissioning</option>
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

        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 pt-4 gap-4">
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3">
            <button
              onClick={handleClearAll}
              className={`px-4 py-2 rounded-md w-full sm:w-auto border cursor-pointer ${
                darkMode
                  ? "border-gray-600 text-gray-200 hover:bg-gray-700"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"}`}>
              Clear all
            </button>
            <button
              className={`px-6 py-2 rounded-md w-full sm:w-auto cursor-pointer ${
                darkMode
                  ? "bg-blue-700 text-white hover:bg-blue-600"
                  : "bg-blue-800 text-white hover:bg-blue-700"}`}>
              Upload
            </button>
          </div>
          <button
            onClick={()=>setServiceDetail(false)}
            className={`px-6 py-2 rounded-md w-full sm:w-auto mt-3 sm:mt-0 cursor-pointer ${
              darkMode
                ? "bg-blue-700 text-white hover:bg-blue-600"
                : "bg-blue-800 text-white hover:bg-blue-700"}`}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
