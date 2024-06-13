import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, Box } from '@mui/material';
import { IconShoppingCart } from '@tabler/icons-react';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';


const recentPurchases = [
  { name: 'John Doe', amount: '$200', status: 'Complete' },
  { name: 'Jane Smith', amount: '$150', status: 'Pending' },
  { name: 'Bob Johnson', amount: '$300', status: 'Complete' },
  { name: 'Alice Brown',  amount: '$250', status: 'Pending' },
  { name: 'Charlie Davis',  amount: '$100', status: 'Complete' },
  { name: 'Diana Green', amount: '$400', status: 'Pending' },
];

const RecentPurchases: React.FC = () => {
  const theme = useTheme();

  return (
    <DashboardCard title={
      <Box display="flex" alignItems="center">
        <IconShoppingCart size={24} />
        <Typography variant="h6" ml={1}>
          Recent Purchases
        </Typography>
      </Box>
    }>
      <Box sx={{ padding: 2 }}>
      
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recentPurchases.map((purchase, index) => (
                <TableRow key={index}>
                  <TableCell>{purchase.name}</TableCell>
                  <TableCell>{purchase.amount}</TableCell>
                  <TableCell>
                    <Chip
                      label={purchase.status}
                      color={purchase.status === 'Complete' ? 'success' : 'warning'}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        
      </Box>
    </DashboardCard>
  );
};

export default RecentPurchases;
