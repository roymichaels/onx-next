import React from 'react';
import LargeCard from './LargeCard';

export default function LargeCards() {
  const orderStats = [
    {
      period: "Today's Orders",
      sales: 10,
      color: 'bg-blue-500',
    },
    {
      period: "Yesterday's Orders",
      sales: 14,
      color: 'bg-blue-600',
    },
    {
      period: "This Week's Orders",
      sales: 75,
      color: 'bg-blue-700',
    },
    {
      period: "This Month's Orders",
      sales: 251,
      color: 'bg-blue-800',
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {orderStats.map((stat, i) => {
        return <LargeCard className={'bg-green-600'} data={stat} key={i} />;
      })}
    </div>
  );
}
