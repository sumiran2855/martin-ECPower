"use client";
import { useTheme } from "../../layout";
import Waitlist from "@/component/dashboard/XRGI/add-to-waitlist";

export default function AddToWaitlist() {
  const { darkMode } = useTheme();
  return (
    <div className={`h-full ${darkMode ? "dark" : ""}`}>
      <Waitlist />
    </div>
  );
}
