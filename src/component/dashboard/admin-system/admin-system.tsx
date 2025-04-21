"use client";
import { useState } from "react";
import { useTheme } from "@/app/dashboard/layout";
import {
  ChevronLeft,
  ChevronRight,
  Edit,
  Search,
  ShieldUser,
} from "lucide-react";

interface SoftwareVersion {
  id: number;
  packageName: string;
  version: string;
  releaseType: string;
  lastUpdated: string;
}

export default function AdminSoftwareVersions() {
  const { darkMode } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const softwareVersions: SoftwareVersion[] = [
    {
      id: 1,
      packageName: "2013.2",
      version: "1.0.0",
      releaseType: "OBSOLETE",
      lastUpdated: "22-08-17",
    },
    {
      id: 2,
      packageName: "2013.2",
      version: "1.0.0",
      releaseType: "OBSOLETE",
      lastUpdated: "22-08-17",
    },
    {
      id: 3,
      packageName: "2013.2",
      version: "1.0.0",
      releaseType: "OBSOLETE",
      lastUpdated: "22-08-17",
    },
    {
      id: 4,
      packageName: "2013.2",
      version: "1.0.0",
      releaseType: "OBSOLETE",
      lastUpdated: "22-08-17",
    },
    {
      id: 5,
      packageName: "2013.2",
      version: "1.0.0",
      releaseType: "OBSOLETE",
      lastUpdated: "22-08-17",
    },
    {
      id: 6,
      packageName: "2013.2",
      version: "1.0.0",
      releaseType: "OBSOLETE",
      lastUpdated: "22-08-17",
    },
    {
      id: 7,
      packageName: "2013.2",
      version: "1.0.0",
      releaseType: "OBSOLETE",
      lastUpdated: "22-08-17",
    },
    {
      id: 8,
      packageName: "2013.2",
      version: "1.0.0",
      releaseType: "OBSOLETE",
      lastUpdated: "22-08-17",
    },
    {
      id: 9,
      packageName: "2013.2",
      version: "1.0.0",
      releaseType: "OBSOLETE",
      lastUpdated: "22-08-17",
    },
    {
      id: 10,
      packageName: "2013.2",
      version: "1.0.0",
      releaseType: "OBSOLETE",
      lastUpdated: "22-08-17",
    },
    {
        id: 11,
        packageName: "2013.2",
        version: "1.0.0",
        releaseType: "OBSOLETE",
        lastUpdated: "22-08-17",
      },
  ];

  const totalPages = Math.ceil(softwareVersions.length / itemsPerPage);
  
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    
    buttons.push(
      <button
        key="first"
        onClick={() => goToPage(1)}
        className={`px-2 py-1 border ${
          currentPage === 1
            ? `${darkMode ? 'border-blue-400 bg-blue-900 ' : 'border-blue-500 bg-blue-50 '}`
            : `${darkMode ? 'border-gray-600' : 'border-gray-300'}`

        } rounded-md text-sm`}
      >
        1
      </button>
    );

    if (currentPage > 3) {
      buttons.push(<span key="ellipsis1" className="px-2">...</span>);
    }

    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (i === 1 || i === totalPages) continue;
      buttons.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`px-2 py-1 border ${
            currentPage === i
              ? `${darkMode ? 'bg-blue-900 border-blue-400':'bg-blue-50 border-blue-500'} `
              : "border-gray-300 dark:border-gray-600"
          } rounded-md text-sm hidden sm:block`}
        >
          {i}
        </button>
      );
    }

    if (currentPage < totalPages - 2 && totalPages > 3) {
      buttons.push(<span key="ellipsis2" className="px-2">...</span>);
    }

    if (totalPages > 1) {
      buttons.push(
        <button
          key="last"
          onClick={() => goToPage(totalPages)}
          className={`px-2 py-1 border ${
            currentPage === totalPages
              ? "bg-blue-50 border-blue-500 dark:bg-blue-900 dark:border-blue-400"
              : "border-gray-300 dark:border-gray-600"
          } rounded-md text-sm`}
        >
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

  const handleItemsPerPageChange = (newValue: number) => {
    setItemsPerPage(newValue);
    setCurrentPage(1);
  };


  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-white"
      } py-2 px-4 rounded-lg shadow-sm transition-colors duration-300`}
    >
      <div className="w-full overflow-x-auto md:block">
        <div className="flex items-center mt-4">
          <ShieldUser className="text-blue-500 mr-2 text-xl" />
          <h1 className="text-2xl font-medium">Admin system</h1>
        </div>

        <div
          className={`${
            darkMode ? "bg-gray-800" : "bg-white"
          } rounded-lg shadow-md`}
        >
          <div className="p-4 flex flex-col md:flex-row justify-end items-center border-b border-gray-200 dark:border-gray-700">
            <div className="w-full md:w-auto mb-4 md:mb-0 md:mr-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className={`pl-10 pr-4 py-2 border rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <button className="px-6 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-colors w-full md:w-auto">
              New
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead className={`${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                <tr>
                  <th className="px-4 py-3 text-left font-medium">
                    SW Package Name
                  </th>
                  <th className="px-4 py-3 text-left font-medium">
                    Software Version
                  </th>
                  <th className="px-4 py-3 text-left font-medium">
                    Release Type
                  </th>
                  <th className="px-4 py-3 text-left font-medium">
                    Change Date
                  </th>
                  <th className="px-4 py-3 text-right font-medium">Edit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {softwareVersions
                .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                .map((item) => (
                  <tr
                    key={item.id}
                    className={`${
                      darkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
                    }`}
                  >
                    <td className="px-4 py-4 text-sm">{item.packageName}</td>
                    <td className="px-4 py-4 text-sm">{item.version}</td>
                    <td className="px-4 py-4 text-sm">{item.releaseType}</td>
                    <td className="px-4 py-4 text-sm">{item.lastUpdated}</td>
                    <td className="px-4 py-4 text-right">
                      <button className="text-blue-500 hover:text-blue-600">
                        <Edit className="h-5 w-5 inline" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center px-4 py-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-1 mb-3 sm:mb-0">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm disabled:opacity-50"
              >
                <ChevronLeft className="w-4 h-4 mr-1" /> Previous
              </button>

              {renderPaginationButtons()}

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm disabled:opacity-50"
              >
                Next <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="flex items-center">
              <span className="ml-8 mr-1 text-sm">Show</span>
              <select
                value={itemsPerPage}
                onChange={(e) =>
                  handleItemsPerPageChange(Number(e.target.value))
                }
                className={`border rounded-md px-2 py-1 text-sm ${
                  darkMode
                    ? "border-gray-600 bg-gray-700 text-white"
                    : "border-gray-300 bg-white text-black"
                }`}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
