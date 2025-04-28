import React from "react";

type MeterBarProps = {
  value: number;
  showValue?: boolean;
  height?: "sm" | "md" | "lg";
  width?: string;
  showLabel?: boolean;
  label?: string;
};

const getColor = (value: number) => {
  if (value >= 90) return "bg-red-500";
  if (value >= 60) return "bg-orange-400";
  if (value >= 30) return "bg-yellow-400";
  return "bg-green-500";
};

const MeterBar: React.FC<MeterBarProps> = ({ 
  value, 
  showValue = true, 
  height = "md", 
  width = "w-32",
  showLabel = false,
  label = "Usage"
}) => {
  const colorClass = getColor(value);
  
  const heightClasses = {
    sm: "h-2",
    md: "h-6",
    lg: "h-8"
  };
  
  const valuePosition = value < 60 ? "text-gray-800" : "text-white";
  
  return (
    <div className="flex flex-col gap-1">
      {showLabel && (
        <div className="flex justify-center text-sm text-gray-600">
          <span>{label}</span>
          {showValue && <span>{value}%</span>}
        </div>
      )}
      <div className={`${width} bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md relative`}>
        <div
          className={`${heightClasses[height]} transition-all duration-500 ease-in-out ${colorClass} `}
          style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
        >
          {showValue && height !== "sm" && (
            <div className="absolute inset-0 flex items-center justify-center w-full">
              <span className={`text-xs font-medium ${valuePosition}`}>
                {value} hrs
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MeterBar;