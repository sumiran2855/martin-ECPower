"use client";

import { useState } from "react";
import { useTheme } from "@/app/dashboard/layout";
import { SquarePen } from "lucide-react";
import CreatingDateTab from "./tabs/creating-date";
import ItemUsageTab from "./tabs/item-usage";
import ResourcesTab from "./tabs/resources";
import Preview from "./tabs/preview";
import { InstallationData } from "@/helper/facilityHelper";

interface CreateTestFormProps {
  Installation: InstallationData | null;
}

const CreateReport: React.FC<CreateTestFormProps> = ({
  Installation
})=> {
  const { darkMode } = useTheme();
  const [activeTab, setActiveTab] = useState("creationDate");

  const tabs = ["creationDate", "itemUsage", "resources", "preview"];
  
  const goToNextTab = () => {
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    }
  };

  const goToPreviousTab = () => {
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1]);
    }
  };

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

        {activeTab === "creationDate" && <CreatingDateTab onNext={goToNextTab} onPrevious={goToPreviousTab} />}
        {activeTab === "itemUsage" && <ItemUsageTab onNext={goToNextTab} onPrevious={goToPreviousTab} />}
        {activeTab === "resources" && <ResourcesTab onNext={goToNextTab} onPrevious={goToPreviousTab} />}
        {activeTab === "preview" && <Preview onNext={goToNextTab} onPrevious={goToPreviousTab} Installation={Installation} />}
      </div>
    </div>
  );
}

export default CreateReport;
