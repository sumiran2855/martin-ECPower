"use client";
import withAuth from "@/component/auth/withAuth";
import { useTheme } from "../../layout";
import UnitTest from "@/component/dashboard/XRGI/unit-test";

function UnitList() {
  const { darkMode } = useTheme();
  return (
    <div className={`h-full ${darkMode ? "dark" : ""}`}>
      <UnitTest />
    </div>
  );
}

export default withAuth(UnitList);