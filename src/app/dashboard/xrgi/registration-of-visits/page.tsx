"use client";
import withAuth from "@/component/auth/withAuth";
import { useTheme } from "../../layout";
import RegistrationOfVisites from "@/component/dashboard/XRGI/registeration-of-visits";

function RegistrationOfVisite() {
  const { darkMode } = useTheme();
  return (
    <div className={`h-full ${darkMode ? "dark" : ""}`}>
      <RegistrationOfVisites />
    </div>
  );
}

export default withAuth(RegistrationOfVisite);