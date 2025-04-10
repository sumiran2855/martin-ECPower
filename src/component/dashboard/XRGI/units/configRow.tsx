"use client";
import { useTheme } from "@/app/dashboard/layout";
import React from "react";

interface ConfigRowProps {
  label: string;
  value: string | number;
}

const ConfigRow: React.FC<ConfigRowProps> = ({ label, value }) => {
    const {darkMode} = useTheme();
  return (
    <div className="grid grid-cols-2 py-1 border-b border-gray-100">
      <span className={`${darkMode ? 'text-gray-400': ''} text-sm `}>{label}:</span>
      <span className="text-sm ">{value}</span>
    </div>
  );
};

export default ConfigRow;