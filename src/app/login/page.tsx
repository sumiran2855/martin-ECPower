"use client";

import ForgetPassword from "@/component/auth/forgetPassword";
import Login from "@/component/auth/login";
import LanguageSwitcher from "@/component/languageSwitcher";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <div className="flex flex-col md:flex-row h-screen w-screen overflow-hidden bg-white">
      <div className="w-full py-2 bg-white shadow-2xs fixed top-0 z-10 flex justify-center md:justify-end px-6">
        <LanguageSwitcher />
      </div>

      {!forgotPassword ? (
        <Login setForgotPassword={setForgotPassword} />
      ) : (
        <ForgetPassword setForgotPassword={setForgotPassword} />
      )}
    </div>
  );
}
