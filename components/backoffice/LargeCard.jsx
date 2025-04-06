import { Layers } from 'lucide-react';
import React from 'react';

export default function LargeCard({ data }) {
  return (
    <div
      className={`rounded-lg text-white shadow-lg p-8 m-2 flex items-center flex-col gap-2 ${data.color}`}
    >
      <Layers className="text-slate-50 " />
      <h4 className="text-slate-50">{data.period}</h4>
      <h2 className="lg:text-3xl text-2xl text-slate-50">UGX{data.sales}</h2>
    </div>
  );
}
