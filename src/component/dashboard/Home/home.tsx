import React from "react";
import SystemStatusCard from "./systemStatus";
import Dealer from "./dealer";
import InstallationTable from "./InstallationTable";

const Dashboard: React.FC = () => {
  return (
    <div className=" p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <SystemStatusCard />
        <Dealer />
      </div>
      <InstallationTable />
    </div>
  );
};

export default Dashboard;
