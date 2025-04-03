"use client";
import React, { useState } from "react";

interface InstallationData {
  number: string;
  name: string;
  address: string;
  postalCode: string;
  city: string;
  selected: boolean;
}

const ResponsiveInstallationTable: React.FC = () => {
  const [installations, setInstallations] = useState<InstallationData[]>([
    {
      number: "78022",
      name: "XRGI-25",
      address: "Nybrogade 2 1203",
      postalCode: "1000-2999",
      city: "Copenhagen",
      selected: false,
    },
    {
      number: "78022",
      name: "XRGI-25",
      address: "Nybrogade 2 1203",
      postalCode: "1000-2999",
      city: "Gentofte",
      selected: false,
    },
    {
      number: "78022",
      name: "XRGI-25",
      address: "Nybrogade 2 1203",
      postalCode: "1000-2999",
      city: "Herning",
      selected: false,
    },
    {
      number: "78022",
      name: "XRGI-25",
      address: "Nybrogade 2 1203",
      postalCode: "1000-2999",
      city: "Copenhagen",
      selected: false,
    },
    {
      number: "78022",
      name: "XRGI-25",
      address: "Nybrogade 2 1203",
      postalCode: "1000-2999",
      city: "Horsens",
      selected: false,
    },
    {
      number: "78022",
      name: "XRGI-25",
      address: "Nybrogade 2 1203",
      postalCode: "1000-2999",
      city: "Skive",
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
    <div className="w-full">
      <div className="hidden md:block">
        <table className="w-full border-separate border-spacing-y-2">
          <thead>
            <tr className="text-gray-700">
              <th className="text-left px-4 py-2 font-medium">Number</th>
              <th className="text-left px-4 py-2 font-medium">
                Installation Name
              </th>
              <th className="text-left px-4 py-2 font-medium">Address</th>
              <th className="text-left px-4 py-2 font-medium">Postal Code</th>
              <th className="text-left px-4 py-2 font-medium">City</th>
              <th className="text-left px-4 py-2 font-medium">Country</th>
            </tr>
          </thead>
          <tbody>
            {installations.map((installation, index) => (
              <tr key={index} className="bg-white shadow-sm">
                <td className="px-4 py-4 rounded-l-lg">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={installation.selected}
                      onChange={() => toggleSelection(index)}
                      className="mr-3 h-5 w-5 rounded border-gray-300"
                    />
                    {installation.number}
                  </div>
                </td>
                <td className="px-4 py-4">{installation.name}</td>
                <td className="px-4 py-4">{installation.address}</td>
                <td className="px-4 py-4">{installation.postalCode}</td>
                <td className="px-4 py-4">{installation.city}</td>
                <td className="px-4 py-4 rounded-r-lg">
                  <div className="flex justify-center">
                    <div className="w-8 h-6 relative">
                      <svg viewBox="0 0 32 24" className="w-8 h-6">
                        <rect width="32" height="24" fill="#BF0A30" />
                        <rect y="2" width="32" height="2" fill="white" />
                        <rect y="6" width="32" height="2" fill="white" />
                        <rect y="10" width="32" height="2" fill="white" />
                        <rect y="14" width="32" height="2" fill="white" />
                        <rect y="18" width="32" height="2" fill="white" />
                        <rect y="22" width="32" height="2" fill="white" />
                        <rect width="16" height="13" fill="#002868" />
                        <g fill="white">
                          <circle cx="4" cy="3" r="1" />
                          <circle cx="8" cy="3" r="1" />
                          <circle cx="12" cy="3" r="1" />
                          <circle cx="6" cy="5" r="1" />
                          <circle cx="10" cy="5" r="1" />
                          <circle cx="4" cy="7" r="1" />
                          <circle cx="8" cy="7" r="1" />
                          <circle cx="12" cy="7" r="1" />
                          <circle cx="6" cy="9" r="1" />
                          <circle cx="10" cy="9" r="1" />
                          <circle cx="4" cy="11" r="1" />
                          <circle cx="8" cy="11" r="1" />
                          <circle cx="12" cy="11" r="1" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {installations.map((installation, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={installation.selected}
                  onChange={() => toggleSelection(index)}
                  className="mr-3 h-5 w-5 rounded border-gray-300"
                />
                <span className="font-medium">{installation.number}</span>
              </div>
              <div className="w-8 h-6">
                <svg viewBox="0 0 32 24" className="w-8 h-6">
                  <rect width="32" height="24" fill="#BF0A30" />
                  <rect y="2" width="32" height="2" fill="white" />
                  <rect y="6" width="32" height="2" fill="white" />
                  <rect y="10" width="32" height="2" fill="white" />
                  <rect y="14" width="32" height="2" fill="white" />
                  <rect y="18" width="32" height="2" fill="white" />
                  <rect y="22" width="32" height="2" fill="white" />
                  <rect width="16" height="13" fill="#002868" />
                  <g fill="white">
                    {/* Simplified stars pattern */}
                    <circle cx="4" cy="3" r="1" />
                    <circle cx="8" cy="3" r="1" />
                    <circle cx="12" cy="3" r="1" />
                    <circle cx="6" cy="5" r="1" />
                    <circle cx="10" cy="5" r="1" />
                    <circle cx="4" cy="7" r="1" />
                    <circle cx="8" cy="7" r="1" />
                    <circle cx="12" cy="7" r="1" />
                    <circle cx="6" cy="9" r="1" />
                    <circle cx="10" cy="9" r="1" />
                    <circle cx="4" cy="11" r="1" />
                    <circle cx="8" cy="11" r="1" />
                    <circle cx="12" cy="11" r="1" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <div className="text-gray-500">Installation Name:</div>
              <div>{installation.name}</div>
              <div className="text-gray-500">Address:</div>
              <div>{installation.address}</div>
              <div className="text-gray-500">Postal Code:</div>
              <div>{installation.postalCode}</div>
              <div className="text-gray-500">City:</div>
              <div>{installation.city}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveInstallationTable;
