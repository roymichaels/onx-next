import PageHeader from '@/components/backoffice/PageHeader';
import TableActions from '@/components/backoffice/TableActions';
import React from 'react';

export default function page() {
  return (
    <div>
      {/* Header */}

      <PageHeader
        heading="Banners"
        href="/dashboard/banners/new"
        linkTitle="Add Banner"
      />
      {/* Table Actions */}
      <TableActions />
      {/* Export || Search || Bulk Delete */}

      <div className="py-8">
        <h2>Table</h2>
      </div>
    </div>
  );
}
