"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Menu, X, Search, Sun, Moon, LogOut, Settings, User } from "lucide-react";
import { useTheme } from "@/app/dashboard/layout";
import LanguageSwitcher from "../languageSwitcher";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar({ toggleSidebar, sidebarOpen }: any) {
  const { t } = useTranslation();
  const router = useRouter();
  const { darkMode, toggleDarkMode } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest('.profile-trigger')
      ) {
        setProfileDropdownOpen(false);
      }
      
      if (menuOpen && !(event.target as Element).closest("nav")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen, profileDropdownOpen]);

  const handleLogout =()=>{
    localStorage.clear();
    router.push('/login')
  }

  return (
    <nav
      className={`w-full fixed top-0 z-50 shadow-md transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors mr-2 md:hidden"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex-shrink-0 mr-16">
              <Image
                src="/logo.svg"
                alt="EC Power Logo"
                width={60}
                height={50}
                priority
              />
            </div>
          </div>

          <div className="hidden md:block flex-1 mx-8">
            <form
              onSubmit={handleSearch}
              className="relative w-full max-w-md mx-auto"
            >
              <div className="relative w-full max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-4 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
                    ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  <Search
                    className={`h-5 w-5 ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  />
                </button>
              </div>
            </form>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors mr-12 cursor-pointer
                ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>

            <div className="hidden md:flex items-center space-x-8">
              <div className="text-sm">
                <LanguageSwitcher />
              </div>
            </div>

            <div className="relative">
              <div 
                onClick={toggleProfileDropdown}
                className="flex items-center space-x-3 ml-auto cursor-pointer profile-trigger"
              >
                <Image
                  src="/White_Border.png"
                  alt="User Avatar"
                  width={35}
                  height={35}
                  className="rounded-full object-cover"
                  priority
                />
                <div className="text-sm hidden md:block">
                  <p className="font-bold">EC POWER</p>
                  <p className={darkMode ? "text-gray-400" : "text-gray-500"}>
                    Martin
                  </p>
                </div>
              </div>
              
              {profileDropdownOpen && (
                <div 
                  ref={dropdownRef}
                  className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 z-50
                    ${darkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"}`}
                >
                  <div className="px-4 py-2 md:hidden">
                    <p className="font-bold">EC POWER</p>
                    <p className={darkMode ? "text-gray-400" : "text-gray-500"}>
                      Martin
                    </p>
                  </div>
                  <Link
                    href="#"
                    className={`flex items-center px-4 py-2 text-sm ${
                      darkMode ? "hover:bg-gray-700 text-gray-200" : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                  <Link
                    href="#"
                    className={`flex items-center px-4 py-2 text-sm ${
                      darkMode ? "hover:bg-gray-700 text-gray-200" : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Link>
                  <Link
                    onClick={handleLogout}
                    href="/login"
                    className={`flex items-center px-4 py-2 text-sm ${
                      darkMode ? "hover:bg-gray-700 text-gray-200" : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Link>
                </div>
              )}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none
                  ${darkMode ? "text-gray-300" : "text-gray-500"}`}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden">
          <div
            className={`px-4 pt-2 pb-3 space-y-3 border-t ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <form onSubmit={handleSearch} className="mt-3 mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-4 pr-10 py-2 border rounded-md focus:outline-none
                    ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-white"
                        : "bg-white border-gray-300"
                    }`}
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  <Search
                    className={`h-5 w-5 ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  />
                </button>
              </div>
            </form>

            <div className="flex justify-between py-2">
              <LanguageSwitcher />
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}