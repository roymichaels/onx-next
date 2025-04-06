'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  LayoutGrid,
  Slack,
  Users2,
  ListOrdered,
  ShoppingBasket,
  Store,
  BadgeCheck,
  Settings,
  ExternalLink,
  Grid3x3,
  MapPinPlus,
  Ticket,
  PanelRightClose,
  ShoppingBag,
  Building2,
  Wallet,
  ChevronDown,
  ChevronRight,
  X,
} from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import ThemeSwitcherBtn from './ThemeSwticherBtn';
import Image from 'next/image';
import logo from '@/public/onx-logo-vector.png';

export default function Sidebar({ isCollapsed, setIsCollapsed }) {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

  const sidebarLinks = [
    { title: 'Customers', icon: Users2, href: '/dashboard/customers' },
    { title: 'Markets', icon: ShoppingBasket, href: '/dashboard/markets' },
    { title: 'Businesses', icon: Store, href: '/dashboard/businesses' },
    { title: 'Orders', icon: ListOrdered, href: '/dashboard/orders' },
    { title: 'Staff', icon: BadgeCheck, href: '/dashboard/staff' },
    { title: 'Community', icon: Building2, href: '/dashboard/community' },
    { title: 'Wallet', icon: Wallet, href: '/dashboard/wallet' },
    { title: 'Settings', icon: Settings, href: '/dashboard/settings' },
    { title: 'Online Store', icon: ExternalLink, href: '/' },
  ];

  const catalogLinks = [
    { title: 'Products', icon: ShoppingBag, href: '/dashboard/products' },
    { title: 'Categories', icon: Grid3x3, href: '/dashboard/categories' },
    { title: 'Attributes', icon: MapPinPlus, href: '/dashboard/attributes' },
    { title: 'Coupons', icon: Ticket, href: '/dashboard/coupons' },
    { title: 'Banners', icon: PanelRightClose, href: '/dashboard/banners' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsCollapsed(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsCollapsed]);

  return (
    <aside
      className={`fixed top-0 left-0 z-100 h-full bg-white dark:bg-black 
    text-slate-800 dark:text-slate-50 transition-all duration-300 overflow-y-auto
    border-r border-slate-200 dark:border-slate-800
    ${isCollapsed ? 'hidden lg:block' : 'block w-full lg:w-64'}
  `}
    >
      <div className=" flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
        <Image src={logo} alt="logo" className="w-10 h-auto" />
        <button onClick={() => setIsCollapsed(true)}>
          <X className="w-6 h-6 text-gray-600 dark:text-gray-300 lg:hidden" />
        </button>
      </div>

      <div className="p-4 mt-2 space-y-1">
        {/* Dashboard */}
        <Link
          href="/dashboard"
          onClick={() => setIsCollapsed(true)}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl text-lg font-semibold ${
            pathname === '/dashboard'
              ? 'bg-[#0098EA] text-white'
              : 'hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <LayoutGrid className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>

        <hr className="my-2 border-t border-gray-200 dark:border-gray-700" />

        {/* Catalog */}
        <Collapsible open={openMenu} onOpenChange={setOpenMenu}>
          <CollapsibleTrigger asChild>
            <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800">
              <div className="flex items-center gap-3 text-base font-semibold">
                <Slack className="w-5 h-5" />
                <span className="text-lg">Store Catalog</span>
              </div>
              {openMenu ? (
                <ChevronDown size={18} />
              ) : (
                <ChevronRight size={18} />
              )}
            </button>
          </CollapsibleTrigger>

          <CollapsibleContent className="space-y-1 pl-12 pt-1">
            {catalogLinks.map(({ title, href, icon: Icon }, i) => (
              <Link
                key={i}
                onClick={() => setIsCollapsed(true)}
                href={href}
                className={`flex items-center gap-3 py-2 text-sm font-medium rounded-md  ${
                  pathname === href ? 'text-[#0098EA]' : 'hover:text-[#0098EA]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{title}</span>
              </Link>
            ))}
          </CollapsibleContent>
        </Collapsible>

        {/* Sidebar Links */}
        <div className="space-y-1">
          {sidebarLinks.map(({ title, href, icon: Icon }, i) => (
            <Link
              key={i}
              href={href}
              onClick={() => setIsCollapsed(true)}
              className={`flex items-center gap-3 px-4 py-3 text-lg font-medium  transition-colors rounded-xl ${
                pathname === href
                  ? 'bg-[#0098EA] text-white'
                  : 'hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{title}</span>
            </Link>
          ))}
        </div>

        <div className="pt-6 px-4 justify-center items-center flex">
          <ThemeSwitcherBtn />
        </div>
      </div>
    </aside>
  );
}
