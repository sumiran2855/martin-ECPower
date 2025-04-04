"use client";
import { useState, useEffect, createContext, useContext } from "react";
import Home from "@/component/dashboard/Home/home";
import Navbar from "@/component/dashboard/navbar";
import Sidebar from "@/component/dashboard/sidebar";

export const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode") === "true";
      setDarkMode(savedMode);
      
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
        setSidebarOpen(window.innerWidth >= 768);
      };

      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", String(newMode));
    }
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={`h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />
        <div className="flex flex-1 mt-20 bg-gray-100 dark:bg-gray-900">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} isMobile={isMobile} />
          <main 
            className={`flex-1 overflow-x-hidden overflow-y-auto p-6 bg-gray-100 dark:bg-gray-900 transition-all duration-300 
              ${sidebarOpen ? 'md:ml-64' : ''}`}
          >
            <Home />
          </main>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}