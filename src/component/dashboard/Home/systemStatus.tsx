import React from "react";
import { FaDesktop } from "react-icons/fa";

interface SystemStatusCardProps {
  count: string;
  status: string;
  bgColor: string;
}

const SystemStatusCard: React.FC<SystemStatusCardProps> = ({
  count,
  status,
  bgColor,
}) => (
  <div
    className={`${bgColor} rounded-lg p-4 flex flex-col items-center justify-center h-24 md:h-28 shadow-sm w-full`}
  >
    <h2 className="text-xl md:text-2xl font-bold text-blue-900">{count}</h2>
    <p className="text-blue-900 text-sm md:text-base">{status}</p>
  </div>
);

const SystemStatus: React.FC = () => {
  const statusCards = [
    { count: "1202", status: "Ok", bgColor: "bg-blue-100" },
    { count: "6601", status: "Full stop", bgColor: "bg-yellow-100" },
    { count: "725", status: "Alarmstop", bgColor: "bg-red-100" },
    { count: "626", status: "Stopped calling", bgColor: "bg-blue-50" },
    { count: "555", status: "Standby", bgColor: "bg-green-100" },
    { count: "211", status: "Test system", bgColor: "bg-blue-50" },
    { count: "66", status: "Under installation", bgColor: "bg-purple-100" },
    { count: "75", status: "Waiting position", bgColor: "bg-green-50" },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center mb-4">
        <FaDesktop className="text-blue-500 mr-2 text-xl" />
        <h1 className="text-xl font-semibold text-gray-800">System Status</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {statusCards.map((card, index) => (
          <SystemStatusCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default SystemStatus;
