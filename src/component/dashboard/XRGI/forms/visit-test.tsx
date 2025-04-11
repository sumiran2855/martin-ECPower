"use client";
import { useTheme } from "@/app/dashboard/layout";
import { NotebookPen } from "lucide-react";
import React, { useState } from "react";

interface CreateTestFormProps {
  onCancel: () => void;
  onSave?: () => void;
  testId?: string;
}

const RegistrationVisitTest: React.FC<CreateTestFormProps> = ({
  onCancel,
  onSave,
  testId = "1979599994 XRGI-25 CARB test / OR35041",
}) => {
  const [description, setDescription] = useState("");
  const { darkMode } = useTheme();
  return (
    <div className=" p-4 sm:p-6">
      <div className="flex items-center gap-2 mb-2">
        <div className="text-blue-500 flex-shrink-0">
          <NotebookPen />
        </div>
        <h2 className={`${darkMode ? 'text-gray-200': 'text-blue-900'} text-lg sm:text-xl font-bold`}>
          Registration of Visit
        </h2>
      </div>

      <p className={`text-sm mb-1 ml-8 ${
          darkMode ? "text-gray-400" : "text-gray-700"
        }`}>
        In the textbox below you may enter a short description of the visit registered at the installation in question
      </p>

      <p className={`text-sm mb-8 ml-8 ${
          darkMode ? "text-gray-400" : "text-gray-700"
        }`} >
        Fields marked with <span className="text-red-500">*</span> are required
      </p>

      <div className={`${darkMode ? 'bg-gray-800': 'bg-white'}  p-4 sm:p-6 rounded-lg border border-gray-200 mb-6 shadow`}>
        <p className={`${darkMode ? 'text-gray-200': 'text-gray-800'} text-base font-medium`}>{testId}</p>
        <div className="mt-6">
          <label className={`${darkMode ? 'text-gray-200': 'text-gray-700'} block mb-1 text-sm font-medium`}>
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
            className={`${darkMode ? 'text-gray-200 border-gray-300 focus:ring-white': 'border-gray-300 text-gray-700 focus:ring-blue-500'} w-full p-2 border rounded-md focus:outline-none focus:ring-1 resize-none`}
            placeholder="Enter test description"
          ></textarea>
        </div>
      </div>

      <div className="flex justify-start gap-3">
        <button
          onClick={onCancel}
          className={`px-7 py-2 border border-gray-300 rounded-md ${
            darkMode
              ? "text-gray-200 hover:bg-gray-700"
              : "text-gray-700 hover:bg-gray-50"
          }  transition-colors cursor-pointer`}
        >
          Cancel
        </button>
        <button
          onClick={onSave}
          className="px-7 py-2 bg-blue-800 text-white rounded-md text-sm hover:bg-blue-900 transition-colors cursor-pointer"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default RegistrationVisitTest;
