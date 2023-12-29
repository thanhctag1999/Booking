import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';

const RoomPage = () => {
  return (
    <PageContainer title="Room Page" description="this is Room page">
      <DashboardCard title="Room Page">
        <Typography>This is a room page</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default RoomPage;
