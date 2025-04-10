"use client";
import React from "react";

const BarChart: React.FC = () => {
  // Sample data
  const months = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
  ];

  return (
    <div className="mt-4">
      <div className="flex h-56 relative">
        <div className="flex flex-col justify-between text-xs text-gray-500 dark:text-gray-400 mr-2">
          <span>50</span>
          <span>40</span>
          <span>30</span>
          <span>20</span>
          <span>10</span>
          <span>0</span>
        </div>
        <div className="flex-1 flex">
          <div className="flex-1 flex flex-col relative">
            <div className="flex-1 grid grid-cols-12 gap-1">
              {months.map((month, i) => (
                <div key={i} className="relative flex flex-col">
                  <div className="flex-1 border-t border-gray-200 dark:border-gray-700"></div>
                  <div className="flex-1 border-t border-gray-200 dark:border-gray-700"></div>
                  <div className="flex-1 border-t border-gray-200 dark:border-gray-700"></div>
                  <div className="flex-1 border-t border-gray-200 dark:border-gray-700"></div>
                  <div className="flex-1 border-t border-gray-200 dark:border-gray-700"></div>
                </div>
              ))}
            </div>

            {/* Sample Chart Lines */}
            <div className="absolute inset-0 flex items-end">
              <svg
                className="w-full h-full"
                viewBox="0 0 1200 500"
                preserveAspectRatio="none"
              >
                <polyline
                  points="0,450 100,400 200,420 300,380 400,360 500,420 600,380 700,420 800,380 900,400 1000,350 1100,400 1200,380"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="3"
                />
                <polyline
                  points="0,480 100,450 200,470 300,440 400,480 500,460 600,450 700,430 800,450 900,420 1000,440 1100,410 1200,430"
                  fill="none"
                  stroke="#eab308"
                  strokeWidth="3"
                />
                <polyline
                  points="0,420 100,430 200,400 300,420 400,390 500,410 600,380 700,400 800,370 900,390 1000,370 1100,350 1200,370"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
        {months.map((month, i) => (
          <div key={i}>{month}</div>
        ))}
      </div>

      <div className="flex gap-6 mt-4 flex-wrap">
        <div className="flex items-center gap-1">
          <div className="w-4 h-3 bg-yellow-400"></div>
          <span className="text-xs dark:text-gray-300">Elec. production in kWh</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-3 bg-red-500"></div>
          <span className="text-xs dark:text-gray-300">Gas consumption in kWh</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-3 bg-green-500"></div>
          <span className="text-xs dark:text-gray-300">Heat production in kWh</span>
        </div>
      </div>
    </div>
  );
};

export default BarChart;