'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeSwitcherBtn({ isCollapsed, setIsCollapsed }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex items-center justify-center dark:text-black bg-transparent text-black  dark:text-white hover:bg-black hover:text-white border border-black dark:border-white font-medium rounded-lg text-sm p-2 sm:px-5 sm:py-2.5 text-center dark:focus:ring-black transition-all "
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  );
}
