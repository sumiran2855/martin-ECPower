"use client";
import withAuth from "@/component/auth/withAuth";
import { useTheme } from "../../layout";
import RegistrationOfTests from "@/component/dashboard/XRGI/registration-of-test";

function RegistrationOfTest() {
  const { darkMode } = useTheme();
  return (
    <div className={`h-full ${darkMode ? "dark" : ""}`}>
      <RegistrationOfTests />
    </div>
  );
}

export default withAuth(RegistrationOfTest)