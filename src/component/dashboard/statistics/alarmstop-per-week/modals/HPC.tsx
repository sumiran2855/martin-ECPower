"use client";
import { X } from 'lucide-react';

interface HPCProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function HPC({ isOpen = true, onClose = () => {} }: HPCProps) {
  const hpcData = {
    id: "1979599994 XRGI-25 CARB test / OR35041",
    controllers: [
      {
        id: "HPC 1",
        fields: [
          { label: "Release time :", value: "0 hours" },
          { label: "Operation time:", value: "0 hours" },
          { label: "Fremløb temp:", value: "ABSENT" },
          { label: "Retur temp:", value: "ABSENT" },
          { label: "Release status:", value: "Released (runs if possible)" },
        ],
      },
      {
        id: "HPC 2",
        fields: [
          { label: "Release time :", value: "0 hours" },
          { label: "Operation time:", value: "0 hours" },
          { label: "Fremløb temp:", value: "ABSENT" },
          { label: "Retur temp:", value: "ABSENT" },
          { label: "Release status:", value: "Released (runs if possible)" },
        ],
      },
      {
        id: "HPC 3",
        fields: [
          { label: "Release time :", value: "0 hours" },
          { label: "Operation time:", value: "0 hours" },
          { label: "Fremløb temp:", value: "ABSENT" },
          { label: "Retur temp:", value: "ABSENT" },
          { label: "Release status:", value: "Released (runs if possible)" },
        ],
      },
      {
        id: "HPC 4",
        fields: [
          { label: "Release time :", value: "0 hours" },
          { label: "Operation time:", value: "0 hours" },
          { label: "Fremløb temp:", value: "ABSENT" },
          { label: "Retur temp:", value: "ABSENT" },
          { label: "Release status:", value: "Released (runs if possible)" },
        ],
      },
      {
        id: "HPC 5",
        fields: [
          { label: "Release time :", value: "0 hours" },
          { label: "Operation time:", value: "0 hours" },
          { label: "Fremløb temp:", value: "ABSENT" },
          { label: "Retur temp:", value: "ABSENT" },
          { label: "Release status:", value: "Released (runs if possible)" },
        ],
      },
      {
        id: "HPC 6",
        fields: [
          { label: "Release time :", value: "0 hours" },
          { label: "Operation time:", value: "0 hours" },
          { label: "Fremløb temp:", value: "ABSENT" },
          { label: "Retur temp:", value: "ABSENT" },
          { label: "Release status:", value: "Released (runs if possible)" },
        ],
      },
    ],
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-xs bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-gray-50 rounded-lg shadow-lg w-full max-w-6xl max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-bold text-blue-900">{hpcData.id}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {hpcData.controllers.map((controller) => (
            <div key={controller.id} className="bg-blue-50 rounded-lg shadow overflow-hidden mb-2">
              <div className="bg-blue-200 p-3 text-center ">
                <h3 className="font-semibold text-blue-900">{controller.id}</h3>
              </div>
              <div className="bg-white">
                {controller.fields.map((field, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 last:border-b-0">
                    <span className="text-gray-700">{field.label}</span>
                    <span className="font-medium">{field.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}