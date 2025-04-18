"use client";

import { useState } from "react";
import { useTheme } from "@/app/dashboard/layout";
import { SquarePen } from "lucide-react";
import CreatingDateTab from "./tabs/creating-date";
import ItemUsageTab from "./tabs/item-usage";
import ResourcesTab from "./tabs/resources";
import Preview from "./tabs/preview";

export default function CreateReport() {
  const { darkMode } = useTheme();
  const [activeTab, setActiveTab] = useState("creationDate");

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div
        className={`${ darkMode ? "text-gray-200" : "text-blue-900"} mb-6 flex items-center`}>
        <div className="mr-2">
          <SquarePen />
        </div>
        <h1 className="text-2xl font-bold">Create service report</h1>
      </div>
      <div className="max-w-7xl mx-auto px-2 py-6">
        <div className="flex ml-5 flex-wrap gap-2">
          {[
            { key: "creationDate", label: "Creating Date" },
            { key: "itemUsage", label: "Item Usage" },
            { key: "resources", label: "Resources" },
            { key: "preview", label: "Preview" },
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

        {activeTab === "creationDate" && <CreatingDateTab />}
        {activeTab === "itemUsage" && <ItemUsageTab />}
        {activeTab === "resources" && <ResourcesTab />}
        {activeTab === "preview" && <Preview />}
      </div>
    </div>
  );
}
