"use client";
import { useTheme } from "../../layout";
import UnitTest from "@/component/dashboard/XRGI/unit-test";

export default function UnitList() {
  const { darkMode } = useTheme();
  return (
    <div className={`h-full ${darkMode ? "dark" : ""}`}>
      <UnitTest />
    </div>
  );
}
