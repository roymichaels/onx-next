import React from 'react';
import Heading from './Heading';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function PageHeader({ heading, linkTitle, href }) {
  return (
    <div className="flex justify-between ">
      <Heading title={heading} />
      <Link
        className="flex items-center justify-center text-white bg-[#0098EA] hover:bg-[#0098EA]/90 focus:ring-4 focus:outline-none focus:ring-[#0098EA]/50 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center dark:focus:ring-[#0098EA]/55 me-2 mb-5 sm:px-5 sm:py-2.5"
        href={href}
      >
        <Plus className="" />
        <span className="hidden sm:inline">{linkTitle}</span>
      </Link>
    </div>
  );
}
