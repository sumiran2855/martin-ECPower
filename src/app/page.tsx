"use client";

import { useState } from "react";

export default function AdminPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen overflow-hidden bg-white">
      <div className="w-full py-2 bg-white shadow-2xs fixed top-0 z-10 flex justify-center md:justify-end px-6">
        <div className="flex gap-2 text-gray-500 text-sm py-2 mr-8">
          <a href="#" className="hover:underline">
            Dansk
          </a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:underline">
            Deutsch
          </a>
          <span className="text-gray-400">|</span>
          <a href="#" className="font-semibold text-gray-900">
            English
          </a>
        </div>
      </div>

      <div className="hidden md:flex md:w-1/4 lg:w-1/6 bg-[#f3f5f8] h-full flex-col justify-center items-center p-4 mt-9">
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
          <a
            href="#"
            className="border border-blue-900 text-blue-900 rounded px-4 py-2 text-sm hover:bg-blue-100 transition"
          >
            To the home page
          </a>
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
            EC POWER SERVICE DATABASE
          </h1>
          <p className="text-center text-sm text-gray-600 mb-6">
            Enter your username and password <br /> to sign in to your account
          </p>

          <form className="flex flex-col h-full justify-center">
            <div className="mb-4">
              <label
                className="block text-sm text-gray-600 mb-1"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter username"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-sm text-gray-600 mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter password"
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
              className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition"
            >
              Login
            </button>

            <div className="flex justify-between items-center mt-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-600">Remember Me</span>
              </label>
              <a
                href="#"
                className="text-sm text-blue-600 hover:underline cursor-pointer"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
