import { useTheme } from "@/app/dashboard/layout";
import { ChevronRight } from "lucide-react";

interface Props {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  setItemsPerPage: any;
  handlePageChange: (page: number) => void;
  renderPageNumbers: any;
}

export default function PaginationControls({
  currentPage,
  totalPages,
  itemsPerPage,
  setItemsPerPage,
  handlePageChange,
  renderPageNumbers,
}: Props) {
  const { darkMode } = useTheme();
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4">
      <div className="flex flex-wrap items-center justify-center sm:justify-start space-x-1 sm:space-x-2 w-full sm:w-auto">
        <button
          className={`px-3 py-1 border rounded-md flex items-center text-sm cursor-pointer ${
            darkMode
              ? "border-gray-600 text-gray-100 hover:bg-gray-700"
              : "border-gray-300 text-gray-800 hover:bg-gray-100"
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronRight size={16} className="transform rotate-180 mr-1" />{" "}
          Previous
        </button>
        {/* Page numbers */}
        {renderPageNumbers()}
        <button
          className={`px-3 py-1 border rounded-md flex items-center text-sm cursor-pointer ${
            darkMode
              ? "border-gray-600 text-gray-100 hover:bg-gray-700"
              : "border-gray-300 text-gray-800 hover:bg-gray-100"
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
          <ChevronRight size={16} className="ml-1" />
        </button>
      </div>

      <div className="flex items-center w-full sm:w-auto justify-center sm:justify-end">
        <span
          className={`text-sm mr-2 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Show
        </span>
        <select
          className={`border rounded-md px-2 py-1 text-sm cursor-pointer ${
            darkMode
              ? "bg-gray-800 text-gray-100 border-gray-600"
              : "bg-white text-gray-800 border-gray-300"
          }`}
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
    </div>
  );
}
