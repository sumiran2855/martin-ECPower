"use client";

import { useState } from "react";
import { useTheme } from "@/app/dashboard/layout";
import ServiceReportTab from "./tabs/service-reports";
import ItemUsageTab from "./tabs/item-usage";
import UploadServiceReport from "./tabs/upload-service-report";
import UploadReport from "./tabs/upload";

export default function XRGIForm() {
  const { darkMode } = useTheme();
  const [activeTab, setActiveTab] = useState("serviceReports");

  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded-lg shadow`}>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex ml-5 flex-wrap gap-2">
          {[
            { key: "serviceReports", label: "Service Reports" },
            { key: "itemUsage", label: "Item Usage" },
            { key: "uploadedServiceReport", label: "Uploaded Service Report" },
            { key: "upload", label: "Upload" },
          ].map((tab) => (
            <div
              key={tab.key}
              className={`py-3 px-8 font-semibold rounded-t-lg cursor-pointer ${
                activeTab === tab.key ? "bg-yellow-400" : "bg-gray-200"
              } text-blue-900`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </div>
          ))}
        </div>


          {activeTab === "serviceReports" && (
            <ServiceReportTab/>
          )}
          {activeTab === "itemUsage" && (
            <ItemUsageTab/>
          )}
          {activeTab === "uploadedServiceReport" && (
            <UploadServiceReport/>
          )}
          {activeTab === "upload" && (
            <UploadReport/>
          )}

      </div>
    </div>
  );
}
