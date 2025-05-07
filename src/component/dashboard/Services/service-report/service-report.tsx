"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/app/dashboard/layout";
import ServiceReportTab from "./tabs/service-reports";
import ItemUsageTab from "./tabs/item-usage";
import UploadServiceReport from "./tabs/upload-service-report";
import UploadReport from "./tabs/upload";
import { InstallationData } from "@/helper/facilityHelper";
import { getAuthTokens } from "@/helper/authHelper";
import { getServiceReport } from "@/controller/service-controller";
import ECPowerLoader from "@/component/loader";
import type { ServiceReport } from "../type"

interface CreateTestFormProps {
  setServiceDetail: (value: boolean) => void;
  Installation: InstallationData | null;
}

export default function ServiceReport({
  Installation,
  setServiceDetail,
}: CreateTestFormProps) {
  const { token, idToken } = getAuthTokens();
  const { darkMode } = useTheme();
  const [activeTab, setActiveTab] = useState("serviceReports");
  const [serviceReportData, setServiceReportData] = useState<ServiceReport[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchServiceReport = async () => {
      if (Installation?.userID && token && idToken) {
        setLoading(true);
        try {
          const data = await getServiceReport(
            token,
            idToken,
            Installation.userID
          );
          setServiceReportData(data);
        } catch (error) {
          console.error("Failed to fetch service report:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchServiceReport();
  }, [Installation, token, idToken]);

  if (loading) {
    return <ECPowerLoader size="md" isVisible={true} />;
  }

  return (
    <div
      className={`${darkMode ? "bg-gray-800" : "bg-gray-50"} rounded-lg shadow`}
    >
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

        {activeTab === "serviceReports" && <ServiceReportTab serviceReportData={serviceReportData} Installation={Installation}/>}
        {activeTab === "itemUsage" && <ItemUsageTab serviceReportData={serviceReportData}/>}
        {activeTab === "uploadedServiceReport" && <UploadServiceReport serviceReportData={serviceReportData} />}
        {activeTab === "upload" && (
          <UploadReport setServiceDetail={setServiceDetail} />
        )}
      </div>
    </div>
  );
}
