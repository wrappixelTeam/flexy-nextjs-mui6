"use client";
import PageContainer from '@/app/components/container/PageContainer';

import DashboardCard from '../components/shared/DashboardCard';
import { Typography } from '@mui/material';

export default function Dashboard() {

  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard title="Sample Page">
        <Typography>This is a sample2 page</Typography>
      </DashboardCard>
    </PageContainer>
  )
}

