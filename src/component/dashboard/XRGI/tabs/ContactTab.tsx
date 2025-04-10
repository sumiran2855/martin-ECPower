"use client";

import { useTheme } from "@/app/dashboard/layout";

type Props = {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePrevious: () => void;
  handleNext: () => void;
  handleSave: () => void;
};

export default function ContactTab({
  formData,
  handleInputChange,
  handlePrevious,
  handleNext,
  handleSave,
}: Props) {
  const { darkMode } = useTheme();
  return (
    <div
      className={`${
        darkMode
          ? "bg-gray-800 border-1 border-white rounded-lg shadow-sm"
          : "bg-white rounded-lg shadow-sm"
      } p-6 mb-6`}
    >
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-700">Fill in the contact information.</p>
        <button
          onClick={handleSave}
          className="bg-blue-900 text-white rounded-md px-6 py-2 font-medium hover:bg-blue-800 cursor-pointer"
        >
          Save
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <label
            className={`${
              darkMode ? "text-gray-200" : "text-gray-500"
            } block text-sm mb-1`}
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`${darkMode ? 'text-gray-200' : 'text-gray-700'} w-full border border-gray-300 rounded-md py-2 px-3 `}
            required
          />
        </div>

        <div>
          <label
            className={`${
              darkMode ? "text-gray-200" : "text-gray-500"
            } block text-sm mb-1`}
          >
            Telephone No. <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={handleInputChange}
            className={`${darkMode ? 'text-gray-200' : 'text-gray-700'} w-full border border-gray-300 rounded-md py-2 px-3 `}
            required
          />
        </div>

        <div>
          <label
            className={`${
              darkMode ? "text-gray-200" : "text-gray-500"
            } block text-sm mb-1`}
          >
            Mobile No.
          </label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            className={`${darkMode ? 'text-gray-200' : 'text-gray-700'} w-full border border-gray-300 rounded-md py-2 px-3 `}
          />
        </div>

        <div>
          <label
            className={`${
              darkMode ? "text-gray-200" : "text-gray-500"
            } block text-sm mb-1`}
          >
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`${darkMode ? 'text-gray-200' : 'text-gray-700'} w-full border border-gray-300 rounded-md py-2 px-3 `}
          />
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrevious}
          className={`${darkMode ? 'text-gray-200 hover:bg-gray-700': 'text-blue-900 hover:bg-gray-100'} border border-gray-300 rounded-md px-6 py-2  font-medium cursor-pointer`}
        >
          Previous Step
        </button>
        <button
          onClick={handleNext}
          className={`${darkMode ? 'text-gray-200 hover:bg-gray-700': 'text-blue-900 hover:bg-gray-100'} border border-gray-300 rounded-md px-6 py-2  font-medium cursor-pointer`}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
