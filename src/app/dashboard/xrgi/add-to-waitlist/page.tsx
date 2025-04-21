"use client";
import withAuth from "@/component/auth/withAuth";
import { useTheme } from "../../layout";
import Waitlist from "@/component/dashboard/XRGI/add-to-waitlist";

function AddToWaitlist() {
  const { darkMode } = useTheme();
  return (
    <div className={`h-full ${darkMode ? "dark" : ""}`}>
      <Waitlist />
    </div>
  );
}

export default withAuth(AddToWaitlist);