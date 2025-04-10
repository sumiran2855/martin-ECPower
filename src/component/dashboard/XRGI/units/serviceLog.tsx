"use client";
import React from "react";

interface ServiceLogEntryProps {
  date: string;
  createdBy: string;
  establishedDate: string;
  content?: string;
}

const ServiceLogEntry: React.FC<ServiceLogEntryProps> = ({ 
  date, 
  createdBy, 
  establishedDate,
  content = "Test"
}) => {
  return (
    <div className="mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <p className="text-sm font-medium dark:text-gray-300">Date for workmanship:</p>
          <p className="text-sm dark:text-gray-400">{date}</p>
        </div>
        <div>
          <p className="text-sm font-medium dark:text-gray-300">Created by:</p>
          <p className="text-sm dark:text-gray-400">{createdBy}</p>
        </div>
        <div>
          <p className="text-sm font-medium dark:text-gray-300">Date of establishment:</p>
          <p className="text-sm dark:text-gray-400">{establishedDate}</p>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-sm font-medium dark:text-gray-300">{content}</p>
      </div>
    </div>
  );
};

export default ServiceLogEntry;