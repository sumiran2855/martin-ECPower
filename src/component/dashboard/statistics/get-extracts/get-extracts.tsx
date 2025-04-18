import { useTheme } from "@/app/dashboard/layout";
import { useState } from "react";

export default function GetExtracts() {
  const { darkMode } = useTheme();
  const [email, setEmail] = useState<string>('test@test.org');
  const [fromDate, setFromDate] = useState<string>('');
  const [toDate, setToDate] = useState<string>('');
  const [filter, setFilter] = useState<string>('');
  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100"
      } py-2 px-4 rounded-lg shadow-sm transition-colors duration-300`}
    >
         <div className="mb-6">
        <h2 className={`text-lg font-medium mb-4 ${darkMode ? "text-blue-300" : "text-blue-900"} mt-2`}>
          Please note: Both date and hour must be set
        </h2>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="mb-6">
          <label htmlFor="filter" className="block text-xs text-gray-700 mb-1">
            Filter
          </label>
          <input
            type="text"
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Filter"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="email" className="block text-xs text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="mb-6">
          <label htmlFor="fromDate" className="block text-xs text-gray-700 mb-1">
            From Date DD-MM-YY HH:MM
          </label>
          <input
            type="text"
            id="fromDate"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="DD-MM-YY HH:MM"
          />
        </div>

        <div>
          <label htmlFor="toDate" className="block text-xs text-gray-700 mb-1">
            To Date DD-MM-YY HH:MM
          </label>
          <input
            type="text"
            id="toDate"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="DD-MM-YY HH:MM"
          />
        </div>
      </div>
    </div>
  );
}
