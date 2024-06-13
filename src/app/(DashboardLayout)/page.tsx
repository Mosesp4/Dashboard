'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import HeroCarousel from '@/app/(DashboardLayout)/components/dashboard/HeroCarousel';
import RecentPurchases from '@/app/(DashboardLayout)/components/dashboard/RecentPurchases';
import RecentTransactions from '@/app/(DashboardLayout)/components/dashboard/RecentTransactions';
import ProductPerformance from '@/app/(DashboardLayout)/components/dashboard/ProductPerformance';
import TopProductsCarousel from '@/app/(DashboardLayout)/components/dashboard/TopProductsCarousel';


const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <HeroCarousel />
            <TopProductsCarousel />
            <ProductPerformance />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <RecentPurchases />
              </Grid>
              <Grid item xs={12}>
              <RecentTransactions />
              </Grid>
            </Grid>
          </Grid>
         
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
