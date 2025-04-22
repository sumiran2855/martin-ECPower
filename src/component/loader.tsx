"use client";
import React, { useEffect, useState } from "react";

type LoaderSize = "sm" | "md" | "lg";

interface ECPowerLoaderProps {
  size?: LoaderSize;
  isVisible?: boolean;
  backdropBlur?: boolean;
}

const ECPowerLoader: React.FC<ECPowerLoaderProps> = ({ 
  size = "md", 
  isVisible = true,
  backdropBlur = true
}) => {
  const [rotation, setRotation] = useState(0);

  const sizeClasses: Record<LoaderSize, { 
    container: string; 
    text: string; 
    powerText: string;
    circle: string;
    gap: string;
  }> = {
    sm: {
      container: "w-16 h-16",
      text: "text-xl",
      powerText: "text-[10px]",
      circle: "w-16 h-16 border-2",
      gap: "gap-0.5"
    },
    md: {
      container: "w-24 h-24",
      text: "text-2xl",
      powerText: "text-xs",
      circle: "w-24 h-24 border-2",
      gap: "gap-1"
    },
    lg: {
      container: "w-32 h-32",
      text: "text-3xl",
      powerText: "text-sm",
      circle: "w-32 h-32 border-3",
      gap: "gap-1.5"
    },
  };

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setRotation((prev) => (prev + 5) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${backdropBlur ? 'backdrop-blur-sm bg-black/20' : 'bg-black/50'}`}>
      <div className={`relative ${sizeClasses[size].container} flex items-center justify-center`}>
        <div
          className={`absolute ${sizeClasses[size].circle} rounded-full border-gray-300 border-t-gray-800 transition-transform duration-100 ease-linear`}
          style={{ transform: `rotate(${rotation}deg)` }}
        />
        
        <div className="absolute flex flex-col items-center justify-center">
          <div className={`flex items-center ${sizeClasses[size].gap}`}>
            <span className={`font-medium text-gray-700 ${sizeClasses[size].text}`}>E</span>
            <span className={`font-medium text-gray-700 ${sizeClasses[size].text}`}>C</span>
          </div>
          <div className={`text-gray-700 font-medium tracking-wider ${sizeClasses[size].powerText} mt-1`}>
            POWER
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECPowerLoader;