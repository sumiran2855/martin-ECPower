import { useTheme } from "@/app/dashboard/layout";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const CreateAccount: React.FC = () => {
  const { darkMode } = useTheme();
  
  return (
    <div className={`${darkMode ? "bg-gray-800 text-white" : "bg-gray-50"} rounded-lg shadow-sm transition-colors w-full p-8`}>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[35rem] md:h-[35rem]">
            <div className="absolute inset-0 rounded-full border-4 border-gray-100 dark:border-gray-700"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full overflow-hidden w-5/6 h-5/6 flex items-center justify-center">
                    <img 
                    src="/create_background 1.png" 
                    alt="XRGi equipment" 
                    className="w-full h-full object-contain"
                    />
                    </div>
                </div>
            </div>
        </div>

        
        {/* Right side - Form */}
        <div className="w-full lg:w-1/2 flex flex-col md:px-8">
          <h1 className={`text-2xl md:text-3xl font-bold mb-2 ${darkMode ? "text-white" : "text-gray-700"} text-center lg:text-left`}>
            Create your Account
          </h1>
          
          <h2 className={`text-lg md:text-xl font-medium mb-2 ${darkMode ? "text-blue-400" : "text-blue-600"} text-center lg:text-left`}>
            Monitor all your XRGi®-units
          </h2>
          
          <p className={`text-sm md:text-base mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"} text-center lg:text-left`}>
            Download statistics, monitor production and usage,<br className="hidden sm:block"/> 
            and receive text/email on error messages.
          </p>
          
          <form className="w-full space-y-4">
            <div>
              <label className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                Choose a username
              </label>
              <input 
                type="text" 
                className={`w-full p-3 mt-1 border rounded-md ${
                  darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"
                }`} 
              />
            </div>
            
            <div>
              <label className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                The users current email address
              </label>
              <input 
                type="email" 
                className={`w-full p-3 mt-1 border rounded-md ${
                  darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"
                }`} 
              />
            </div>
            
            <div>
              <label className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                User level
              </label>
              <div className="relative mt-1">
                <select 
                  className={`w-full p-3 border rounded-md appearance-none cursor-pointer ${
                    darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"
                  }`}
                >
                  <option>Standard User</option>
                  <option>Administrator</option>
                  <option>service Technician</option>
                  <option>Customer</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            
            <div>
              <label className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                Language
              </label>
              <div className="relative mt-1">
                <select 
                  className={`w-full p-3 border rounded-md appearance-none cursor-pointer ${
                    darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"
                  }`}
                >
                  <option>English</option>
                  <option>German</option>
                  <option>Danish</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            
            <div>
              <label className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                Company
              </label>
              <div className="relative mt-1">
                <select 
                  className={`w-full p-3 border rounded-md appearance-none cursor-pointer ${
                    darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"
                  }`}
                >
                  <option>80332 CARB-Test</option>
                  <option>other</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <button 
                type="submit"
                className={`w-full p-3 text-white font-medium rounded-md ${
                  darkMode ? "bg-blue-700 hover:bg-blue-800" : "bg-blue-800 hover:bg-blue-900"
                } transition-colors`}
              >
                Create new user
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;