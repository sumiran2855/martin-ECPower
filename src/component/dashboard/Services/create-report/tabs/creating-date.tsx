import { useTheme } from "@/app/dashboard/layout";
import { Calendar, ChevronDown, Clock9 } from "lucide-react";
import { useState } from "react";

export default function CreatingDateTab() {
  const { darkMode } = useTheme();
  const [serviceType, setServiceType] = useState("");
  const [creationDate, setCreationDate] = useState("04-02-2025");
  const [deliveryDate, setDeliveryDate] = useState("04-02-2025");
  const [servicesRendered, setServicesRendered] = useState("");
  return (
    <div
      className={`${
        darkMode
          ? "bg-gray-800 border-1 border-white rounded-lg shadow-sm"
          : "bg-white rounded-lg shadow-sm"
      } p-6 mb-6`}
    >
      <div className="mb-6">
        <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-6`}>
          Enter the dates for workmanship, service type and optionally the
          reason for the visit.
        </p>

        <div className="mb-4">
          <label
            className={`block text-xs ${
              darkMode ? "text-gray-300" : "text-gray-400"
            } mb-1`}
          >
            Creation date
          </label>
          <div className="relative">
            <input
              type="text"
              value={creationDate}
              onChange={(e) => setCreationDate(e.target.value)}
              className={`w-full p-2 border ${
                darkMode
                  ? "bg-gray-700 border-gray-600"
                  : "bg-white border-gray-300"
              } rounded-md pr-10`}
              placeholder="Enter start date"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Clock9 className="w-5 h-5 text-gray-500 mt-1" />
            </span>
          </div>
        </div>

        <div className="mb-4">
          <label
            className={`block text-xs ${
              darkMode ? "text-gray-300" : "text-gray-400"
            } mb-1`}
          >
            Date of delivery
          </label>
          <div className="relative">
            <input
              type="text"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
              className={`w-full p-2 border ${
                darkMode
                  ? "bg-gray-700 border-gray-600"
                  : "bg-white border-gray-300"
              } rounded-md pr-10`}
              placeholder="Enter end date"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Calendar className="w-5 h-5 text-gray-500 mt-1" />
            </span>
          </div>
        </div>

        <div className="mb-4">
          <label
            className={`block text-xs ${
              darkMode ? "text-gray-300" : "text-gray-400"
            } mb-1`}
          >
            Service Type
          </label>
          <div className="relative">
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className={`w-full p-2 border ${
                darkMode
                  ? "bg-gray-700 border-gray-600"
                  : "bg-white border-gray-300"
              } rounded-md appearance-none pr-10`}
            >
              <option value="">Select service type</option>
              <option value="maintenance">Maintenance</option>
              <option value="repair">Repair</option>
              <option value="installation">Installation</option>
            </select>
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <ChevronDown
                className={`w-5 h-5 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              />
            </span>
          </div>
        </div>

        <div className="mb-6">
          <label
            className={`block text-xs ${
              darkMode ? "text-gray-300" : "text-gray-400"
            } mb-1`}
          >
            Services Rendered <span className="text-red-500">*</span>
          </label>
          <textarea
            value={servicesRendered}
            onChange={(e) => setServicesRendered(e.target.value)}
            className={`w-full p-2 border ${
              darkMode
                ? "bg-gray-700 border-gray-600"
                : "bg-white border-gray-300"
            } rounded-md h-32`}
            placeholder="description..."
          ></textarea>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
        <button
          className="border border-gray-300 rounded-md px-6 py-2 text-gray-300 font-medium hover:bg-gray cursor-pointer"
          disabled
        >
          Previous Step
        </button>
        <button
        //   onClick={handleNext}
          className={`${
            darkMode
              ? "text-gray-200 hover:bg-gray-700"
              : "text-blue-900 hover:bg-gray-100"
          } border border-gray-300 rounded-md px-6 py-2  font-medium  cursor-pointer`}
        >
          Next Step
        </button>
      </div>
      </div>
    </div>
  );
}
