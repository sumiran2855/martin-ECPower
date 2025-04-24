import { useTheme } from "@/app/dashboard/layout";
import { useState } from "react";

interface ItemUsage {
  partNumber: string;
  serialNo: string;
  description: string;
  number: string;
  unit?: string;
}

interface CreatingDateTabProps {
  onNext: () => void;
  onPrevious: () => void;
}

export default function ItemUsageTab({ onNext, onPrevious }: CreatingDateTabProps) {
  const [itemUsages, setItemUsages] = useState<ItemUsage[]>([]);
  const [currentItem, setCurrentItem] = useState<ItemUsage>({
    partNumber: "",
    serialNo: "",
    description: "",
    number: "",
  });

  const handleAddServiceLog = () => {
    if (
      currentItem.partNumber ||
      currentItem.serialNo ||
      currentItem.description ||
      currentItem.number
    ) {
      setItemUsages([...itemUsages, currentItem]);
      setCurrentItem({
        partNumber: "",
        serialNo: "",
        description: "",
        number: "",
      });
    }
  };

  const handleInputChange = (field: keyof ItemUsage, value: string) => {
    setCurrentItem({
      ...currentItem,
      [field]: value,
    });
  };

  const { darkMode } = useTheme();
  return (
    <div
      className={`${
        darkMode
          ? "bg-gray-800 border-1 border-white rounded-lg shadow-sm"
          : "bg-white rounded-lg shadow-sm"
      } p-6 mb-6`}
    >
      <p
        className={`${
          darkMode ? "text-gray-300" : "text-gray-800"
        } mb-6 font-semibold`}
      >
        Register the used items
      </p>
      <div className="space-y-4">
        <div>
          <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Part Number</label>
          <input
            type="text"
            placeholder="Part Number"
            className={`w-full rounded-lg border ${
              darkMode
                ? "bg-gray-800 border-gray-600"
                : "bg-white border-gray-300"
            } p-2`}
            value={currentItem.partNumber}
            onChange={(e) => handleInputChange("partNumber", e.target.value)}
          />
        </div>

        <div>
          <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            placeholder="Description"
            className={`w-full rounded-lg border ${
              darkMode
                ? "bg-gray-800 border-gray-600"
                : "bg-white border-gray-300"
            } p-2 min-h-24`}
            value={currentItem.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
          />
        </div>

        <div>
          <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Serial No.</label>
          <input
            type="text"
            placeholder="Serial No."
            className={`w-full rounded-lg border ${
              darkMode
                ? "bg-gray-800 border-gray-600"
                : "bg-white border-gray-300"
            } p-2`}
            value={currentItem.serialNo}
            onChange={(e) => handleInputChange("serialNo", e.target.value)}
          />
        </div>

        <div>
          <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Number</label>
          <input
            type="text"
            placeholder="Number"
            className={`w-full rounded-lg border ${
              darkMode
                ? "bg-gray-800 border-gray-600"
                : "bg-white border-gray-300"
            } p-2`}
            value={currentItem.number}
            onChange={(e) => handleInputChange("number", e.target.value)}
          />
        </div>

        <div>
          <button
            onClick={handleAddServiceLog}
            className={`${
                darkMode
                  ? "text-gray-200 hover:bg-gray-700"
                  : "text-blue-900 hover:bg-gray-100"
              } border border-gray-300 rounded-md px-6 py-2  font-medium  cursor-pointer`}
          >
            Add service log
          </button>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-lg border-gray-200 p-2 border rounded-t-lg shadow">
          Item usage
        </p>

        <div className="overflow-x-auto mt-1 border-gray-200 p-2 border border-b rounded-b-lg shadow">
          <table className="w-full min-w-full">
            <thead>
              <tr
                className={`${
                  darkMode ? "border-gray-700" : "border-gray-200"
                } border-b`}
              >
                <th className="pb-2 text-left font-normal">Part number</th>
                <th className="pb-2 text-left font-normal">Serial no.</th>
                <th className="pb-2 text-left font-normal">Description</th>
                <th className="pb-2 text-left font-normal">Number</th>
                <th className="pb-2 text-left font-normal">Unit</th>
              </tr>
            </thead>
            <tbody>
              {itemUsages.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } border-b`}
                >
                  <td className="py-4">{item.partNumber}</td>
                  <td className="py-4">{item.serialNo}</td>
                  <td className="py-4">{item.description}</td>
                  <td className="py-4">{item.number}</td>
                  <td className="py-4">{item.unit || "-"}</td>
                </tr>
              ))}
              {itemUsages.length === 0 && (
                <tr>
                  <td className="py-4 text-gray-500" colSpan={5}>
                    No items added yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={onPrevious}
          className={`${
            darkMode
              ? "text-gray-200 hover:bg-gray-700"
              : "text-blue-900 hover:bg-gray-100"
          } border border-gray-300 rounded-md px-6 py-2  font-medium  cursor-pointer`}
        >
          Previous Step
        </button>
        <button
          onClick={onNext}
          className={`${
            darkMode
              ? "text-gray-200 hover:bg-gray-700"
              : "text-blue-900 hover:bg-gray-100"
          } border border-gray-300 rounded-md px-6 py-2  font-medium  cursor-pointer`}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
