"use client";
import React, { useState } from "react";
import { useTheme } from "@/app/dashboard/layout";
import { Gauge, FilePlus2, Edit, Trash2 } from "lucide-react";
import CreateTest from "./forms/create-test";

interface InstallationData {
  name: string;
  id: string;
  selected: boolean;
}

const RegistrationOfTests: React.FC = () => {
  const { darkMode } = useTheme();
  const [creating, setCreating] = useState(false);
  const [installations, setInstallations] = useState<InstallationData[]>([
    {
      name: "XRGI-25 CARB test / OR35041",
      id: "1979599994",
      selected: false,
    },
    {
      name: "XRGI-25 CARB test / OR35041",
      id: "1979599994",
      selected: false,
    },
    {
      name: "XRGI-25 CARB test / OR35041",
      id: "1979599994",
      selected: false,
    },
    {
      name: "XRGI-25 CARB test / OR35041",
      id: "1979599994",
      selected: false,
    },
    {
      name: "XRGI-25 CARB test / OR35041",
      id: "1979599994",
      selected: false,
    },
    {
      name: "XRGI-25 CARB test / OR35041",
      id: "1979599994",
      selected: false,
    },
    {
      name: "XRGI-25 CARB test / OR35041",
      id: "1979599994",
      selected: false,
    },
    {
      name: "XRGI-25 CARB test / OR35041",
      id: "1979599994",
      selected: false,
    },
    {
      name: "XRGI-25 CARB test / OR35041",
      id: "1979599994",
      selected: false,
    },
    {
      name: "XRGI-25 CARB test / OR35041",
      id: "1979599994",
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
      {!creating ? (
        <>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center my-4">
            <div className="flex items-center">
              <Gauge className="text-blue-500 mr-2 text-xl" />
              <h1 className="text-2xl font-medium">List of tests</h1>
            </div>
            <div className="flex items-center mt-4 md:mt-0 space-x-2 mr-4">
              <button
                onClick={() => setCreating(true)}
                className="flex items-center text-sm text-blue-500 hover:text-blue-700 transition-colors cursor-pointer"
              >
                <FilePlus2 className="w-5 h-5 mr-1" />
                <span>Create test</span>
              </button>
              <button className="flex items-center text-sm text-blue-500 hover:text-blue-700 transition-colors ml-4 cursor-pointer">
                <Edit className="w-5 h-5 mr-1" />
                <span>Correct test</span>
              </button>
              <button className="flex items-center text-sm text-blue-500 hover:text-blue-700 transition-colors ml-4 cursor-pointer">
                <Trash2 className="w-5 h-5 mr-1" />
                <span>Delete test</span>
              </button>
            </div>
          </div>
          <p
            className={`text-sm mb-8 ml-8 ${
              darkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Is the system equipped with any non-standard components, this should
            be registered here
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
                  <th className="text-left px-4 py-2 font-medium">XRGI®-ID</th>
                  <th className="text-left px-4 py-2 font-medium">
                    XRGI® system name
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {installations.map((installation, index) => (
                  <tr
                    key={index}
                    className={`${
                      darkMode ? "bg-gray-700" : "bg-white"
                    } shadow-sm`}
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
                        {installation.id}
                      </div>
                    </td>
                    <td className="px-4 py-4">{installation.name}</td>
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
                        darkMode
                          ? "bg-gray-600 border-gray-500"
                          : "border-gray-300"
                      }`}
                    />
                    <span className="font-medium">#{installation.id}</span>
                  </div>
                  <div className="text-blue-500 cursor-pointer">&gt;</div>
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
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <CreateTest onCancel={() => setCreating(false)} />
      )}
    </div>
  );
};

export default RegistrationOfTests;
