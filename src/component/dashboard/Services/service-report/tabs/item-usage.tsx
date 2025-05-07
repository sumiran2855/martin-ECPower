"use client";
import { useTheme } from "@/app/dashboard/layout";
import { Search } from "lucide-react";
import { useState } from "react";
import { ServiceReport } from "../../type";

interface CreateTestFormProps {
  serviceReportData: ServiceReport[] | null;
}
export default function ItemUsageTab({
  serviceReportData,
}: CreateTestFormProps) {
  const { darkMode } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div
      className={`${
        darkMode
          ? "bg-gray-800 border-1 border-white rounded-lg shadow-sm"
          : "bg-white rounded-lg shadow-sm"
      } p-6`}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2
          className={`${
            darkMode ? "text-gray-200" : "text-blue-900"
          } text-xl font-bold mb-4`}
        >
          Item Usage
        </h2>
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search"
              className={`w-full border rounded-md pl-3 pr-10 py-2 focus:outline-none focus:ring-2 ${
                darkMode
                  ? "bg-gray-800 text-white border border-gray-600 placeholder-gray-400 focus:ring-gray-300"
                  : "bg-white text-black border border-gray-300 placeholder-gray-500 focus:ring-blue-500"
              }`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <Search className={`h-5 w-5 ${darkMode ? "text-gray-300" : "text-gray-400"}`} />
            </div>
          </div>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors cursor-pointer">
            Send report on email
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className={`${darkMode ? "bg-gray-700" : "bg-white"}`}>
            <tr>
              <th className={`px-4 py-3 text-left text-sm font-medium ${darkMode ? "text-gray-200" : "text-blue-900"}`}>
                XRGI®-ID
              </th>
              <th className={`px-4 py-3 text-left text-sm font-medium ${darkMode ? "text-gray-200" : "text-blue-900"}`}>
                Service Report Number
              </th>
              <th className={`px-4 py-3 text-left text-sm font-medium ${darkMode ? "text-gray-200" : "text-blue-900"}`}>
                Date of Delivery
              </th>
              <th className={`px-4 py-3 text-left text-sm font-medium ${darkMode ? "text-gray-200" : "text-blue-900"}`}>
                Creation date
              </th>
              {/* <th className={`px-4 py-3 text-left text-sm font-medium ${darkMode ? "text-gray-200" : "text-blue-900"}`}>
                User
              </th> */}
              <th className={`px-4 py-3 text-left text-sm font-medium ${darkMode ? "text-gray-200" : "text-blue-900"}`}>
                Part Number
              </th>
              <th className={`px-4 py-3 text-left text-sm font-medium ${darkMode ? "text-gray-200" : "text-blue-900"}`}>
                Item text
              </th>
              <th className={`px-4 py-3 text-left text-sm font-medium ${darkMode ? "text-gray-200" : "text-blue-900"}`}>
                Number
              </th>
              <th className={`px-4 py-3 text-left text-sm font-medium ${darkMode ? "text-gray-200" : "text-blue-900"}`}>
                Unit
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {serviceReportData?.length ? (
              serviceReportData.map((report, reportIndex) =>
                report.itemUsages?.length ? (
                  report.itemUsages.map((item, itemIndex) => (
                    <tr
                      key={`${reportIndex}-${itemIndex}`}
                      className={`${
                        darkMode
                          ? (reportIndex + itemIndex) % 2 === 0
                            ? "bg-gray-800"
                            : "bg-gray-700"
                          : (reportIndex + itemIndex) % 2 === 0
                          ? "bg-white"
                          : "bg-gray-50"
                      } ${
                        darkMode ? "hover:bg-gray-600" : "hover:bg-gray-100"
                      }`}
                    >
                      <td
                        className={`px-4 py-4 whitespace-nowrap text-sm ${
                          darkMode ? "text-gray-200" : "text-gray-600"
                        }`}
                      >
                        {report.xrgiID || "—"}
                      </td>
                      <td
                        className={`px-4 py-4 whitespace-nowrap text-sm ${
                          darkMode ? "text-gray-200" : "text-gray-600"
                        }`}
                      >
                        {report.Service_Report_Number || "—"}
                      </td>
                      <td
                        className={`px-4 py-4 whitespace-nowrap text-sm ${
                          darkMode ? "text-gray-200" : "text-gray-600"
                        }`}
                      >
                        {report.creatingDate?.deliveryDate || "—"}
                      </td>
                      <td
                        className={`px-4 py-4 whitespace-nowrap text-sm ${
                          darkMode ? "text-gray-200" : "text-gray-600"
                        }`}
                      >
                        {report.creatingDate?.creationDate || "—"}
                      </td>
                      {/* <td
                        className={`px-4 py-4 whitespace-nowrap text-sm ${
                          darkMode ? "text-gray-200" : "text-gray-600"
                        }`}
                      >
                        {"—"}
                      </td> */}
                      <td
                        className={`px-4 py-4 whitespace-nowrap text-sm ${
                          darkMode ? "text-gray-200" : "text-gray-600"
                        }`}
                      >
                        {item.partNumber || "—"}
                      </td>
                      <td
                        className={`px-4 py-4 whitespace-nowrap text-sm ${
                          darkMode ? "text-gray-200" : "text-gray-600"
                        }`}
                      >
                        {item.description || "—"}
                      </td>
                      <td
                        className={`px-4 py-4 whitespace-nowrap text-sm ${
                          darkMode ? "text-gray-200" : "text-gray-600"
                        }`}
                      >
                        {item.quantity ?? "—"}
                      </td>
                      <td
                        className={`px-4 py-4 whitespace-nowrap text-sm ${
                          darkMode ? "text-gray-200" : "text-gray-600"
                        }`}
                      >
                        {item.unit || "—"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr key={`empty-${reportIndex}`}>
                    <td
                      colSpan={9}
                      className="text-center py-4 italic text-sm text-gray-500"
                    >
                      No item usage data for report #
                      {report.Service_Report_Number}
                    </td>
                  </tr>
                )
              )
            ) : (
              <tr>
                <td
                  colSpan={9}
                  className="text-center py-4 italic text-sm text-gray-500"
                >
                  No service report data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
