import React from 'react';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function FormHeader({ title }) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between py-6 px-4 dark:bg-neutral-800 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="flex-grow" />
      <button onClick={() => router.back()}>
        <X />
      </button>
    </div>
  );
}
