"use client";
import { useTheme } from "@/app/dashboard/layout";
import React from "react";
import GaugeComponent from "react-gauge-component";

interface GaugeProps {
  label: string;
  title?: string;
  value: number; 
}

const Gauge: React.FC<GaugeProps> = ({
  label,
  title,
  value,
}) => {
  const { darkMode } = useTheme();

  return (
    <div className="flex flex-col items-center">
      {title && (
        <h3
          className={`${
            darkMode ? "text-gray-200" : ""
          } text-sm font-semibold mb-3 text-center text-blue-900 dark:text-blue-300`}
        >
          {title}
        </h3>
      )}
      <div className="relative w-56 h-36">
        <GaugeComponent
          value={value}
          type="radial"
          labels={{
            tickLabels: {
              type: "outer",
              ticks: [
                { value: 20 },
                { value: 40 },
                { value: 60 },
                { value: 80 },
                { value: 100 },
              ],
            },
          }}
          arc={{
            colorArray: ["#5BE12C", "#EA4228"],
            subArcs: [{ limit: 10 }, { limit: 30 }, {}, {}, {}],
            padding: 0.02,
            width: 0.3,
          }}
          pointer={{
            elastic: true,
            animationDelay: 0,
          }}
        />
      </div>
      <div className="mt-10 text-xs text-gray-500 dark:text-gray-400 text-center">
        {label}
      </div>
    </div>
  );
};

export default Gauge;