"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Menu, X, Search, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (menuOpen && !target.closest("nav")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", String(newMode));
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode") === "true";
      setDarkMode(savedMode);
    }
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 shadow-md ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Image src="/logo.svg" alt="EC Power Logo" width={50} height={50} />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors ml-20 cursor-pointer"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>

          <div className="hidden md:block flex-1 mx-8">
            <form onSubmit={handleSearch} className="relative w-full max-w-md mx-auto">
              <div className="relative w-full max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  <Search className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </form>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="text-sm mr-20">
              <Link href="#" className="text-gray-500 hover:text-gray-700 mr-2">
                Dansk
              </Link>{" "}
              |{" "}
              <Link href="#" className="text-gray-500 hover:text-gray-700 mx-2">
                Deutsch
              </Link>{" "}
              |{" "}
              <Link
                href="#"
                className="text-gray-500 dark:text-white font-semibold ml-2"
              >
                English
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <Image
                src="/White_Border.png"
                alt="User Avatar"
                width={35}
                height={35}
                className="rounded-full object-cover"
              />
              <div className="text-sm">
                <p className="font-bold">EC POWER</p>
                <p className="text-gray-500 dark:text-gray-400">Martin</p>
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open menu</span>
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-3 border-t">
            <form onSubmit={handleSearch} className="mt-3 mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  <Search className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </form>

            <div className="flex justify-between py-2">
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                Dansk
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                Deutsch
              </Link>
              <Link
                href="#"
                className="text-gray-500 dark:text-white font-semibold"
              >
                English
              </Link>
            </div>

            <div className="flex items-center space-x-3 py-2">
              <Image
                src="/White_Border.png"
                alt="User Avatar"
                width={35}
                height={35}
                className="rounded-full object-cover"
              />
              <div className="text-sm">
                <p className="font-bold">EC POWER</p>
                <p className="text-gray-500 dark:text-gray-400">Martin</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
