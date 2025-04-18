import { useState } from 'react';
import { X } from 'lucide-react';

type TabType = 'T-0s' | 'T-10s' | 'T-20s' | 'T-30s' | 'T-40s';
interface HeatDistributorProps {
    isOpen: boolean;
    onClose: () => void;
  }

export default function HeatDistributor({ isOpen, onClose }:HeatDistributorProps) {
  const [activeTab, setActiveTab] = useState<TabType>('T-0s');
  const tabs: TabType[] = ['T-0s', 'T-10s', 'T-20s', 'T-30s', 'T-40s'];
  if (!isOpen) return null;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 p-4">
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl">
            <div className='rounded shadow mx-auto p-1'>
            <div className="flex justify-between items-center p-4">
              <h2 className="text-lg font-medium text-gray-800">
                1979599994 - XRGI-25 CARB test / OR35041
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X/>
              </button>
            </div>

            <div className="flex p-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`flex-1 py-3 px-4 text-center focus:outline-none cursor-pointer rounded-lg mx-2 ${
                    activeTab === tab
                      ? 'bg-white border-2 border-yellow-400 font-medium'
                      : 'bg-gray-50 border border-gray-200'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            </div>

            <div className="p-4 rounded shadow">
            <img src="/image 126.png" alt="" />
            </div>

            <div className="px-4 grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
              <div className="border-1 border-gray-300 rounded p-3">
                <h3 className="text-sm font-medium text-gray-700">Separation layer temperature:</h3>
                <p className="text-lg text-center mt-2">69.03°</p>
              </div>
              <div className="border-1 border-gray-300 rounded p-3">
                <h3 className="text-sm font-medium text-gray-700">Time of log:</h3>
                <p className="text-lg text-center mt-2">02-11-24 kl. 15:13</p>
              </div>
              <div className="border-1 border-gray-300 rounded p-3">
                <h3 className="text-sm font-medium text-gray-700">Odd Storage:</h3>
                <p className="text-lg text-center mt-2">No</p>
              </div>
              <div className="border-1 border-gray-300 rounded p-3">
                <h3 className="text-sm font-medium text-gray-700">Storage sequence status:</h3>
                <p className="text-lg text-center mt-2">All found</p>
              </div>
            </div>

            <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="border-1 border-gray-300 rounded p-3">
                <div className="flex justify-between">
                  <h3 className="text-sm font-medium text-gray-700">Sensor 1:</h3>
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </div>
                <p className="text-lg text-center mt-2">18.97°C</p>
              </div>
              <div className="border-1 border-gray-300 rounded p-3">
                <div className="flex justify-between">
                  <h3 className="text-sm font-medium text-gray-700">Sensor 2:</h3>
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </div>
                <p className="text-lg text-center mt-2">19.78°C</p>
              </div>
              <div className="border-1 border-gray-300 rounded p-3">
                <div className="flex justify-between">
                  <h3 className="text-sm font-medium text-gray-700">Sensor 3:</h3>
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </div>
                <p className="text-lg text-center mt-2">19.75°C</p>
              </div>
              <div className="border-1 border-gray-300 rounded p-3">
                <div className="flex justify-between">
                  <h3 className="text-sm font-medium text-gray-700">Sensor 4:</h3>
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </div>
                <p className="text-lg text-center mt-2">19.76°C</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}