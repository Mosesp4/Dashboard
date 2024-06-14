import {
    Typography,
    Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip
  } from '@mui/material';
  import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
  
  const products = [
    {
      id: "1",
      name: "Nike Air Max",
      category: "Shoes",
      status: "In Stock",
      pbg: "success.main",
      price: "120.00",
    },
    {
      id: "2",
      name: "Apple iPhone 13",
      category: "Electronics",
      status: "Limited Stock",
      pbg: "warning.main",
      price: "999.00",
    },
    {
      id: "3",
      name: "Samsung Galaxy S21",
      category: "Electronics",
      status: "Out of Stock",
      pbg: "error.main",
      price: "799.00",
    },
    {
      id: "4",
      name: "Adidas Running Shoes",
      category: "Shoes",
      status: "In Stock",
      pbg: "success.main",
      price: "85.00",
    },
  ];
  
  const ProductPerformance = () => {
    return (
      <DashboardCard title="Product Performance">
        <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' }, mt: 5 }}>
          <Table
            aria-label="simple table"
            sx={{
              whiteSpace: "nowrap",
              mt: 2
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Id
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Product Name
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Category
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Status
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="subtitle2" fontWeight={600}>
                    Price
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      {product.id}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight={600}>
                      {product.name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                      {product.category}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      sx={{
                        px: "4px",
                        backgroundColor: product.pbg,
                        color: "#fff",
                      }}
                      size="small"
                      label={product.status}
                    ></Chip>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6">${product.price}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </DashboardCard>
    );
  };
  
  export default ProductPerformance;
  