"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  BarChart2,
  FileText,
  Menu,
  X,
  ChartSpline,
  TableProperties,
  PanelsLeftBottom,
  ChevronDown,
} from "lucide-react";
import { useTheme } from "@/app/dashboard/layout";
import { useEffect, useState } from "react";

type MenuItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string }[];
};

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  isMobile,
}: any) {
  const pathname = usePathname();
  const router = useRouter();
  const { darkMode } = useTheme();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    { name: "Home", icon: <Home size={20} />, path: "/dashboard" },
    {
      name: "XRGI®",
      icon: <PanelsLeftBottom />,
      path: "/dashboard/xrgi", 
      subItems: [
        { name: "Unit list", path: "/dashboard/xrgi/unit-list" },
        { name: "Add to waitlist", path: "/dashboard/xrgi/add-to-waitlist" },
        { name: "Registration of tests", path: "/dashboard/xrgi/registration-of-tests" },
        { name: "Registration of visits", path: "/dashboard/xrgi/registration-of-visits" },
      ],
    },
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

  useEffect(() => {
    for (const item of menuItems) {
      if (item.subItems) {
        if (pathname === item.path) {
          setActiveTab(item.name);
          setOpenDropdown(item.name);
          return;
        }

        for (const subItem of item.subItems) {
          if (pathname.startsWith(subItem.path)) {
            setActiveTab(item.name);
            setOpenDropdown(item.name);
            return;
          }
        }
      } else if (item.path && pathname === item.path) {
        setActiveTab(item.name);
        setOpenDropdown(null);
        return;
      }
    }
    setActiveTab(null);
    setOpenDropdown(null);
  }, [pathname]);

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
              const isParentActive = item.name === activeTab;
              const isOpen = openDropdown === item.name;

              return (
                <li key={index} className="relative px-4 my-1">
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => {
                          setActiveTab(item.name);
                          setOpenDropdown(item.name);
                          router.push(item.path || "#");
                          if (isMobile) setSidebarOpen(false);
                        }}
                        className={`flex justify-between items-center w-full py-3 px-4 rounded-lg transition cursor-pointer ${
                          isParentActive
                            ? "bg-white text-blue-900 font-medium border-l-4 border-yellow-400"
                            : "text-white hover:bg-blue-800"
                        }`}
                      >
                        <div className="flex items-center">
                          <span className="mr-3">{item.icon}</span>
                          {item.name}
                        </div>
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <ul className="mt-1 bg-white text-blue-900 rounded-lg overflow-hidden">
                          {item.subItems.map((subItem, subIndex) => {
                            const isSubActive = pathname.startsWith(subItem.path);
                            return (
                              <li key={subIndex}>
                                <Link
                                  href={subItem.path}
                                  className={`block py-3 px-4 hover:bg-gray-100 transition ${
                                    isSubActive
                                      ? "bg-gray-100 border-l-4 border-yellow-400"
                                      : ""
                                  }`}
                                  onClick={() => {
                                    if (isMobile) setSidebarOpen(false);
                                  }}
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.path || "#"}
                      className={`flex items-center py-3 px-4 rounded-lg transition ${
                        pathname === item.path
                          ? "bg-white text-blue-900 font-medium border-l-4 border-yellow-400"
                          : "text-white hover:bg-blue-800"
                      }`}
                      onClick={() => {
                        if (isMobile) setSidebarOpen(false);
                        setActiveTab(item.name);
                        setOpenDropdown(null);
                      }}
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.name}
                    </Link>
                  )}
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
