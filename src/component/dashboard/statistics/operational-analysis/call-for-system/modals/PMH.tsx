import React from "react";
import { X } from "lucide-react";

interface PMHUnitData {
  id: number;
  displayPCBSerial: string;
  releaseTime: string;
  operationTime: string;
  fremlobTemp: string;
  returTemp: string;
  releaseStatus: string;
}

interface PMHProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function PMH({ isOpen = true, onClose = () => {} }: PMHProps) {
  const pmhUnits: PMHUnitData[] = [
    {
      id: 1,
      displayPCBSerial: "00000",
      releaseTime: "0 hours",
      operationTime: "0 hours",
      fremlobTemp: "ABSENT",
      returTemp: "ABSENT",
      releaseStatus: "Released (runs if possible)",
    },
    {
      id: 2,
      displayPCBSerial: "00000",
      releaseTime: "0 hours",
      operationTime: "0 hours",
      fremlobTemp: "ABSENT",
      returTemp: "ABSENT",
      releaseStatus: "Released (runs if possible)",
    },
    {
      id: 3,
      displayPCBSerial: "00000",
      releaseTime: "0 hours",
      operationTime: "0 hours",
      fremlobTemp: "ABSENT",
      returTemp: "ABSENT",
      releaseStatus: "Released (runs if possible)",
    },
    {
      id: 4,
      displayPCBSerial: "00000",
      releaseTime: "0 hours",
      operationTime: "0 hours",
      fremlobTemp: "ABSENT",
      returTemp: "ABSENT",
      releaseStatus: "Released (runs if possible)",
    },
    {
      id: 5,
      displayPCBSerial: "00000",
      releaseTime: "0 hours",
      operationTime: "0 hours",
      fremlobTemp: "ABSENT",
      returTemp: "ABSENT",
      releaseStatus: "Released (runs if possible)",
    },
    {
      id: 6,
      displayPCBSerial: "00000",
      releaseTime: "0 hours",
      operationTime: "0 hours",
      fremlobTemp: "ABSENT",
      returTemp: "ABSENT",
      releaseStatus: "Released (runs if possible)",
    },
  ];

  if (!isOpen) return null;

  const renderPMHUnit = (unit: PMHUnitData) => {
    return (
      <div key={unit.id} className="bg-white rounded shadow mb-4">
        <div className="bg-blue-200 py-2 px-4 rounded-t">
          <h3 className="text-center font-medium">PMH {unit.id}</h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-y-2">
            <div className="text-sm font-medium">Display PCB, Serial no.</div>
            <div className="text-sm">{unit.displayPCBSerial}</div>

            <div className="text-sm font-medium">Release time:</div>
            <div className="text-sm">{unit.releaseTime}</div>

            <div className="text-sm font-medium">Operation time:</div>
            <div className="text-sm">{unit.operationTime}</div>

            <div className="text-sm font-medium">Fremløb temp:</div>
            <div className="text-sm">{unit.fremlobTemp}</div>

            <div className="text-sm font-medium">Retur temp:</div>
            <div className="text-sm">{unit.returTemp}</div>

            <div className="text-sm font-medium">Release status:</div>
            <div className="text-sm">{unit.releaseStatus}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 backdrop-blur-xs bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-gray-50 rounded-lg shadow-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-blue-900">
            1979599994 XRGI-25 CARB test / OR35041
          </h2>
          <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <div className="p-4">
          <div className="mb-4">
            <p className="font-medium text-blue-900">
              Storage temperature* : ABSENT
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pmhUnits.map((unit) => renderPMHUnit(unit))}
          </div>
        </div>
      </div>
    </div>
  );
}