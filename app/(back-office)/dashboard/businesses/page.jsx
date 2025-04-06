import PageHeader from '@/components/backoffice/PageHeader';
import TableActions from '@/components/backoffice/TableActions';
import React from 'react';

export default function Businesses() {
  return (
    <div>
      {/* Header */}

      <PageHeader
        heading="Businesses"
        href="/dashboard/business/new"
        linkTitle="Create A Business"
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
