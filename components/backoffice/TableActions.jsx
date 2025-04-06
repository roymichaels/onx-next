import React from 'react';
import { Download, Trash } from 'lucide-react';

export default function TableActions() {
  return (
    <div>
      <div className="flex justify-between py-4 px-4 sm:px-8 rounded-lg gap-4 sm:gap-8 items-center dark:bg-[#1F1F21] bg-gray-100">
        {/* Export Button */}
        <button className="flex items-center justify-center text-black bg-transparent dark:bg-white dark:text-black hover:bg-black hover:text-white border border-black dark:border-white font-medium rounded-lg text-sm p-2 sm:px-5 sm:py-2.5 text-center dark:focus:ring-black transition-all">
          <Download className="w-5 h-5" />
          <span className="ml-2 hidden sm:inline">Export</span>
        </button>

        {/* Search */}
        <div className="flex-grow sm:w-auto">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 py-2 dark:focus:border-blue-500 w-full justify-center align placeholder:align-middle"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Delete Button */}
        <button className="flex items-center justify-center text-white bg-red-500 font-medium rounded-lg text-sm p-2 sm:px-5 sm:py-2.5 text-center dark:focus:ring-red-600 transition-all">
          <Trash className="w-5 h-5" />
          <span className="ml-2 hidden sm:inline">Delete All</span>
        </button>
      </div>
    </div>
  );
}
