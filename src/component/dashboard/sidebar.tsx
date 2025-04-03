"use client";
import { useState, useEffect } from "react";
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
} from "lucide-react";

const XrgiIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="16"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M8 10C8 8.89543 8.89543 8 10 8H14C15.1046 8 16 8.89543 16 10V14C16 15.1046 15.1046 16 14 16H10C8.89543 16 8 15.1046 8 14V10Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

type MenuItem = {
  name: string;
  icon: React.ReactNode;
  path: string;
};

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setSidebarOpen(window.innerWidth >= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const menuItems: MenuItem[] = [
    { name: "Home", icon: <Home size={20} />, path: "/dashboard" }, // Set /dashboard as Home
    { name: "XRGI®", icon: <XrgiIcon />, path: "/xrgi" },
    {
      name: "Regular Service",
      icon: <BarChart2 size={20} />,
      path: "/service",
    },
    {
      name: "Statistics",
      icon: <ChartSpline size={20} />,
      path: "/statistics",
    },
    { name: "Online manual", icon: <FileText size={20} />, path: "/manual" },
    {
      name: "Properties",
      icon: <TableProperties size={20} />,
      path: "/properties",
    },
  ];

  return (
    <div>
      {isMobile && !sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed z-20 bottom-4 right-4 p-2 rounded-full bg-blue-900 text-white shadow-lg"
        >
          <Menu size={24} />
        </button>
      )}

      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-50 z-10"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`bg-blue-900 text-white w-64 h-full fixed top-[64px] left-0 z-20 transition-transform duration-300 ease-in-out
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:static`}
      >
        {isMobile && (
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-4 text-white"
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
                    className={`flex items-center py-3 px-4 transition ${
                      isActive
                        ? "bg-white text-blue-900 font-semibold border-l-4 border-yellow-400 mx-2 rounded-xl"
                        : "text-white hover:bg-blue-800"
                    }`}
                  >
                    <span className={`mr-3 ${isActive ? "text-blue-900" : ""}`}>
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
    </div>
  );
}
