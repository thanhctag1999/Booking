import React from 'react';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import HorizontalCalendar from './components/HorizontalCalendar';

const RoomPage = () => {
  return (
    <PageContainer title="Room Page" description="this is Room page">
      <DashboardCard title="List Room">
        <HorizontalCalendar />
      </DashboardCard>
    </PageContainer>
  );
};

export default RoomPage;
