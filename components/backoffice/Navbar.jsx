import { User, Sun, Bell, X } from 'lucide-react';
import { AlignJustify } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LayoutDashboard } from 'lucide-react';
import { Settings } from 'lucide-react';
import { LogOut } from 'lucide-react';

export default function Navbar({ isCollapsed, setIsCollapsed }) {
  return (
    <div
      className={`z-50 flex items-center justify-between text-slate-800 dark:text-slate-50 h-15 py-4 fixed top-0 w-full px-8 z-50 bg-white dark:bg-black ${
        !isCollapsed ? '' : ''
      }`}
    >
      <button
        onClick={() => setIsCollapsed((prev) => !prev)}
        className="lg:hidden p-2"
      >
        <AlignJustify className="w-6 h-6" />
      </button>

      {/* Right side (Profile + Notifications) */}
      <div className="flex items-center space-x-3 ml-auto">
        {/* Notification bell */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="relative inline-flex items-center p-3 text-sm font-medium text-center text-slate-800 dark:text-slate-50 rounded-full"
            >
              <Bell />
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 rounded-full -top-1 end-2 dark:border-gray-900">
                20
              </div>
            </button>
          </DropdownMenuTrigger>{' '}
          <DropdownMenuContent className="bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-50 px-4 py-2 pr-8">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Image
                  width={200}
                  height={200}
                  src="/profile.png"
                  alt="User Profile"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p>Alex Rozen has been following you...</p>
                  <div className="flex item-center space-x-2">
                    <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm">
                      New Follow
                    </p>
                    <p>Dec 12 2021 - 12:40pm</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Image
                  width={200}
                  height={200}
                  src="/profile.png"
                  alt="User Profile"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p>Alex Rozen has been following you...</p>
                  <div className="flex item-center space-x-2">
                    <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm">
                      New Follow
                    </p>
                    <p>Dec 12 2021 - 12:40pm</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Image
                  width={200}
                  height={200}
                  src="/profile.png"
                  alt="User Profile"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p>Alex Rozen has been following you...</p>
                  <div className="flex item-center space-x-2">
                    <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm">
                      New Follow
                    </p>
                    <p>Dec 12 2021 - 12:40pm</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <button className="flex items-center space-x-2 justify-center align-center w-full">
                View all
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              width={200}
              height={200}
              src="/profile.png"
              alt="User Profile"
              className="w-8 h-8 rounded-full"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-50 px-4 py-2 pr-8">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <Settings className="mr-2 h-4 w-4" />
                Edit Profile
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
