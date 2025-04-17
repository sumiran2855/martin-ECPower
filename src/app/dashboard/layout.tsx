"use client";
import { useState, useEffect, createContext, useContext } from "react";
import Navbar from "@/component/dashboard/navbar";
import Sidebar from "@/component/dashboard/sidebar";

export const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
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
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />
        </div>
        <div className="flex flex-1 pt-20 bg-gray-100 dark:bg-gray-900 h-full">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} isMobile={isMobile} />
          <main 
            className={`flex-1 overflow-x-hidden overflow-y-auto p-6 bg-gray-100 dark:bg-gray-900 transition-all duration-300 
              ${sidebarOpen ? 'md:ml-64' : ''} ${darkMode ? 'dark' : ''}`}
              style={{ height: "calc(100vh - 80px)" }}
          >
            {children}
          </main>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}