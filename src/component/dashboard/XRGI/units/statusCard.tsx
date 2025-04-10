"use client";
import { useTheme } from "@/app/dashboard/layout";
import React from "react";

interface StatusCardProps {
  title?: string;
  values: { label: string; value: string }[];
}

const StatusCard: React.FC<StatusCardProps> = ({ title, values }) => {
    const { darkMode } = useTheme();
  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} mb-4 p-3 rounded-lg border border-gray-200 shadow-sm  "`}>
      {title && (
        <h3 className="text-sm font-semibold mb-3 text-blue-900">{title}</h3>
      )}
      <div className="grid grid-cols-1 gap-y-3 text-sm p-2">
        {values.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <span className={`${darkMode ? 'text-gray-200' : 'text-gray-600'}  font-bold`}>{item.label}</span>
            <span
              className={`text-right ${darkMode ? 'text-white' : 'bg-white'} ${
                item.label.toLowerCase().includes("status")
                  ? "text-amber-600 dark:text-amber-500 font-semibold"
                  : "text-gray-800 dark:text-gray-200"
              }`}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusCard;