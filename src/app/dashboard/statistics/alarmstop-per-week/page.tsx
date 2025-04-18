"use client";
import AlarmstopPerWeek from "@/component/dashboard/statistics/alarmstop-per-week/alarmstop-per-week";
import { useTheme } from "../../layout";

export default function Alarmstop_per_week() {
  const { darkMode } = useTheme();
  return (
    <div className={`h-full ${darkMode ? "dark" : ""}`}>
      <AlarmstopPerWeek />
    </div>
  );
}
