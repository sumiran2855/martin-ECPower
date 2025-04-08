"use client";
import Home from "@/component/dashboard/Home/home";
import { useTheme } from "./layout";

export default function Dashboard() {
  const { darkMode } = useTheme();

  return (
    <div className={`h-full ${darkMode ? "dark" : ""}`}>
      <Home />
    </div>
  );
}
