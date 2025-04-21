"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { login } from "@/controller/auth-controller";
import { useAlerts } from "../alert";
import { getCookie, removeCookie, setCookie } from "@/utils/cookies";

export default function login_page({ setForgotPassword }: any) {
  const router = useRouter();
  const { t } = useTranslation("login");
  const { addAlert, AlertList } = useAlerts();
  const searchParams = useSearchParams();
  const reason = searchParams.get("reason");

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  useEffect(() => {
    if (reason === "unauthorized") {
      addAlert({
        type: "warning",
        message: "Please log in to access the dashboard.",
        showIcon:true
      });
    } else if (reason === "invalidToken") {
      addAlert({
        type: "error",
        message: "Invalid or expired token. Please log in again.",
        showIcon:true
      });
    } else if (reason === "sessionExpired") {
      addAlert({
        type: "info",
        message: "Session expired. Please log in again.",
        showIcon:true
      });
    }
  }, [reason,addAlert]);

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    const savedPassword = localStorage.getItem("rememberedPassword");
    if (savedEmail && savedPassword) {
      setUsername(savedEmail);
      setPassword(atob(savedPassword));
      setRememberMe(true);
    }
  }, []);

  useEffect(() => {
    const savedEmail = getCookie("rememberedEmail");
    const savedPassword = getCookie("rememberedPassword");
    if (savedEmail && savedPassword) {
      setUsername(savedEmail);
      setPassword(atob(savedPassword)); 
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await login(username, password);
    if (result.success) {
      if (rememberMe) {
        setCookie("rememberedEmail", username,1); 
        setCookie("rememberedPassword", btoa(password),1);
      } else {
        removeCookie("rememberedEmail");
        removeCookie("rememberedPassword");
      }
      router.push("/dashboard");
      addAlert({
        type: "success",
        message: "login successfully..!",
        showIcon:true
      });
    } else{
      addAlert({
        type: "error",
        message: "Login failed..!.",
        showIcon:true
      });
    }
  };
  return (
    <>
      <div className="hidden md:flex md:w-1/4 lg:w-1/6 bg-[#f3f5f8] h-full flex-col justify-center items-center p-4 mt-9">
      <AlertList/>
        <div className="bg-blue-900 p-6 rounded-t-lg flex justify-center w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </div>

        <div className="text-center mt-4">
          <p className="text-gray-500 text-sm">TO</p>
          <h2 className="text-xl font-bold text-blue-900">EC POWER</h2>
          <p className="text-xs text-gray-500 mb-6">HOME PAGE</p>
          <Link
            href="/login"
            className="border border-blue-900 text-blue-900 rounded px-4 py-2 text-sm hover:bg-blue-100 transition"
          >
            {t("toTheHomePage")}
          </Link>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-950 to-blue-800 p-6 relative mt-9 h-full">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <div className="flex justify-center mb-4">
            <img
              src="/ecpower2 2.jpg"
              alt="EC Power Logo"
              className="h-16 w-16"
            />
          </div>

          <h1 className="text-xl text-center font-semibold text-blue-900">
            {t("title")}
          </h1>
          <p className="text-center text-sm text-gray-600 mb-6">
            {t("description1")} <br /> {t("description2")}
          </p>

          <form className="flex flex-col h-full justify-center" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-1">
                {t("username")}
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder={t("usernamePlaceholder")}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm text-gray-600 mb-1">
                {t("password")}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder={t("passwordPlaceholder")}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition cursor-pointer"
            >
              {t("loginButton")}
            </button>

            <div className="flex justify-between items-center mt-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-600">
                  {t("rememberMe")}
                </span>
              </label>
              <button
                onClick={() => setForgotPassword(true)}
                className="text-sm text-blue-600 cursor-pointer"
              >
                {t("forgotPassword")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}