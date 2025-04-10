"use client";
import { useTheme } from "../../../layout";
import Units from "@/component/dashboard/XRGI/units/units";

export default function EachUnit() {
  const { darkMode } = useTheme();
  return (
    <div className={`h-full ${darkMode ? "dark" : ""}`}>
      <Units />
    </div>
  );
}
