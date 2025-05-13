"use client";
import React, { useState } from "react";
import { FaHandshake } from "react-icons/fa6";
import { FiPlus, FiMinus } from "react-icons/fi";
import { HiUserCircle } from "react-icons/hi";
import { useTheme } from "@/app/dashboard/layout"; 

interface DealerItemChildProps {
  name: string;
  isDealer?: boolean;
}

interface DealerItemProps {
  name: string;
  isDealer?: boolean;
  children?: DealerItemChildProps[];
}

const DealerItem: React.FC<DealerItemProps> = ({ name, isDealer = false, children = [] }) => {
  const { darkMode } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = children && children.length > 0;

  const toggleExpand = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    }
  };
  
  return (
    <div className="w-full">
      <div 
        className={`flex items-center px-4 py-3 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-blue-50'} rounded-md transition-colors duration-200`}
        onClick={toggleExpand}
      >
        <div className="flex items-center w-8">
          {hasChildren && (
            isExpanded ? (
              <FiMinus className={`${darkMode ? 'text-blue-400' : 'text-blue-500'} text-lg`} />
            ) : (
              <FiPlus className={`${darkMode ? 'text-blue-400' : 'text-blue-500'} text-lg`} />
            )
          )}
        </div>
        <div className={`w-8 h-8 flex items-center justify-center rounded-full ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-600'}`}>
          {isDealer ? <FaHandshake className="text-base" /> : <HiUserCircle className="text-base" />}
        </div>
        <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} ml-3 truncate flex-1`}>
          {name} 
          <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            [ {children.length} ]
          </span>
        </span>
      </div>
      
      {isExpanded && hasChildren && (
        <div className={`pl-8 ${darkMode ? 'bg-gray-750' : 'bg-gray-50'}`}>
          {children.map((child, index) => (
            <div 
              key={index}
              className={`flex items-center px-4 py-3 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-blue-50'} rounded-md transition-colors duration-200`}
            >
              <div className={`w-8 h-8 flex items-center justify-center rounded-full ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-600'}`}>
                {child.isDealer ? <FaHandshake className="text-base" /> : <HiUserCircle className="text-base" />}
              </div>
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} ml-3 truncate flex-1`}>{child.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DealerItem;