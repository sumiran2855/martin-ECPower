"use client";
import StatisticList from "@/component/dashboard/statistics/statistics";
import { useTheme } from "../layout";
import withAuth from "@/component/auth/withAuth";

function StatisticsList() {
  const { darkMode } = useTheme();
  return (
    <div className={`h-full ${darkMode ? "dark" : ""}`}>
      <StatisticList />
    </div>
  );
}

export default withAuth(StatisticsList);