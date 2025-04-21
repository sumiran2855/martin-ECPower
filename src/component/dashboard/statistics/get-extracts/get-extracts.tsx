import { useTheme } from "@/app/dashboard/layout";
import { useState } from "react";

export default function GetExtracts() {
  const { darkMode } = useTheme();
  const [email, setEmail] = useState<string>("test@test.org");
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  return (
    <div
      className={`py-2 px-4 rounded-lg shadow-sm transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="mb-6">
        <h2
          className={`text-lg font-medium mb-4 mt-2 ${
            darkMode ? "text-blue-300" : "text-blue-900"
          }`}
        >
          Please note: Both date and hour must be set
        </h2>
      </div>

      <div
        className={`rounded-lg shadow-sm p-6 mb-6 ${
          darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
        }`}
      >
        <div className="mb-6">
          <label
            htmlFor="filter"
            className={`block text-xs mb-1 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Filter
          </label>
          <input
            type="text"
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              darkMode
                ? "bg-gray-800 text-white border-gray-600 placeholder-gray-400"
                : "bg-white text-black border-gray-300"
            }`}
            placeholder="Filter"
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="email"
            className={`block text-xs mb-1 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              darkMode
                ? "bg-gray-800 text-white border-gray-600 placeholder-gray-400"
                : "bg-white text-black border-gray-300"
            }`}
            placeholder="Enter Email address"
          />
        </div>
      </div>

      <div
        className={`rounded-lg shadow-sm p-6 mb-6 ${
          darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
        }`}
      >
        <div className="mb-6">
          <label
            htmlFor="fromDate"
            className={`block text-xs mb-1 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            From Date DD-MM-YY HH:MM
          </label>
          <input
            type="text"
            id="fromDate"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              darkMode
                ? "bg-gray-800 text-white border-gray-600 placeholder-gray-400"
                : "bg-white text-black border-gray-300"
            }`}
            placeholder="DD-MM-YY HH:MM"
          />
        </div>

        <div>
          <label
            htmlFor="toDate"
            className={`block text-xs mb-1 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            To Date DD-MM-YY HH:MM
          </label>
          <input
            type="text"
            id="toDate"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              darkMode
                ? "bg-gray-800 text-white border-gray-600 placeholder-gray-400"
                : "bg-white text-black border-gray-300"
            }`}
            placeholder="DD-MM-YY HH:MM"
          />
        </div>
      </div>
      <div className="flex justify-end my-8">
      <button
        // onClick={handleGetData}
        className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded cursor-pointer"
      >
        Get Data
      </button>
      </div>
    </div>
  );
}
