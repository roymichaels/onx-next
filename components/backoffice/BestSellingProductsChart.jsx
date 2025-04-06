'use client';

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingProducts() {
  const data = {
    labels: [
      'Rainbow Zkittlez',
      'Pharmacy Bags',
      'Word Search',
      'Sherbert',
      'Purple Ayuhasca',
      'Orange California',
    ],
    datasets: [
      {
        label: '# of Quantity sold',
        data: [200, 150, 50, 20, 15, 7],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-8 m-2 shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-slate-500 dark:text-slate-50">
        Best Selling Charts
      </h2>
      <div className="p-4">
        <Pie data={data} className="text-slate-500 dark:text-slate-200" />
      </div>
    </div>
  );
}
