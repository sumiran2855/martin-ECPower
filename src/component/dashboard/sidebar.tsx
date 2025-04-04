"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  BarChart2,
  FileText,
  Menu,
  X,
  ChartSpline,
  TableProperties,
  PanelsLeftBottom
} from "lucide-react";
import { useTheme } from "@/app/dashboard/page"; 

type MenuItem = {
  name: string;
  icon: React.ReactNode;
  path: string;
};

export default function Sidebar({ sidebarOpen, setSidebarOpen, isMobile }:any) {
  const pathname = usePathname();
  const { darkMode } = useTheme();

  const menuItems: MenuItem[] = [
    { name: "Home", icon: <Home size={20} />, path: "/dashboard" },
    { name: "XRGI®", icon: <PanelsLeftBottom />, path: "/xrgi" },
    { name: "Regular Service", icon: <BarChart2 size={20} />, path: "/service" },
    { name: "Statistics", icon: <ChartSpline size={20} />, path: "/statistics" },
    { name: "Online manual", icon: <FileText size={20} />, path: "/manual" },
    { name: "Properties", icon: <TableProperties size={20} />, path: "/properties" },
  ];

  return (
    <>
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-50 z-10"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`${
          darkMode ? "bg-gray-800 text-white" : "bg-blue-900 text-white"
        } w-64 h-full fixed top-20 left-0 z-20 transition-all duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          ${!isMobile ? "md:translate-x-0" : ""}`}
      >
        {isMobile && (
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-opacity-20 hover:bg-white"
          >
            <X size={24} />
          </button>
        )}

        <nav className="py-4">
          <ul>
            {menuItems.map((item, index) => {
              const isActive =
                pathname === item.path ||
                (item.name === "Home" && pathname === "/dashboard");
              return (
                <li key={index}>
                  <Link
                    href={item.path}
                    className={`flex items-center py-3 px-6 transition ${
                      isActive
                        ? `bg-white text-${darkMode ? "gray-800" : "blue-900"} font-semibold border-l-4 border-yellow-400 mx-2 rounded-xl`
                        : `text-white hover:bg-${darkMode ? "gray-700" : "blue-800"}`
                    }`}
                    onClick={() => isMobile && setSidebarOpen(false)}
                  >
                    <span className={`mr-3 ${isActive ? (darkMode ? "text-gray-800" : "text-blue-900") : ""}`}>
                      {item.icon}
                    </span>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {isMobile && !sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className={`fixed z-20 bottom-4 right-4 p-2 rounded-full ${
            darkMode ? "bg-gray-700" : "bg-blue-900"
          } text-white shadow-lg`}
        >
          <Menu size={24} />
        </button>
      )}
    </>
  );
}