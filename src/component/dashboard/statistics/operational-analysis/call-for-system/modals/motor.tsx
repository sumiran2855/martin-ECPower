"use client";
import { useState } from 'react';
import { X } from 'lucide-react';

interface MotorModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Motor({ isOpen = true, onClose = () => {} }: MotorModalProps) {
  const [activeTab, setActiveTab] = useState('T-0s');

  const motorData = {
    id: "1979599994 XRGI-25 CARB test / OR35041",
    tabs: ["T-0s", "T-1s", "T-2s", "T-3s", "T-4s"],
    sections: [
      {
        id: "A",
        fields: [
          { label: "Requested power:", value: "0W" },
          { label: "LGVGP:", value: "24100W" },
          { label: "Aim power:", value: "0W" },
          { label: "Produced power:", value: "1W" },
        ],
      },
      {
        id: "E",
        fields: [
          { label: "Misfire1 count:", value: "78" },
          { label: "Misfire2 count:", value: "78" },
          { label: "Misfire log 1:", value: "00 24 0F" },
          { label: "Misfire log 2:", value: "00 24 0F" },
        ],
      },
      {
        id: "I",
        fields: [
          { label: "L1-L2 phase voltage:", value: "0V" },
          { label: "L2-L3 phase voltage:", value: "0V" },
          { label: "L3-L1 phase voltage:", value: "0V" },
          { label: "Frequency:", value: "0Hz" },
        ],
      },
      {
        id: "B",
        fields: [
          { label: "Power step position:", value: "0" },
          { label: "Actual map pressure:", value: "1001mBar" },
          { label: "Map offset:", value: "55mBar" },
        ],
      },
      {
        id: "F",
        fields: [
          { label: "Water temperature:", value: "19.65°C" },
          { label: "PSU Voltage:", value: "12.0V" },
          { label: "RPM:", value: "563rpm" },
        ],
      },
      {
        id: "J",
        fields: [
          { label: "Emission Auto adjust:", value: "OFF" },
          { label: "NB2 Signal:", value: "0000mV" },
          { label: "NB2 Setpoint:", value: "0549mV" },
        ],
      },
      {
        id: "C",
        fields: [
          { label: "Actual venturi position:", value: "0" },
          { label: "Actual map pressure:", value: "1001mBar" },
          { label: "Map offset:", value: "55mBar" },
        ],
      },
      {
        id: "F2",
        displayId: "F",
        fields: [
          { label: "Water temperature:", value: "19.65°C" },
          { label: "PSU Voltage:", value: "12.0V" },
          { label: "RPM:", value: "563rpm" },
        ],
      },
      {
        id: "J2",
        displayId: "J",
        fields: [
          { label: "Emission Auto adjust:", value: "OFF" },
          { label: "NB2 Signal:", value: "0000mV" },
          { label: "NB2 Setpoint:", value: "0549mV" },
        ],
      },
    ],
    timeLog: "02-11-24 kl. 15:13",
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-xs bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-gray-50 rounded-lg shadow-lg w-full max-w-6xl max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-bold text-blue-900">{motorData.id}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex overflow-x-auto px-4">
            {motorData.tabs.map((tab) => (
              <button
                key={tab}
                className={`flex-1 py-3 px-4 text-center focus:outline-none cursor-pointer rounded-lg mx-2 ${
                  activeTab === tab
                    ? "bg-white border-2 border-yellow-400 font-medium"
                    : "bg-gray-50 border border-gray-200"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
          {motorData.sections.map((section) => (
            <div key={section.id} className="bg-blue-50 rounded-lg overflow-hidden shadow">
              <div className="bg-blue-200 p-3">
                <h3 className="font-semibold">{section.displayId || section.id}:</h3>
              </div>
              <div className="bg-white">
                {section.fields.map((field, idx) => (
                  <div key={idx} className="flex justify-between items-center px-3 py-2">
                    <span className="text-gray-700">{field.label}</span>
                    <div className="flex items-center">
                      <span className="font-medium">{field.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="py-2 text-center text-gray-700 rounded shadow bg-gray-100 mx-6 mb-4">
          <p>Time of log:</p>
          <p className="font-medium">{motorData.timeLog}</p>
        </div>
      </div>
    </div>
  );
}