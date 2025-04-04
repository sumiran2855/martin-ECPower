"use client";
import React, { useState } from "react";
import { useTheme } from "@/app/dashboard/page"; 

interface InstallationData {
  number: string;
  name: string;
  address: string;
  postalCode: string;
  city: string;
  selected: boolean;
}

const InstallationTable: React.FC = () => {
  const { darkMode } = useTheme();
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
    updatedInstallations[index].selected = !updatedInstallations[index].selected;
    setInstallations(updatedInstallations);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} py-2 px-4 rounded-lg shadow-sm transition-colors duration-300`}>      
      {/* Desktop View */}
      <div className="w-full overflow-x-auto hidden md:block">
        <table className="w-full border-separate border-spacing-y-2">
          <thead>
            <tr className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
              <th className="text-left px-4 py-2 font-medium">Number</th>
              <th className="text-left px-4 py-2 font-medium">Installation Name</th>
              <th className="text-left px-4 py-2 font-medium">Address</th>
              <th className="text-left px-4 py-2 font-medium">Postal Code</th>
              <th className="text-left px-4 py-2 font-medium">City</th>
              <th className="text-left px-4 py-2 font-medium">Country</th>
            </tr>
          </thead>
          <tbody>
            {installations.map((installation, index) => (
              <tr key={index} className={`${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-sm`}>
                <td className="px-4 py-4 rounded-l-lg">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={installation.selected}
                      onChange={() => toggleSelection(index)}
                      className={`mr-3 h-5 w-5 rounded cursor-pointer ${darkMode ? 'bg-gray-600 border-gray-500' : 'border-gray-300'}`}
                    />
                    {installation.number}
                  </div>
                </td>
                <td className="px-4 py-4">{installation.name}</td>
                <td className="px-4 py-4">{installation.address}</td>
                <td className="px-4 py-4">{installation.postalCode}</td>
                <td className="px-4 py-4">{installation.city}</td>
                <td className="px-4 py-4 rounded-r-lg">
                <img src="/flag.png" alt="Country Flag" className="w-8 h-6" />
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
            className={`${darkMode ? 'bg-gray-700' : 'bg-white'} p-4 rounded-lg shadow-sm`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={installation.selected}
                  onChange={() => toggleSelection(index)}
                  className={`mr-3 h-5 w-5 rounded ${darkMode ? 'bg-gray-600 border-gray-500' : 'border-gray-300'}`}
                />
                <span className="font-medium">#{installation.number}</span>
              </div>
              <div className="w-8 h-6">
              <img src="/flag.png" alt="Country Flag" className="w-8 h-6" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-2">
              <div>
                <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Installation Name</span>
                <p className="mt-1">{installation.name}</p>
              </div>
              
              <div>
                <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Address</span>
                <p className="mt-1">{installation.address}</p>
              </div>
              
              <div className="flex space-x-4">
                <div className="flex-1">
                  <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Postal Code</span>
                  <p className="mt-1">{installation.postalCode}</p>
                </div>
                <div className="flex-1">
                  <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>City</span>
                  <p className="mt-1">{installation.city}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstallationTable;