"use client";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  maxVisible: number;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
  onItemsPerPageChange: (value: number) => void;
  darkMode: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  maxVisible,
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
  darkMode,
}) => {
  const maxVisibleButtons = maxVisible;

  const renderPaginationButtons = () => {
    const buttons = [];
    let startPage = Math.max(
      1,
      currentPage - Math.floor(maxVisibleButtons / 2)
    );
    let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

    if (endPage - startPage + 1 < maxVisibleButtons) {
      startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    if (startPage > 1) {
      buttons.push(
        <button
          key="first"
          onClick={() => onPageChange(1)}
          className={`w-8 h-8 rounded-md border ${
            darkMode
              ? "border-gray-600 hover:bg-gray-700"
              : "border-gray-300 hover:bg-gray-100"
          } text-sm`}
        >
          1
        </button>
      );
      if (startPage > 2)
        buttons.push(
          <span key="ellipsis1" className="px-2">
            ...
          </span>
        );
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`w-8 h-8 flex items-center justify-center rounded-md text-sm ${
            currentPage === i
              ? darkMode
                ? "bg-blue-600 text-white"
                : "bg-blue-500 text-white"
              : darkMode
              ? "border border-gray-600"
              : "border border-gray-300"
          }`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1)
        buttons.push(
          <span key="ellipsis2" className="px-2">
            ...
          </span>
        );
      buttons.push(
        <button
          key="last"
          onClick={() => onPageChange(totalPages)}
          className={`w-8 h-8 rounded-md border ${
            darkMode
              ? "border-gray-600 hover:bg-gray-700"
              : "border-gray-300 hover:bg-gray-100"
          } text-sm`}
        >
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center px-4 py-3 border-t border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-1 mb-3 sm:mb-0">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm disabled:opacity-50 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 mr-1" /> Previous
        </button>

        {renderPaginationButtons()}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm disabled:opacity-50 cursor-pointer"
        >
          Next <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      <div className="flex items-center">
        <span className="ml-8 mr-1 text-sm">Show</span>
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className={`border rounded-md px-2 py-1 text-sm ${
            darkMode
              ? "border-gray-600 bg-gray-700 text-white"
              : "border-gray-300 bg-white text-black"
          }`}
        >
          {[5, 10, 20, 50].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Pagination;
