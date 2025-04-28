import { useState } from 'react';
import { useTheme } from "@/app/dashboard/layout";
import { ChevronDown, FilePenLine, Lock } from 'lucide-react';

export default function Properties() {
  const { darkMode } = useTheme();
  const [showXrgiStatus, setShowXrgiStatus] = useState(true);
  const [showXrgiOverview, setShowXrgiOverview] = useState(true);
  const [showDistributors, setShowDistributors] = useState(true);
  const [showFullServiceSystems, setShowFullServiceSystems] = useState(false);
  const [showListOfCalls, setShowListOfCalls] = useState(false);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-white"
      } py-2 md:px-8 px-4 rounded-lg shadow-sm transition-colors duration-300`}
    >
      <div className="flex items-center mb-2 mt-4">
        <FilePenLine className="text-blue-500 mr-2 text-xl" />
        <h1 className="text-2xl font-medium">Edit User</h1>
      </div>
        <p
        className={`text-medium mb-4 ml-8 ${
          darkMode ? "text-gray-400" : "text-gray-700"
        }`}
      >
       Update user profile
      </p>
      <div className={`p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow mb-6`}>
      <form>
        <section className="mb-8">
          <h2 className={`font-medium text-sm uppercase tracking-wider mb-4 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>User Info Settings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className={`block text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>COMPANY</label>
              <div className="relative">
                <input 
                  type="text" 
                  className={`w-full p-2 border border-gray-300 rounded-md ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}
                  value="CARB TEST" 
                  readOnly
                />
                <span className="absolute right-2 top-2 text-gray-500">
                  <Lock className='w-5 h-5 text-gray-500'/>
                </span>
              </div>
            </div>
            <div></div>

            <div className="space-y-1">
              <label className={`block text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>NAME *</label>
              <input 
                type="text" 
                className={`w-full p-2 border border-gray-300 rounded-md ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}
                defaultValue="External test user"
              />
            </div>
            <div className="space-y-1">
              <label className={`block text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>CELL PHONE NO. *</label>
              <input 
                type="text" 
                className={`w-full p-2 border border-gray-300 rounded-md ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}
                defaultValue="004512345678"
              />
            </div>

            <div className="space-y-1">
              <label className={`block text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>LAST NAME *</label>
              <input 
                type="text" 
                className={`w-full p-2 border border-gray-300 rounded-md ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}
                defaultValue="Test"
              />
            </div>
            <div className="space-y-1">
              <label className={`block text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>E-MAIL ADDRESS *</label>
              <input 
                type="email" 
                className={`w-full p-2 border border-gray-300 rounded-md ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}
                defaultValue="test@test.org"
              />
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className={`font-medium text-sm uppercase tracking-wider mb-4 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Application Settings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className={`block text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>TIME FORMAT</label>
              <div className="relative">
                <select className={`w-full p-2 border border-gray-300 rounded-md appearance-none ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}>
                  <option>24</option>
                  <option>12</option>
                </select>
                <span className="absolute right-2 top-2 text-gray-500 pointer-events-none">
                  <ChevronDown className='w-5 h-5 text-gray-500'/>
                </span>
              </div>
            </div>
            <div className="space-y-1">
              <label className={`block text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>DISPLAYED XRGI° SYSTEMS ON THE HOME *</label>
              <input 
                type="number" 
                className={`w-full p-2 border border-gray-300 rounded-md ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}
                defaultValue="25"
              />
            </div>

            <div className="space-y-1">
              <label className={`block text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>DATE SEPERATOR</label>
              <div className="relative">
                <select className={`w-full p-2 border border-gray-300 rounded-md appearance-none ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}>
                  <option>-</option>
                  <option>/</option>
                  <option>.</option>
                </select>
                <span className="absolute right-2 top-2 text-gray-500 pointer-events-none">
                   <ChevronDown className='w-5 h-5 text-gray-500'/>
                </span>
              </div>
            </div>
            <div className="space-y-1">
              <label className={`block text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>TIME ZONE</label>
              <div className="relative">
                <select className={`w-full p-2 border border-gray-300 rounded-md appearance-none ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}>
                  <option>Europe/Copenhagen</option>
                  <option>UTC</option>
                  <option>America/New_York</option>
                </select>
                <span className="absolute right-2 top-2 text-gray-500 pointer-events-none">
                   <ChevronDown className='w-5 h-5 text-gray-500'/>
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <label className={`block text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>THE DATE MUST CONSIST OF DD-MM-YY HH:MM</label>
              <div className="relative">
                <select className={`w-full p-2 border border-gray-300 rounded-md appearance-none ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}>
                  <option>DD-MM-YY HH:MM</option>
                  <option>MM-DD-YY HH:MM</option>
                  <option>YY-MM-DD HH:MM</option>
                </select>
                <span className="absolute right-2 top-2 text-gray-500 pointer-events-none">
                  <ChevronDown className='w-5 h-5 text-gray-500'/>
                </span>
              </div>
            </div>
            <div className="space-y-1">
              <label className={`block text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>TEMPERATURE FORMAT</label>
              <div className="relative">
                <select className={`w-full p-2 border border-gray-300 rounded-md appearance-none ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}>
                  <option>Celcius</option>
                  <option>Fahrenheit</option>
                </select>
                <span className="absolute right-2 top-2 text-gray-500 pointer-events-none">
                  <ChevronDown className='w-5 h-5 text-gray-500'/>
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <label className={`block text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>FLOW RATE</label>
              <input 
                type="text" 
                className={`w-full p-2 border border-gray-300 rounded-md ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}
                defaultValue="Liters/Sec (l/s)"
              />
            </div>
            <div className="space-y-1">
              <label className={`block text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>AIR PRESSURE</label>
              <div className="relative">
                <select className={`w-full p-2 border border-gray-300 rounded-md appearance-none ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}>
                  <option>Bar</option>
                  <option>PSI</option>
                </select>
                <span className="absolute right-2 top-2 text-gray-500 pointer-events-none">
                  <ChevronDown className='w-5 h-5 text-gray-500'/>
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <label className={`block text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>THERMAL HEAT</label>
              <input 
                type="text" 
                className={`w-full p-2 border border-gray-300 rounded-md ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}
                defaultValue="kW"
              />
            </div>
            <div className="space-y-1">
              <label className={`block text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>THERMAL CONDUCTANCE</label>
              <div className="relative">
                <select className={`w-full p-2 border border-gray-300 rounded-md appearance-none ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}>
                  <option>kW/K</option>
                  <option>W/K</option>
                </select>
                <span className="absolute right-2 top-2 text-gray-500 pointer-events-none">
                  <ChevronDown className='w-5 h-5 text-gray-500'/>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className={`font-medium text-sm uppercase tracking-wider mb-4 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Home Page</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className={`block text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>NUMBER OF LATEST CALLS *</label>
              <input 
                type="number" 
                className={`w-full p-2 border border-gray-300 rounded-md ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}
                defaultValue="10"
              />
            </div>
            <div className="space-y-1">
              <label className={`block text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>NUMBER OF EMERGENCY CALLS *</label>
              <input 
                type="number" 
                className={`w-full p-2 border border-gray-300 rounded-md ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}
                defaultValue="5"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="flex items-center justify-between">
              <label className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>SHOW XRGI° SYSTEM STATUS *</label>
              <div className={`w-12 h-6 rounded-full flex items-center transition duration-300 ease-in-out ${showXrgiStatus ? 'bg-blue-600' : darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}
                onClick={() => setShowXrgiStatus(!showXrgiStatus)}>
                <span className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-300 ease-in-out ${showXrgiStatus ? 'translate-x-7' : 'translate-x-1'}`}></span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>XRGI° OVERVIEW</label>
              <div className={`w-12 h-6 rounded-full flex items-center transition duration-300 ease-in-out ${showXrgiOverview ? 'bg-blue-600' : darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}
                onClick={() => setShowXrgiOverview(!showXrgiOverview)}>
                <span className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-300 ease-in-out ${showXrgiOverview ? 'translate-x-7' : 'translate-x-1'}`}></span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <label className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>SHOW DISTRIBUTORS *</label>
              <div className={`w-12 h-6 rounded-full flex items-center transition duration-300 ease-in-out ${showDistributors ? 'bg-blue-600' : darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}
                onClick={() => setShowDistributors(!showDistributors)}>
                <span className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-300 ease-in-out ${showDistributors ? 'translate-x-7' : 'translate-x-1'}`}></span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>FULL SERVICE SYSTEMS</label>
              <div className={`w-12 h-6 rounded-full flex items-center transition duration-300 ease-in-out ${showFullServiceSystems ? 'bg-blue-600' : darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}
                onClick={() => setShowFullServiceSystems(!showFullServiceSystems)}>
                <span className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-300 ease-in-out ${showFullServiceSystems ? 'translate-x-7' : 'translate-x-1'}`}></span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <label className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>LIST OF CALLS *</label>
              <div className={`w-12 h-6 rounded-full flex items-center transition duration-300 ease-in-out ${showListOfCalls ? 'bg-blue-600' : darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}
                onClick={() => setShowListOfCalls(!showListOfCalls)}>
                <span className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-300 ease-in-out ${showListOfCalls ? 'translate-x-7' : 'translate-x-1'}`}></span>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-start gap-4 mt-6">
          <button type="button" className={`px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-300 cursor-pointer ${darkMode ? "text-gray-300 border-gray-600 hover:bg-gray-700" : "text-gray-700"}`}>
            Cancel
          </button>
          <button type="submit" className="px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors duration-300 cursor-pointer">
            Save
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}