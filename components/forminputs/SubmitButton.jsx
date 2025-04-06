import { Plus } from 'lucide-react';
import React from 'react';

export default function SubmitButton({
  isLoading,
  buttonTitle,
  LoadingButtonTitle,
  disabled,
}) {
  return (
    <div className="sm:col-span-1 items-center align-center justify-center w-full">
      <button
        type="submit"
        disabled={isLoading || disabled}
        className={`inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white rounded-lg focus:ring-4
          ${
            disabled || isLoading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-200 dark:focus:ring-blue-900'
          }`}
      >
        {isLoading ? (
          <>
            `
            <svg
              className="inline w-4 h-4 mr-3 text-white animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
            ` {LoadingButtonTitle}
          </>
        ) : (
          <>
            <Plus className="w-5 h-5 mr-2" />
            <span>{buttonTitle}</span>
          </>
        )}
      </button>
    </div>
  );
}
