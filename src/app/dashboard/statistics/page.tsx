"use client";
import StatisticList from "@/component/dashboard/statistics/statistics";
import { useTheme } from "../layout";

export default function StatisticsList() {
  const { darkMode } = useTheme();
  return (
    <div className={`h-full ${darkMode ? "dark" : ""}`}>
      <StatisticList />
    </div>
  );
}
