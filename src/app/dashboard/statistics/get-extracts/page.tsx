"use client";
import GetExtracts from "@/component/dashboard/statistics/get-extracts/get-extracts";
import { useTheme } from "../../layout";
import withAuth from "@/component/auth/withAuth";

function Get_Extracts() {
  const { darkMode } = useTheme();
  return (
    <div className={`h-full ${darkMode ? "dark" : ""}`}>
      <GetExtracts />
    </div>
  );
}

export default withAuth(Get_Extracts);