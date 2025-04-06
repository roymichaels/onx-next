import { ShoppingCart } from 'lucide-react';
import React from 'react';

export default function SmallCard({ data }) {
  const { title, number, iconBg, icon: Icon } = data;

  return (
    <div className="rounded-lg shadow-lg dark:bg-gray-700 p-4 m-2 dark:text-gray-50 text-gray-900">
      <div className="flex space-x-4">
        <div
          className={`w-12 h-12  rounded-full items-center flex justify-center ${iconBg}`}
        >
          <Icon className="dark:text-slate-50 text-slate-50" />
        </div>
        <div className="">
          <p>{title}</p>
          <h3 className="text-2xl font-bold">{number}</h3>
        </div>
      </div>
    </div>
  );
}
