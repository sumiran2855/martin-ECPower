"use client";
import { useTheme } from "@/app/dashboard/layout";
import React from "react";

interface Info {
  name?: string;
  phone?: string;
  email?: string;
}

interface ContactInfoProps {
  systemInfo: Info;
  dealerInfo: Info;
  contactInfo: Info;
}

const ServiceContactTable: React.FC<ContactInfoProps> = ({
  systemInfo,
  dealerInfo,
  contactInfo,
}) => {
  const { darkMode } = useTheme();
  const rows = [
    {
      label: "",
      values: [systemInfo.name, dealerInfo.name, contactInfo.name],
    },
    {
      label: "",
      values: [systemInfo.phone, dealerInfo.phone, contactInfo.phone],
    },
    {
      label: "",
      values: [systemInfo.email, dealerInfo.email, contactInfo.email],
    },
  ];

  return (
    <div
      className={`overflow-x-auto p-4 ${darkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <table className="min-w-full text-sm text-left border-collapse">
        <thead>
          <tr>
            <th
              className={`p-3 font-semibold ${
                darkMode
                  ? "bg-blue-900/30 text-blue-100"
                  : "bg-blue-50 text-blue-900"
              }`}
            ></th>
            <th
              className={`p-3 font-semibold ${
                darkMode
                  ? "bg-blue-900/30 text-blue-100"
                  : "bg-blue-50 text-blue-900"
              }`}
            >
              Service Technician
            </th>
            <th
              className={`p-3 font-semibold ${
                darkMode
                  ? "bg-blue-900/30 text-blue-100"
                  : "bg-blue-50 text-blue-900"
              }`}
            >
              Book Keeping
            </th>
            <th
              className={`p-3 font-semibold ${
                darkMode
                  ? "bg-blue-900/30 text-blue-100"
                  : "bg-blue-50 text-blue-900"
              }`}
            >
              Full Service Contract
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              <td
                className={`p-3 font-medium ${
                  darkMode
                    ? "bg-gray-800 text-gray-300"
                    : "bg-white text-gray-700"
                }`}
              >
                {row.label || ""}
              </td>
              {row.values.map((val, i) => (
                <td
                  key={i}
                  className={`p-3 ${
                    darkMode ? "text-gray-200" : "text-gray-900"
                  }`}
                >
                  {val || ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceContactTable;
