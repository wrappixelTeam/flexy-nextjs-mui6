'use client'
import { Grid2 as Grid, Box } from '@mui/material';
import PageContainer from '@/app/components/container/PageContainer';
// components
import SalesOverview from '@/app/components/dashboard/SalesOverview';
import DailyActivity from '@/app/components/dashboard/DailyActivity';
import ProductPerformance from '@/app/components/dashboard/ProductPerformance';
import BlogCard from '@/app/components/dashboard/Blog';
import BaseCard from '../components/shared/BaseCard';
import { Typography } from "@mui/material";

export default function Dashboard() {

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box mt={3}>
        <BaseCard title='Sample page'>
          <Typography
            color="textSecondary"
            variant="h5"
            fontWeight="400"
            sx={{ my: 0, py: 0 }}
          >
            This is a sample page
          </Typography>
        </BaseCard>
      </Box>
    </PageContainer>
  )
}

