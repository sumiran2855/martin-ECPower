import { useTheme } from "@/app/dashboard/layout";
import { useEffect, useState } from "react";
import { Search, User } from "lucide-react";
import Pagination from "@/component/Pagination";
import { getAllUnVerifiedUsers } from "@/controller/user-controller";


interface User {
  companyName: string;
  name: string;
  email: string;
  phoneNumber: string;
  admin: string;
  lastLogin: string;
  status: string; 
  selected?: boolean;
}

const UserList: React.FC = () => {
  const { darkMode } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [users, setUsers] = useState<User[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [paginatedUsers, setPaginatedUsers] = useState<User[]>([]);
  const [EditUser, setEditUser] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const maxVisible = 10;

  // Fetch unverified users dynamically
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");
      const IdToken = localStorage.getItem("IdToken");
      if (token && IdToken) {
        try {
          const userData = await getAllUnVerifiedUsers(token, IdToken);
          const processedUsers = userData.map((user: User) => ({
            ...user,
            selected: false,
          }));
          setUsers(processedUsers);
          setError(null);
        } catch (error) {
          setError("Failed to fetch users. Please try again later.");
        } finally {
          setLoading(false);
        }
      }
    };
    fetchUsers();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

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
      <div className="p-4 pb-2">
        <div className="flex items-center mb-2">
          <div
            className={`${darkMode ? "text-blue-300" : "text-blue-500"} mr-2`}
          >
            <User className="w-7 h-7 text-blue-500" />
          </div>
          <h2 className="text-xl font-semibold">Not verified accounts</h2>
        </div>
      </div>

      {/* Table */}
      <div className=" mx-8 flex justify-end mb-4">
        <form onSubmit={handleSearch} className="relative w-full max-w-md">
          <div className="relative w-full max-w-md">
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
      <div className="overflow-x-auto px-6 py-3">
        <table className="w-full min-w-full mb-6">
          <thead>
            <tr
              className={`${
                darkMode ? "bg-gray-700" : "bg-gray-100"
              } rounded-l-lg ${
                darkMode ? "border-gray-600" : "border-gray-200"
              }`}
            >
              <th className="text-left px-4 py-2 font-medium">Name</th>
              <th className="text-left px-4 py-2 font-medium">Company</th>
              <th className="text-left px-4 py-2 font-medium">
                E-mail address
              </th>
              <th className="text-center px-4 py-2 font-medium">Send link</th>
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
                <td className="px-4 py-3 text-sm cursor-pointer">
                  {user.name}
                </td>
                <td className="px-4 py-3 text-sm">{user.companyName}</td>
                <td className="px-4 py-3 text-sm">{user.email}</td>
                <td className="px-4 py-3 text-sm text-center">
                  <button
                    className={`px-4 py-1 rounded border cursor-pointer ${
                      darkMode
                        ? "border-yellow-600 text-yellow-500 hover:bg-yellow-900"
                        : "border-yellow-500 text-yellow-500 hover:bg-yellow-50"
                    }`}
                  >
                    Resend Email
                  </button>
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
    </div>
  );
};

export default UserList;
