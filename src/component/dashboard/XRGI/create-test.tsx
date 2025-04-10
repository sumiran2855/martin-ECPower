"use client";
import { useTheme } from "@/app/dashboard/layout";
import { NotebookPen } from "lucide-react";
import React, { useState } from "react";

interface CreateTestFormProps {
  onCancel: () => void;
  onSave?: () => void;
  testId?: string;
}

const CreateTestForm: React.FC<CreateTestFormProps> = ({
  onCancel,
  onSave,
  testId = "1979599994 XRGI-25 CARB test / OR35041",
}) => {
  const [description, setDescription] = useState("");
  const { darkMode } = useTheme();
  return (
    <div className=" p-4 sm:p-6">
      <div className="flex items-center gap-2 mb-2">
        <div
          className={`${
            darkMode ? "text-gray-200" : "text-blue-500"
          } flex-shrink-0`}
        >
          <NotebookPen />
        </div>
        <h2
          className={`text-lg sm:text-xl font-bold ${
            darkMode ? "text-gray-200" : "text-blue-900"
          }`}
        >
          Registration of tests
        </h2>
      </div>

      <p
        className={`text-sm mb-1 ml-8 ${
          darkMode ? "text-gray-200" : "text-gray-700"
        }`}
      >
        The following text box is for a short description of the tests run on
        the unit. E. g. if the unit is used for testing new components.
      </p>

      <p
        className={`text-sm mb-8 ml-8 ${
          darkMode ? "text-gray-200" : "text-gray-700"
        }`}
      >
        Fields marked with <span className="text-red-500">*</span> are required
      </p>

      <div
        className={`${
          darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"
        }  p-4 sm:p-6 rounded-lg border border-gray-200 mb-6 shadow`}
      >
        <p className="text-base font-medium ">{testId}</p>
        <div className="mt-6">
          <label
            className={`block mb-1 text-sm font-medium ${
              darkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
            className={`w-full p-2 border border-gray-300 rounded-md ${
              darkMode ? "text-gray-100" : "text-gray-700"
            } focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none`}
            placeholder="Enter test description"
          ></textarea>
        </div>
      </div>

      <div className="flex justify-start gap-3">
        <button
          onClick={onCancel}
          className="px-7 py-2 border border-gray-300 bg-white rounded-md text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
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

export default CreateTestForm;
