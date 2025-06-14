"use client";
import OperationalAnalysis from "@/component/dashboard/statistics/operational-analysis/operational-analysis";
import { useTheme } from "../../layout";
import withAuth from "@/component/auth/withAuth";

function Operational_Analysis() {
  const { darkMode } = useTheme();
  return (
    <div className={`h-full ${darkMode ? "dark" : ""}`}>
      <OperationalAnalysis />
    </div>
  );
}

export default withAuth(Operational_Analysis);