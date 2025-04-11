'use client'
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '@/app/dashboard/layout';

interface Props {
  value: string | number;
  options: (string | number)[];
  onChange: (value: string | number) => void;
}

const Dropdown: React.FC<Props> = ({ value, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
const {darkMode} = useTheme()
  return (
    <div className="relative inline-block">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between ${darkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white text-black border-gray-300"} border rounded px-3 py-2 cursor-pointer min-w-[100px]`}
      >
        <span>{value}</span>
        <ChevronDown size={16} />
      </div>
      {isOpen && (
        <div className={`absolute mt-1 w-full ${darkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white text-black border-gray-300"} border rounded shadow-lg z-10`}>
          {options.map((option) => (
            <div 
              key={option}
              className={`px-3 py-2 cursor-pointer ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
