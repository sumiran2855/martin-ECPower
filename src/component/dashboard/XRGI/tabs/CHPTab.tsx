"use client";
import { useTheme } from "@/app/dashboard/layout";
import { ChevronDown, LockKeyhole } from "lucide-react";

type Props = {
  formData: any;
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  handleNext: () => void;
};

export default function CHPTab({
  formData,
  handleInputChange,
  handleNext,
}: Props) {
  const { darkMode } = useTheme();

  const objectTypeOptions = [
    "Select customer group",
    "Sheltered Accommodation",
    "Residential Houses",
    "Residential apartments",
    "Camping",
    "School",
    "Other",
    "ESCO",
    "Central Heating",
    "Amusement Park",
    "Leisure",
    "Hotel/Conference",
    "Industrial & Commercial",
    "Local Authority",
    "Office",
    "Central Government ",
    "Care-Home",
    "Restaurant",
    "Student Accommodation",
    "Health",
    "University"
  ];
  
  return (
    <div
      className={`${
        darkMode
          ? "bg-gray-800 border-1 border-white rounded-lg shadow-sm"
          : "bg-white rounded-lg shadow-sm"
      } p-6 mb-6`}
    >
      <p className={`${darkMode ? "text-gray-200" : "text-gray-700"} mb-6`}>
        You can edit your CHPs Information here.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* XRGI ID */}
        <div>
          <label
            className={`${
              darkMode ? "text-gray-200" : "text-gray-500"
            } block text-sm mb-1`}
          >
            XRGI-ID
          </label>
          <div className="relative">
            <input
              type="text"
              name="xrgiId"
              value={formData.xrgiId}
              onChange={handleInputChange}
              className={`${
                darkMode ? "text-gray-200" : "text-gray-700"
              } w-full border border-gray-300 rounded-md py-2 px-3 pr-10 `}
              readOnly
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <LockKeyhole className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* XRGI Type */}
        <div>
          <label
            className={`${
              darkMode ? "text-gray-200" : "text-gray-500"
            } block text-sm mb-1`}
          >
            XRGI Type
          </label>
          <div className="relative">
            <input
              type="text"
              name="xrgiType"
              value={formData.xrgiType}
              onChange={handleInputChange}
              className={`${
                darkMode ? "text-gray-200" : "text-gray-700"
              } w-full border border-gray-300 rounded-md py-2 px-3 pr-10 `}
              readOnly
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <LockKeyhole className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Object Type */}
        <div>
          <label
            className={`${
              darkMode ? "text-gray-200" : "text-gray-500"
            } block text-sm mb-1`}
          >
            Object Type <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              name="objectType"
              value={formData.objectType}
              onChange={handleInputChange}
              className={`${
                darkMode ? "text-gray-200 bg-gray-800" : "text-gray-700"
              } w-full border border-gray-300 rounded-md py-2 px-3 pr-10 appearance-none cursor-pointer text-sm`}
            >
              {objectTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <ChevronDown className="w-5 h-5 text-gray-500"/>
            </div>
          </div>
        </div>

        {/* Installation Name */}
        <div>
          <label
            className={`${
              darkMode ? "text-gray-200" : "text-gray-500"
            } block text-sm mb-1`}
          >
            Installation Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              name="installationName"
              value={formData.installationName}
              onChange={handleInputChange}
              className={`${
                darkMode ? "text-gray-200 bg-gray-800" : "text-gray-700"
              } w-full border border-gray-300 rounded-md py-2 px-3 pr-10 appearance-none cursor-pointer text-sm`}
            >
              <option value="XRGI-25 CARB test">XRGI-25 CARB test</option>
              <option value="Other Installation">Other Installation</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <ChevronDown className="w-5 h-5 text-gray-500"/>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <label
          className={`${
            darkMode ? "text-gray-200" : "text-gray-500"
          } block text-sm mb-1`}
        >
          Description <span className="text-red-500">*</span>
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className={`${
            darkMode ? "text-gray-200" : "text-gray-700"
          } w-full border border-gray-300 rounded-md py-2 px-3 h-32`}
        />
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
          onClick={handleNext}
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
