"use client";
import React from "react";
import { FaHandshake } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { HiUserCircle } from "react-icons/hi";
import { useTheme } from "@/app/dashboard/page"; 
interface DealerItemProps {
  name: string;
  expanded?: boolean;
  isDealer?: boolean;
}

const DealerItem: React.FC<DealerItemProps> = ({ name, expanded = false, isDealer = false }) => {
  const { darkMode } = useTheme();
  
  return (
    <div className={`flex items-center px-4 py-3 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-blue-50'} rounded-md transition-colors duration-200`}>
      <div className="flex items-center w-8">
        {expanded ? <FiPlus className={`${darkMode ? 'text-blue-400' : 'text-blue-500'} text-lg`} /> : null}
      </div>
      <div className={`w-8 h-8 flex items-center justify-center rounded-full ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-600'}`}>
        {isDealer ? <FaHandshake className="text-base" /> : <HiUserCircle className="text-base" />}
      </div>
      <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} ml-3`}>{name}</span>
    </div>
  );
};

export default DealerItem;