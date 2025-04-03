import React from "react";
import { FaHandshake } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { HiUserCircle } from "react-icons/hi";

interface DealerItemProps {
  name: string;
  expanded?: boolean;
  isDealer?: boolean;
}

const DealerItem: React.FC<DealerItemProps> = ({ name, expanded = false, isDealer = false }) => {
  return (
    <div className="flex items-center px-4 py-3 hover:bg-blue-50 rounded-md">
      <div className="flex items-center w-8">
        {expanded ? <FiPlus className="text-blue-500 text-lg" /> : null}
      </div>
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
        {isDealer ? <FaHandshake className="text-base" /> : <HiUserCircle className="text-base" />}
      </div>
      <span className="text-gray-700 ml-3">{name}</span>
    </div>
  );
};

const Dealer: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center mb-4">
        <FaHandshake className="text-blue-500 mr-2 text-xl" />
        <h1 className="text-xl font-semibold text-gray-800">Dealer</h1>
      </div>
      <div className="border rounded-lg max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        <DealerItem name="EC power A/B" expanded isDealer />
        <DealerItem name="EC power - Carb test 01" />
        <DealerItem name="EC power - Carb test 02" />
        <DealerItem name="EC power - Carb test 03" expanded isDealer />
        <DealerItem name="EC power - Carb test 04" />
        <DealerItem name="EC power - Carb test 04" />
      </div>
    </div>
  );
};

export default Dealer;
