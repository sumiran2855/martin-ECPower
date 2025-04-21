"use client";
import withAuth from "@/component/auth/withAuth";
import { useTheme } from "../../../layout";
import Units from "@/component/dashboard/XRGI/units/units";

function EachUnit() {
  const { darkMode } = useTheme();
  return (
    <div className={`h-full ${darkMode ? "dark" : ""}`}>
      <Units />
    </div>
  );
}

export default withAuth(EachUnit);