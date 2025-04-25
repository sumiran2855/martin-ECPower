"use client";
import { useState } from "react";
import { useTheme } from "@/app/dashboard/layout";
import { HelpCircle, ChevronLeft, ChevronRight, FilePen } from "lucide-react";
import Edit_service_report from "./edit-service-report";

interface ServiceCode {
  id: number;
  code: number;
  text: string;
  type: "normal" | "warning" | "error";
}

export default function OnlineManual() {
  const { darkMode } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [editing, setEditing] = useState(false);

  const serviceCodes: ServiceCode[] = [
    {
      id: 1,
      code: 1,
      text: "MANUAL STOP IN NORMAL OPERATION",
      type: "warning",
    },
    { id: 2, code: 4, text: "HEAT STORAGE IS FULL", type: "normal" },
    { id: 3, code: 5, text: "HEAT STORAGE IS ⅔ FULL", type: "normal" },
    { id: 4, code: 6, text: "LOW ELECTRICITY CONSUMPTION", type: "normal" },
    { id: 5, code: 7, text: "NO POWER PRODUCTION", type: "error" },
    { id: 6, code: 9, text: "AUTOMATIC OIL CHANGE", type: "normal" },
    { id: 7, code: 10, text: "FAULTY OIL PRESSURE SENSOR", type: "error" },
    { id: 8, code: 12, text: "NO OIL PRESSURE", type: "error" },
    {
      id: 9,
      code: 17,
      text: "LOW POWER PRODUCTION DURING CALIBRATION",
      type: "error",
    },
    {
      id: 10,
      code: 18,
      text: "HIGH POWER PRODUCTION DURING CALIBRATION",
      type: "error",
    },
    {
      id: 11,
      code: 18,
      text: "HIGH POWER PRODUCTION DURING CALIBRATION",
      type: "error",
    },
    {
      id: 12,
      code: 18,
      text: "HIGH POWER PRODUCTION DURING CALIBRATION",
      type: "error",
    },
  ];

  const totalPages = Math.ceil(serviceCodes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, serviceCodes.length);
  const currentCodes = serviceCodes.slice(startIndex, endIndex);

  const getPageNumbers = () => {
    const pageNumbers = [];

    pageNumbers.push(1);
    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);

    if (start > 2) {
      pageNumbers.push("ellipsis-start");
    }

    for (let i = start; i <= end; i++) {
      if (i !== 1 && i !== totalPages) {
        pageNumbers.push(i);
      }
    }

    if (end < totalPages - 1) {
      pageNumbers.push("ellipsis-end");
    }

    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getTextColor = (type: string) => {
    if (darkMode) {
      return type === "normal"
        ? "text-green-700"
        : type === "warning"
        ? "text-yellow-700"
        : "text-red-700";
    } else {
      return type === "normal"
        ? "text-green-700"
        : type === "warning"
        ? "text-yellow-700"
        : "text-red-700";
    }
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-white"
      } py-2 px-4 rounded-lg shadow-sm transition-colors duration-300`}
    >
    {!editing ? (
        <>
      <div className="p-4 flex items-center">
        <div className={`flex items-center ${darkMode ? 'text-blue-400' : 'text-blue-900'} my-4`}>
          <HelpCircle className="w-6 h-6 mr-2" />
          <h2 className="text-2xl font-medium">Online manual - Service code</h2>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr
              className={`${
                darkMode
                  ? "bg-gray-700 text-gray-200"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              <th className="p-4 text-left w-24">Code</th>
              <th className="p-4 text-left">Text</th>
              <th className="p-4 text-left w-24">Edit</th>
            </tr>
          </thead>
          <tbody>
            {currentCodes.map((item) => (
              <tr
                key={item.id}
                className={`${darkMode ? 'hover:bg-gray-700 ':'hover:bg-gray-100'} rounded shadow my-1`}
              >
                <td className="p-4 text-sm ">
                  <span className={`${getTextColor(item.type)}`}>
                    {item.code}
                  </span>
                </td>
                <td className="p-4 text-sm">
                  <span className={`${getTextColor(item.type)}`}>
                    {item.text}
                  </span>
                </td>
                <td className="p-4 text-left text-sm" onClick={()=>setEditing(true)}>
                  <button className="text-blue-500 hover:text-blue-700">
                    <FilePen className="w-5 h-5 cursor-pointer" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 mb-4">
        <div className="flex items-center space-x-1">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md flex items-center text-sm ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : `${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`
            }`}
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Previous
          </button>

          {getPageNumbers().map((page, index) =>
            page === "ellipsis-start" || page === "ellipsis-end" ? (
              <span key={`ellipsis-${index}`} className="px-2">
                ...
              </span>
            ) : (
              <button
                key={`page-${page}`}
                onClick={() => goToPage(Number(page))}
                className={`px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm ${
                  currentPage === page
                    ? `${
                        darkMode
                          ? "bg-blue-900 border-blue-700"
                          : "bg-blue-50 border-blue-300"
                      }`
                    : `${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`
                }`}
              >
                {page}
              </button>
            )
          )}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md flex items-center text-sm ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : `${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`
            }`}
          >
            Next <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        <div className="ml-6 flex items-center">
          <span className="mr-2 text-sm">Show</span>
          <select
            className={`"border ${
              darkMode ? "border-gray-600 bg-gray-700" : "border-gray-300"
            }  rounded-md px-2 py-1 text-sm`}
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>
      </>
      ) : (
        <Edit_service_report onClick={()=>setEditing(false)}/>
      )}
    </div>
  );
}
