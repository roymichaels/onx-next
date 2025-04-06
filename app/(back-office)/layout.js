'use client';

import Navbar from '@/components/backoffice/Navbar';
import Sidebar from '@/components/backoffice/Sidebar';
import React, { useState } from 'react';

export default function RootLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(true); // collapsed by default on mobile

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Navbar always at top */}
      <Navbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <div className="flex">
        {/* Sidebar is responsive */}
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

        {/* Main content */}
        <div
          className="
            transition-all duration-300 min-h-screen w-full
            bg-white dark:bg-black
            pt-16 px-4
            sm:ml-60 
          "
        >
          <main className="text-gray-800 dark:text-slate-50">{children}</main>
        </div>
      </div>
    </div>
  );
}
