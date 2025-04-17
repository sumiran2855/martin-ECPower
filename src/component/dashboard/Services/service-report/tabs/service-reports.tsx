"use client";
import { useTheme } from "@/app/dashboard/layout";
import { ChevronDown, ChevronUp, FileText, Search } from "lucide-react";
import React, { useState } from "react";

export default function ServiceReportTab({}) {
  const { darkMode } = useTheme();
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const toggleRow = (index: number) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  const serviceReports = [
    {
      id: 0,
      date: "01-05-23 00:00",
      creation: "01-05-23 15:07",
      number: "SD-946463316",
      type: "Idriftsættelse",
    },
    {
      id: 1,
      date: "01-05-23 00:00",
      creation: "01-05-23 15:07",
      number: "SD-946463316",
      type: "Idriftsættelse",
    },
    {
      id: 2,
      date: "01-05-23 00:00",
      creation: "01-05-23 15:07",
      number: "SD-946463316",
      type: "Idriftsættelse",
    },
    {
      id: 3,
      date: "01-05-23 00:00",
      creation: "01-05-23 15:07",
      number: "SD-946463316",
      type: "Idriftsættelse",
    },
    {
      id: 4,
      date: "01-05-23 00:00",
      creation: "01-05-23 15:07",
      number: "SD-946463316",
      type: "Idriftsættelse",
    },
    {
      id: 5,
      date: "01-05-23 00:00",
      creation: "01-05-23 15:07",
      number: "SD-946463316",
      type: "Idriftsættelse",
    },
  ];

  const resources = [
    {
      description: "00:00-23:59",
      date: "2023-05-01",
      quantity: "1.00",
      unit: "timer",
      workType: "Arbejdstid",
    },
    {
      description: "00:00-23:59",
      date: "2023-05-01",
      quantity: "1.00",
      unit: "timer",
      workType: "Arbejdstid",
    },
  ];
  return (
    <div
      className={`${
        darkMode
          ? "bg-gray-800 border-1 border-white rounded-lg shadow-sm"
          : "bg-white rounded-lg shadow-sm"
      } p-6 mb-6`}
    >
      <div className="flex justify-between mb-4">
        <h1
          className={`${
            darkMode ? "text-gray-200" : "text-blue-900"
          } text-xl font-bold mb-4`}
        >
          Service Reports
        </h1>
        {/* Search Bar */}
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            placeholder="Search"
            className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2
              ${
                darkMode
                  ? "bg-gray-800 text-white border border-gray-600 placeholder-gray-400 focus:ring-gray-300"
                  : "bg-white text-black border border-gray-300 placeholder-gray-500 focus:ring-blue-500"
              }`}
          />
          <Search
            className={`${
              darkMode ? "text-gray-300" : "text-gray-400"
            } absolute right-3 top-2.5 h-5 w-5`}
          />
        </div>
      </div>
      <div className="mb-6">
        <h2
          className={`${
            darkMode ? "text-gray-200" : "text-blue-900"
          } text-lg font-medium mb-2`}
        >
          1000001098 EC POWER - UDVIKLING / Testcelle P1
        </h2>
        <p
          className={`text-sm ${darkMode ? "text-gray-200" : "text-gray-600"}`}
        >
          The list below shows service log and waiting position for choosen
          systems. For more detailled description please click on the specific
          line
        </p>
      </div>

      {/* Service Reports Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr
              className={`${
                darkMode
                  ? "bg-gray-800 text-gray-200"
                  : "bg-gray-50 text-blue-900"
              }`}
            >
              <th className="px-4 py-3 text-left text-sm font-medium">
                Date of delivery
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium">
                Creation date
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium">
                Service Report Number
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium">
                Service Type
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium">
                Actions
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium"></th>
            </tr>
          </thead>
          <tbody
            className={`${
              darkMode ? "bg-gray-800" : "bg-white"
            } divide-y divide-gray-200`}
          >
            {serviceReports.map((report, index) => (
              <React.Fragment key={report.id}>
                <tr
                  className={`${
                    darkMode
                      ? index % 2 === 0
                        ? "bg-gray-800"
                        : "bg-gray-700"
                      : index % 2 === 0
                      ? "bg-white"
                      : "bg-gray-50"
                  }`}
                >
                  <td className={`px-4 py-4 text-sm ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                    {report.date}
                  </td>
                  <td className={`px-4 py-4 text-sm ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                    {report.creation}
                  </td>
                  <td className={`px-4 py-4 text-sm ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                    {report.number}
                  </td>
                  <td className={`px-4 py-4 text-sm ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                    {report.type}
                  </td>
                  <td className="px-4 py-4 text-center">
                    <button className={`${darkMode ? "text-blue-400 hover:text-blue-600" : "text-blue-500 hover:text-blue-700"} cursor-pointer`}>
                      <FileText className="h-5 w-5" />
                    </button>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <button
                      onClick={() => toggleRow(report.id)}
                      className={`${darkMode ? "text-gray-300 hover:text-gray-100" : "text-gray-500 hover:text-gray-700"} cursor-pointer`}
                    >
                      {expandedRow === report.id ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                  </td>
                </tr>

                {expandedRow === report.id && (
                  <tr>
                    <td colSpan={6} className={`px-4 py-4 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
                      <div className="mb-4">
                        <h3 className={`font-medium mb-2 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                          Descriptions:
                        </h3>
                        <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>mmmmmm</p>
                      </div>

                      <div>
                        <h3 className={`font-medium mb-2 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                          Recources :
                        </h3>
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className={darkMode ? "bg-gray-700" : "bg-gray-100"}>
                              <tr>
                                <th className={`px-4 py-2 text-left text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                                  Description
                                </th>
                                <th className={`px-4 py-2 text-left text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                                  Date
                                </th>
                                <th className={`px-4 py-2 text-left text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                                  Quantity
                                </th>
                                <th className={`px-4 py-2 text-left text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                                  Unit
                                </th>
                                <th className={`px-4 py-2 text-left text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                                  Work Type
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {resources.map((resource, idx) => (
                                <tr
                                  key={idx}
                                  className={darkMode 
                                    ? idx % 2 === 0 
                                      ? "bg-gray-800" 
                                      : "bg-gray-700" 
                                    : idx % 2 === 0 
                                      ? "bg-white" 
                                      : "bg-gray-50"
                                  }
                                >
                                  <td className={`px-4 py-2 text-sm ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                                    {resource.description}
                                  </td>
                                  <td className={`px-4 py-2 text-sm ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                                    {resource.date}
                                  </td>
                                  <td className={`px-4 py-2 text-sm ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                                    {resource.quantity}
                                  </td>
                                  <td className={`px-4 py-2 text-sm ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                                    {resource.unit}
                                  </td>
                                  <td className={`px-4 py-2 text-sm ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                                    {resource.workType}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
