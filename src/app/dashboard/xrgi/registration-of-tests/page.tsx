"use client";
import { useTheme } from "../../layout";
import RegistrationOfTests from "@/component/dashboard/XRGI/registration-of-test";

export default function RegistrationOfTest() {
  const { darkMode } = useTheme();
  return (
    <div className={`h-full ${darkMode ? "dark" : ""}`}>
      <RegistrationOfTests />
    </div>
  );
}
