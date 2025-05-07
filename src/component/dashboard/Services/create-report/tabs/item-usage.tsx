import { useTheme } from "@/app/dashboard/layout";
import { partNumberDatabase } from "@/component/Data/type";
import { X } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface ItemUsage {
  partNumber: string;
  serialNumber: string;
  description: string;
  quantity: string;
  unit?: string;
}

interface ItemUsageTabProps {
  data: any;
  setData: (data: any) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function ItemUsageTab({
  data,
  setData,
  onNext,
  onPrevious,
}: ItemUsageTabProps) {
  const { darkMode } = useTheme();
  const [itemUsages, setItemUsages] = useState<ItemUsage[]>(data.itemUsages || []);
  const [currentItem, setCurrentItem] = useState<ItemUsage>({
    partNumber: "",
    serialNumber: "",
    description: "",
    quantity: "",
    unit: ""
  });
  const [suggestions, setSuggestions] = useState<Array<{ partNumber: string; description: string }>>([]);
  const [isDescriptionLocked, setIsDescriptionLocked] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const partNumberInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (data.itemUsages) {
      setItemUsages(data.itemUsages);
    }
  }, []);

  useEffect(() => {
    setData({
      ...data,
      itemUsages: itemUsages,
    });
  }, [itemUsages]);

  useEffect(() => {
    if (currentItem.quantity && !currentItem.unit) {
      setCurrentItem(prev => ({ ...prev, unit: "pcs" }));
    }
  }, [currentItem.quantity]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node) &&
          partNumberInputRef.current && !partNumberInputRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (field: keyof ItemUsage, value: string) => {
    if (field === "description" && isDescriptionLocked) return;
    setCurrentItem((prev) => ({ ...prev, [field]: value }));

    if (field === "partNumber") {
      if (value.trim() !== "") {
        const filtered = partNumberDatabase.filter(item => 
          item.partNumber.toLowerCase().includes(value.toLowerCase()) ||
          item.description.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filtered);
        setShowSuggestions(true);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
      setIsDescriptionLocked(false);
    }
  };

  const handleSelectSuggestion = (partNumber: string, description: string) => {
    setCurrentItem(prev => ({
      ...prev,
      partNumber,
      description
    }));
    setIsDescriptionLocked(true);
    setShowSuggestions(false);
  };

  const handleAddServiceLog = () => {
    const { partNumber, serialNumber, description, quantity, unit } = currentItem;
    if (description.trim()) {
      setItemUsages([...itemUsages, currentItem]);
      setCurrentItem({
        partNumber: "",
        serialNumber: "",
        description: "",
        quantity: "",
        unit: ""
      });
    }
  };

  const handleRemoveServiceLog = (index: number) => {
    const updatedItemUsages = [...itemUsages];
    updatedItemUsages.splice(index, 1);
    setItemUsages(updatedItemUsages);
    
    setData({
      ...data,
      itemUsages: updatedItemUsages,
    });
  };

  const handleNext = () => {
    setData({
      ...data,
      itemUsages: itemUsages,
    });
    onNext();
  };

  return (
    <div
      className={`${
        darkMode
          ? "bg-gray-800 border-1 border-white rounded-lg shadow-sm"
          : "bg-white rounded-lg shadow-sm"
      } p-4 md:p-6 mb-6`}
    >
      <p
        className={`${
          darkMode ? "text-gray-300" : "text-gray-800"
        } mb-4 md:mb-6 font-semibold`}
      >
        Register the used items
      </p>
      <div className="space-y-4">
        <div className="relative">
          <label className="block text-xs text-gray-500 dark:text-gray-400 m-1">Part Number</label>
          <input
            ref={partNumberInputRef}
            type="text"
            placeholder="Part Number"
            className={`w-full rounded-lg border ${
              darkMode
                ? "bg-gray-800 border-gray-600"
                : "bg-white border-gray-300"
            } p-2`}
            value={currentItem.partNumber}
            onChange={(e) => handleInputChange("partNumber", e.target.value)}
            onFocus={() => {
              if (currentItem.partNumber && suggestions.length > 0) {
                setShowSuggestions(true);
              }
            }}
          />
          
          {showSuggestions && suggestions.length > 0 && (
            <div 
              ref={suggestionsRef}
              className={`absolute z-10 w-full mt-1 max-h-60 overflow-auto rounded-md shadow-lg ${
                darkMode ? "bg-gray-700" : "bg-white"
              } border ${darkMode ? "border-gray-600" : "border-gray-300"}`}
            >
              <ul>
                {suggestions.map((item, index) => (
                  <li 
                    key={index}
                    className={`px-4 py-2 cursor-pointer ${
                      darkMode 
                        ? "hover:bg-gray-600" 
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => handleSelectSuggestion(item.partNumber, item.description)}
                  >
                    <div className={`font-medium ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                      {item.partNumber}
                    </div>
                    <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                      {item.description}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          <label className="block text-xs text-gray-500 dark:text-gray-400 m-1">
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
            readOnly={isDescriptionLocked}
          />
        </div>

        <div>
          <label className="block text-xs text-gray-500 dark:text-gray-400 m-1">Serial No.</label>
          <input
            type="text"
            placeholder="Serial No."
            className={`w-full rounded-lg border ${
              darkMode
                ? "bg-gray-800 border-gray-600"
                : "bg-white border-gray-300"
            } p-2`}
            value={currentItem.serialNumber}
            onChange={(e) => handleInputChange("serialNumber", e.target.value)}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2">
            <label className="block text-xs text-gray-500 dark:text-gray-400 m-1">Number</label>
            <input
              type="text"
              placeholder="Number"
              className={`w-full rounded-lg border ${
                darkMode
                  ? "bg-gray-800 border-gray-600"
                  : "bg-white border-gray-300"
              } p-2`}
              value={currentItem.quantity}
              onChange={(e) => handleInputChange("quantity", e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="block text-xs text-gray-500 dark:text-gray-400 m-1">Unit</label>
            <input
              type="text"
              placeholder="Unit"
              className={`w-full rounded-lg border ${
                darkMode
                  ? "bg-gray-800 border-gray-600"
                  : "bg-white border-gray-300"
              } p-2`}
              value={currentItem.unit || ""}
              onChange={(e) => handleInputChange("unit", e.target.value)}
              readOnly={!!currentItem.quantity} 
            />
          </div>
        </div>
        
        <div>
          <button
            onClick={handleAddServiceLog}
            className={`${
                darkMode
                  ? "text-gray-200 hover:bg-gray-700"
                  : "text-blue-900 hover:bg-gray-100"
              } border border-gray-300 rounded-md px-4 md:px-6 py-2 font-medium cursor-pointer`}
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
                <th className="pb-2 text-left font-normal">Action</th>
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
                  <td className="py-2 md:py-4">{item.partNumber}</td>
                  <td className="py-2 md:py-4">{item.serialNumber}</td>
                  <td className="py-2 md:py-4">{item.description}</td>
                  <td className="py-2 md:py-4">{item.quantity}</td>
                  <td className="py-2 md:py-4">{item.unit || "-"}</td>
                  <td className="py-2 md:py-4">
                    <button 
                      onClick={() => handleRemoveServiceLog(index)}
                      className={`p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700`}
                      title="Remove"
                    >
                      <X className={`w-4 h-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`} />
                    </button>
                  </td>
                </tr>
              ))}
              {itemUsages.length === 0 && (
                <tr>
                  <td className="py-4 text-gray-500 flex justify-center" colSpan={1}>
                    No items added yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex flex-col md:flex-row justify-between gap-2 mt-8">
        <button
          onClick={onPrevious}
          className={`${
            darkMode
              ? "text-gray-200 hover:bg-gray-700"
              : "text-blue-900 hover:bg-gray-100"
          } border border-gray-300 rounded-md px-4 md:px-6 py-2 font-medium cursor-pointer`}
        >
          Previous Step
        </button>
        <button
          onClick={handleNext}
          className={`${
            darkMode
              ? "text-gray-200 hover:bg-gray-700"
              : "text-blue-900 hover:bg-gray-100"
          } border border-gray-300 rounded-md px-4 md:px-6 py-2 font-medium cursor-pointer`}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}