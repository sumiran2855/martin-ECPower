"use client";

import { useState } from "react";
import { useTheme } from "@/app/dashboard/layout";
import { ArrowLeft, SquarePen } from "lucide-react";
import CreatingDateTab from "./tabs/creating-date";
import ItemUsageTab from "./tabs/item-usage";
import ResourcesTab from "./tabs/resources";
import Preview from "./tabs/preview";
import { InstallationData } from "@/helper/facilityHelper";
import { CreateServiceReport } from "@/controller/service-controller";
import { getAuthTokens } from "@/helper/authHelper";
import ECPowerLoader from "@/component/loader";

interface CreateReportProps {
  setCreating: (value: boolean) => void;
  Installation: InstallationData | null;
}

const CreateReport: React.FC<CreateReportProps> = ({
  Installation,
  setCreating,
}) => {
  const { darkMode } = useTheme();
  const [activeTab, setActiveTab] = useState("creationDate");
  const [loading, setLoading] = useState(false);
  const today = new Date();
  const fiveDaysLater = new Date();
  fiveDaysLater.setDate(today.getDate() + 5);
  const [data, setData] = useState({
    creatingDate: {
      creationDate: new Date().toISOString().slice(0, 16).replace("T", " "),
      deliveryDate: fiveDaysLater.toISOString().slice(0, 16).replace("T", " "),
      serviceType: "",
      serviceDescription: "",
    },
    itemUsages: [],
    resources: [],
  });

  const { token, idToken } = getAuthTokens();

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

  const handleSubmit = async () => {
    setLoading(true);
    if (!Installation) {
      console.error("No installation data available");
      return;
    }

    const payload = {
      xrgiID: Installation.xrgiID,
      customerID: Installation.userID,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ...data,
    };

    try {
      const result = await CreateServiceReport(token, idToken, payload);
      console.log("Service report created:", result);
      setCreating(false);
    } catch (error) {
      console.error("Failed to create service report", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ECPowerLoader size="md" isVisible={true} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div
        className={`${
          darkMode ? "text-gray-200" : "text-blue-900"
        } mb-6 flex items-center`}
      >
        <button
          onClick={() => setCreating(false)}
          className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors cursor-pointer ${
            darkMode
              ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
              : "bg-blue-100 text-blue-800 hover:bg-blue-200"
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-medium">Back</span>
        </button>
      </div>
      <div
        className={`${
          darkMode ? "text-gray-200" : "text-blue-900"
        } mb-6 flex items-center`}
      >
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
              // onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </div>
          ))}
        </div>

        {activeTab === "creationDate" && (
          <CreatingDateTab
            onNext={goToNextTab}
            onPrevious={goToPreviousTab}
            data={data}
            setData={(newData) => setData(newData)}
          />
        )}
        {activeTab === "itemUsage" && (
          <ItemUsageTab
            onNext={goToNextTab}
            onPrevious={goToPreviousTab}
            data={data}
            setData={(newData) => setData(newData)}
          />
        )}
        {activeTab === "resources" && (
          <ResourcesTab
            onNext={goToNextTab}
            onPrevious={goToPreviousTab}
            data={data}
            setData={(newData) => setData(newData)}
          />
        )}
        {activeTab === "preview" && (
          <Preview
            onNext={goToNextTab}
            onPrevious={goToPreviousTab}
            Installation={Installation}
            data={data}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default CreateReport;
