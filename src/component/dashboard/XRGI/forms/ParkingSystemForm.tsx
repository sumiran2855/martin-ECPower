"use client";
import { useState } from "react";
import { ChevronDown, NotebookPen } from "lucide-react";
import { useTheme } from "@/app/dashboard/layout";
import DatePicker from "@/component/DatePicker";

interface ParkingSystemFormProps {
  onCancel: () => void;
  onSave?: () => void;
  testId?: string;
}

const ParkingSystemForm: React.FC<ParkingSystemFormProps> = ({
  onCancel,
  onSave,
  testId = "1979599994 XRGI-25 CARB test / OR35041",
}) => {
  const { darkMode } = useTheme();
  const [reason, setReason] = useState("Waiting for parts");
  const [cancelDate, setCancelDate] = useState("08-02-25 00:00");
  const [description, setDescription] = useState("");

  const reasonOptions = [
    "Waiting for parts",
    "Waiting for service",
    "Waiting for customer",
    "Ran out of diesel",
    "Stopped calling",
    "Complaint",
    "Under installation",
    "Other"
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      <div
        className={`${
          darkMode ? "text-gray-300" : "text-blue-900"
        } flex items-center gap-2 mb-6`}
      >
        <div>
          <NotebookPen />
        </div>
        <h1 className="text-xl font-bold">Parking system</h1>
      </div>

      <div
        className={`${
          darkMode
            ? "bg-dark-800 rounded-lg border-1 shadow"
            : "bg-white rounded-lg shadow"
        }   p-6`}
      >
        <div className="mb-6">
          <h2
            className={`${
              darkMode ? "text-gray-200" : "text-gray-800"
            } text-base font-medium `}
          >
            {testId}
          </h2>
        </div>

        <div className="mb-6">
          <label
            htmlFor="reason"
            className={`${
              darkMode ? "text-gray-200" : "text-gray-700"
            } block mb-2 text-sm font-medium`}
          >
            Select Reason <span className="text-red-500">*</span>
          </label>
          
          <div className="relative w-full md:w-72">
            <select
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className={`w-full px-4 py-2 pr-10 appearance-none ${
                darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-700"
              } border border-gray-300 rounded-md focus:outline-none cursor-pointer`}
            >
              {reasonOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <ChevronDown className={`h-5 w-5 ${darkMode ? "text-gray-400" : "text-gray-500"}`} />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="cancelDate"
            className={`block mb-2 text-sm font-medium ${
              darkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Date of cancelling (No cancellations prior to this date)
          </label>
          <DatePicker 
            selectedDate={cancelDate}
            onDateChange={setCancelDate}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="description"
            className={`block mb-2 text-sm font-medium ${
              darkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`w-full px-4 py-2 border border-gray-300 rounded-md resize-none ${
              darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-700"
            }`}
          ></textarea>
        </div>

        <div className="flex justify-start gap-3">
          <button
            onClick={onCancel}
            className={`px-6 py-2 border border-gray-300 rounded-md ${
              darkMode
                ? "text-gray-200 hover:bg-gray-700"
                : "text-gray-700 hover:bg-gray-50"
            }  transition-colors cursor-pointer`}
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="px-6 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-colors cursor-pointer"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParkingSystemForm;
