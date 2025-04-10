"use client";
import { useTheme } from "../../layout";
import RegistrationOfVisites from "@/component/dashboard/XRGI/registeration-of-visits";

export default function RegistrationOfVisite() {
  const { darkMode } = useTheme();
  return (
    <div className={`h-full ${darkMode ? "dark" : ""}`}>
      <RegistrationOfVisites />
    </div>
  );
}
