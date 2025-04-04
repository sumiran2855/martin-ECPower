"use client";
import React from "react";
import SystemStatusCard from "./systemStatus";
import Dealer from "./dealer";
import InstallationTable from "./InstallationTable";
import { useTheme } from "@/app/dashboard/page";

const Dashboard: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <SystemStatusCard />
        <Dealer />
      </div>
      <div className="mt-4">
        <InstallationTable />
      </div>
    </div>
  );
};

export default Dashboard;
