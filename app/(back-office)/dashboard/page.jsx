import React from 'react';
import Heading from '../../../components/backoffice/Heading';
import LargeCards from '../../../components/backoffice/LargeCards';
import SmallCards from '../../../components/backoffice/SmallCards';
import DashboardCharts from '../../../components/backoffice/DashboardCharts';
import CustomDataTable from '../../../components/backoffice/CustomDataTable';

export default function Dashboard() {
  return (
    <div>
      <Heading title={'Dashboard Overview'} />
      <LargeCards />
      {/* Small Cards */}
      <SmallCards />
      {/* Charts  */}
      <DashboardCharts />
      {/* Recent Orders Table */}
      <CustomDataTable />
    </div>
  );
}
