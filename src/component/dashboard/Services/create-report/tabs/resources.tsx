import React, { useState } from "react";
import { useTheme } from "@/app/dashboard/layout";
import { ChevronDown, LockKeyhole } from "lucide-react";

type WorkType = "Working time" | "Transport time" | "Driven Distance" ;

interface CreatingDateTabProps {
  onNext: () => void;
  onPrevious: () => void;
}

export default function ResourcesTab({ onNext, onPrevious }: CreatingDateTabProps) {
  const { darkMode } = useTheme();
  const [date] = useState("04-02-2025");
  const [technician, setTechnician] = useState("");
  const [workType, setWorkType] = useState<WorkType | "">("");
  const [number, setNumber] = useState("");

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
      } p-6 mb-6`}
    >
      <p className="mb-6 text-sm md:text-base">
        Choose the relevant service technician. Note that the technician must be
        existing as a service database user.
      </p>

      <div className="space-y-4 md:space-y-6">
        {/* Creation date field */}
        <div>
          <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
            Creation of delivery
          </label>
          <div className="relative">
            <input
              type="text"
              value={date}
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

        {/* Service technician field */}
        <div>
          <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
            Service technician
          </label>
          <input
            type="text"
            value={technician}
            onChange={(e) => setTechnician(e.target.value)}
            placeholder="-"
            className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
              darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white"
            }`}
          />
        </div>

        {/* Work type field */}
        <div>
          <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
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

        {/* Number field */}
        <div>
          <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
            Number
          </label>
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Number"
            className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
              darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white"
            }`}
          />
        </div>

        <div>
          <button
            className={`${
              darkMode
                ? "text-gray-200 hover:bg-gray-700"
                : "text-blue-900 hover:bg-gray-100"
            } border border-gray-300 rounded-md px-6 py-2  font-medium  cursor-pointer`}
          >
            Add service log
          </button>
        </div>
      </div>

      <div className="text-lg border-gray-200 py-2 px-4 my-4 border rounded-lg shadow">
        <h2
          className={`text-lg ${
            darkMode ? "text-gray-200" : "text-blue-900"
          } font-medium`}
        >
          Resources
        </h2>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={onPrevious}
          className={`${
            darkMode
              ? "text-gray-200 hover:bg-gray-700"
              : "text-blue-900 hover:bg-gray-100"
          } border border-gray-300 rounded-md px-6 py-2  font-medium  cursor-pointer`}
        >
          Previous Step
        </button>
        <button
          onClick={onNext}
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
  );
}
