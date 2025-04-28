import { useTheme } from "@/app/dashboard/layout";
import { useEffect, useState } from "react";
import { ChevronRight, User } from "lucide-react";
import Pagination from "@/component/Pagination";
import EditUsers from "./edit-user";

interface User {
  company: string;
  name: string;
  email: string;
  phone: string;
  admin: string;
  lastLogin: string;
  selected?: boolean;
}

const UserList: React.FC = () => {
  const { darkMode } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [users, setUsers] = useState<User[]>([
    {
      company: "CARB TEST",
      name: "EC POWER IT",
      email: "test@test.org",
      phone: "004540316079",
      admin: "20",
      lastLogin: "02-11-24 15:14",
    },
    {
      company: "CARB TEST",
      name: "EC POWER IT",
      email: "test@test.org",
      phone: "004540316079",
      admin: "20",
      lastLogin: "02-11-24 15:14",
    },
    {
      company: "CARB TEST",
      name: "EC POWER IT",
      email: "test@test.org",
      phone: "004540316079",
      admin: "20",
      lastLogin: "02-11-24 15:14",
    },
    {
      company: "CARB TEST",
      name: "EC POWER IT",
      email: "test@test.org",
      phone: "004540316079",
      admin: "20",
      lastLogin: "02-11-24 15:14",
    },
    {
      company: "CARB TEST",
      name: "EC POWER IT",
      email: "test@test.org",
      phone: "004540316079",
      admin: "20",
      lastLogin: "02-11-24 15:14",
    },
    {
      company: "CARB TEST",
      name: "EC POWER IT",
      email: "test@test.org",
      phone: "004540316079",
      admin: "20",
      lastLogin: "02-11-24 15:14",
    },
    {
      company: "CARB TEST",
      name: "EC POWER IT",
      email: "test@test.org",
      phone: "004540316079",
      admin: "20",
      lastLogin: "02-11-24 15:14",
    },
    {
      company: "CARB TEST",
      name: "EC POWER IT",
      email: "test@test.org",
      phone: "004540316079",
      admin: "20",
      lastLogin: "02-11-24 15:14",
    },
    {
      company: "CARB TEST",
      name: "EC POWER IT",
      email: "test@test.org",
      phone: "004540316079",
      admin: "20",
      lastLogin: "02-11-24 15:14",
    },
    {
      company: "CARB TEST",
      name: "EC POWER IT",
      email: "test@test.org",
      phone: "004540316079",
      admin: "20",
      lastLogin: "02-11-24 15:14",
    },
    {
      company: "CARB TEST",
      name: "EC POWER IT",
      email: "test@test.org",
      phone: "004540316079",
      admin: "20",
      lastLogin: "02-11-24 15:14",
    },
  ]);
  const [totalPages, setTotalPages] = useState(0);
  const [paginatedUsers, setPaginatedUsers] = useState<User[]>([]);
  const [EditUser, setEditUser] = useState(false);
  const maxVisible = 10;

  useEffect(() => {
    const calculatedTotalPages = Math.ceil(users.length / itemsPerPage);
    setTotalPages(calculatedTotalPages);

    if (currentPage > calculatedTotalPages) {
      setCurrentPage(calculatedTotalPages || 1);
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedUsers(users.slice(startIndex, endIndex));
  }, [currentPage, itemsPerPage, users]);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-50"
      } rounded-lg shadow-sm transition-colors w-full`}
    >
      {!EditUser ? (
        <>
          <div className="p-4 pb-2">
            <div className="flex items-center mb-2">
              <div
                className={`${
                  darkMode ? "text-blue-300" : "text-blue-500"
                } mr-2`}
              >
                <User className="w-7 h-7 text-blue-500" />
              </div>
              <h2 className="text-xl font-semibold">User</h2>
            </div>
            <p
              className={`text-sm ml-8 mb-4 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              The list below shows all users of the EC Power service database
              and their rights. To edit a user click on the name in question
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto px-6 py-3">
            <table className="w-full min-w-full">
              <thead>
                <tr
                  className={`${
                    darkMode ? "bg-gray-700" : "bg-gray-100"
                  } rounded-l-lg ${
                    darkMode ? "border-gray-600" : "border-gray-200"
                  }`}
                >
                  <th className="text-left px-4 py-2 font-medium">Company</th>
                  <th className="text-left px-4 py-2 font-medium">Name</th>
                  <th className="text-left px-4 py-2 font-medium">
                    E-mail address
                  </th>
                  <th className="text-left px-4 py-2 font-medium">
                    Cell phone no.
                  </th>
                  <th className="text-left px-4 py-2 font-medium">
                    Administrator
                  </th>
                  <th className="text-left px-4 py-2 font-medium">
                    Last login
                  </th>
                  <th
                    className="text-right px-4 py-2 font-medium"
                    colSpan={3}
                  ></th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.map((user, index) => (
                  <tr
                    key={index}
                    className={`${
                      darkMode
                        ? "border-gray-700 hover:bg-gray-700"
                        : "border-gray-200 hover:bg-gray-50"
                    } border-b transition-colors`}
                  >
                    <td className="px-4 py-3 text-sm">{user.company}</td>
                    <td className="px-4 py-3 text-sm cursor-pointer">
                      {user.name}
                    </td>
                    <td className="px-4 py-3 text-sm">{user.email}</td>
                    <td className="px-4 py-3 text-sm">{user.phone}</td>
                    <td className="px-4 py-3 text-sm">{user.admin}</td>
                    <td className="px-4 py-3 text-sm">{user.lastLogin}</td>
                    <td className="p-2">
                      <button
                        className={`px-4 py-1 rounded border cursor-pointer ${
                          darkMode
                            ? "border-red-600 text-red-500 hover:bg-red-900"
                            : "border-red-500 text-red-500 hover:bg-red-50"
                        }`}
                      >
                        Deactivate
                      </button>
                    </td>
                    <td className="p-2">
                      <button
                        className={`px-4 py-1 rounded border cursor-pointer ${
                          darkMode
                            ? "border-red-600 text-red-500 hover:bg-red-900"
                            : "border-red-500 text-red-500 hover:bg-red-50"
                        }`}
                      >
                        Delete
                      </button>
                    </td>
                    <td
                      className="p-4 text-center cursor-pointer"
                      onClick={() => setEditUser(true)}
                    >
                      <ChevronRight
                        size={20}
                        className={`${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Component */}
          <Pagination
            maxVisible={maxVisible}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={goToPage}
            itemsPerPage={itemsPerPage}
            onItemsPerPageChange={handleItemsPerPageChange}
            darkMode={darkMode}
          />
        </>
      ) : (
        <EditUsers onCancel={() => setEditUser(false)} />
      )}
    </div>
  );
};

export default UserList;
