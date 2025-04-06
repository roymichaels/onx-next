import React from 'react';
import SmallCard from './SmallCard';
import { ShoppingCart, RefreshCcw, Loader2, CheckCheck } from 'lucide-react';

export default function SmallCards() {
  const orderStatus = [
    {
      title: 'Total Orders',
      number: 10,
      iconBg: 'bg-blue-600',
      icon: ShoppingCart,
    },
    {
      title: 'Orders Pending',
      number: 4,
      iconBg: 'bg-blue-600',
      icon: Loader2,
    },
    {
      title: 'Oreders Proccesing',
      number: 3,
      iconBg: 'bg-blue-600',
      icon: RefreshCcw,
    },
    {
      title: 'Orders Delivered',
      number: 3,
      iconBg: 'bg-blue-600',
      icon: CheckCheck,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-5">
      {orderStatus.map((data, i) => {
        return <SmallCard data={data} key={i} />;
      })}
    </div>
  );
}
