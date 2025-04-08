"use client";
import React, { useState } from "react";
import { useTheme } from "@/app/dashboard/layout";
import { FaDesktop } from "react-icons/fa";
import { Server } from "lucide-react";

interface InstallationData {
  name: string;
  id: string;
  calls: string;
  selected: boolean;
}

const UnitTest: React.FC = () => {
  const { darkMode } = useTheme();
  const [installations, setInstallations] = useState<InstallationData[]>([
    {
      name: "XRGI-25",
      id: "Nybrogade 2 1203",
      calls: "1000-2999",
      selected: false,
    },
    {
      name: "XRGI-25",
      id: "Nybrogade 2 1203",
      calls: "1000-2999",
      selected: false,
    },
    {
      name: "XRGI-25",
      id: "Nybrogade 2 1203",
      calls: "1000-2999",
      selected: false,
    },
    {
      name: "XRGI-25",
      id: "Nybrogade 2 1203",
      calls: "1000-2999",
      selected: false,
    },
    {
      name: "XRGI-25",
      id: "Nybrogade 2 1203",
      calls: "1000-2999",
      selected: false,
    },
    {
      name: "XRGI-25",
      id: "Nybrogade 2 1203",
      calls: "1000-2999",
      selected: false,
    },
    {
      name: "XRGI-25",
      id: "Nybrogade 2 1203",
      calls: "1000-2999",
      selected: false,
    },
    {
      name: "XRGI-25",
      id: "Nybrogade 2 1203",
      calls: "1000-2999",
      selected: false,
    },
    {
      name: "XRGI-25",
      id: "Nybrogade 2 1203",
      calls: "1000-2999",
      selected: false,
    },
    {
      name: "XRGI-25",
      id: "Nybrogade 2 1203",
      calls: "1000-2999",
      selected: false,
    },
  ]);

  const toggleSelection = (index: number) => {
    const updatedInstallations = [...installations];
    updatedInstallations[index].selected =
      !updatedInstallations[index].selected;
    setInstallations(updatedInstallations);
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-white"
      } py-2 px-4 rounded-lg shadow-sm transition-colors duration-300`}
    >
      <div className="flex items-center my-4">
        <Server className="text-blue-500 mr-2 text-xl" />
        <h1 className="text-2xl font-semibold">Unit List</h1>
      </div>
      <p
        className={`text-sm mb-8 ml-8 ${
          darkMode ? "text-gray-400" : "text-gray-700"
        }`}
      >
        To see status, production and consumption for the current year, please
        choose a system from the list below
      </p>
      {/* Desktop View */}
      <div className="w-full overflow-x-auto hidden md:block">
        <table className="w-full border-separate border-spacing-y-2 mb-3">
          <thead>
            <tr
              className={`rounded-l-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <th className="text-left px-4 py-2 font-medium">
                XRGI® system name
              </th>
              <th className="text-left px-4 py-2 font-medium">XRGI®-ID</th>
              <th className="text-left px-4 py-2 font-medium">
                Most recent calls
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {installations.map((installation, index) => (
              <tr
                key={index}
                className={`${darkMode ? "bg-gray-700" : "bg-white"} shadow-sm`}
              >
                <td className="px-4 py-4 rounded-l-lg">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={installation.selected}
                      onChange={() => toggleSelection(index)}
                      className={`mr-3 h-5 w-5 rounded cursor-pointer ${
                        darkMode
                          ? "bg-gray-600 border-gray-500"
                          : "border-gray-300"
                      }`}
                    />
                    {installation.name}
                  </div>
                </td>
                <td className="px-4 py-4">{installation.id}</td>
                <td className="px-4 py-4">{installation.calls}</td>
                <td className="px-4 py-3 text-right text-blue-500 cursor-pointer">
                  &gt;
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {installations.map((installation, index) => (
          <div
            key={index}
            className={`${
              darkMode ? "bg-gray-700" : "bg-white"
            } p-4 rounded-lg shadow-sm`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={installation.selected}
                  onChange={() => toggleSelection(index)}
                  className={`mr-3 h-5 w-5 rounded ${
                    darkMode ? "bg-gray-600 border-gray-500" : "border-gray-300"
                  }`}
                />
                <span className="font-medium">#{installation.name}</span>
              </div>
              <div className="w-8 h-6">
                <img src="/flag.png" alt="Country Flag" className="w-8 h-6" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <div>
                <span
                  className={`text-xs ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  XRGI® system name
                </span>
                <p className="mt-1">{installation.name}</p>
              </div>

              <div>
                <span
                  className={`text-xs ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  XRGI®-ID
                </span>
                <p className="mt-1">{installation.id}</p>
              </div>

              <div className="flex space-x-4">
                <div className="flex-1">
                  <span
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Most recent calls
                  </span>
                  <p className="mt-1">{installation.calls}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnitTest;
