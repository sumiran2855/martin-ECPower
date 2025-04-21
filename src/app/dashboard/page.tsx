"use client";
import Home from "@/component/dashboard/Home/home";
import { useTheme } from "./layout";
import withAuth from "@/component/auth/withAuth";

function Dashboard() {
  const { darkMode } = useTheme();

  return (
    <div className={`h-full ${darkMode ? "dark" : ""}`}>
      <Home />
    </div>
  );
}

export default withAuth(Dashboard)