import React from 'react';
import Slider from 'react-slick';
import Link from "next/link";
import {
  Box,
  CardContent,
  Typography,
  Rating,
  Tooltip,
  Fab,
  Avatar,
  Stack
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import BlankCard from "@/app/(DashboardLayout)/components/shared/BlankCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ecoCard = [
  {
    title: "Boat Headphone",
    subheader: "September 14, 2023",
    photo: '/images/products/s4.jpg',
    salesPrice: 375,
    price: 285,
    rating: 4,
  },
  {
    title: "MacBook Air Pro",
    subheader: "September 14, 2023",
    photo: '/images/products/s5.jpg',
    salesPrice: 650,
    price: 900,
    rating: 5,
  },
  {
    title: "Red Valvet Dress",
    subheader: "September 14, 2023",
    photo: '/images/products/s7.jpg',
    salesPrice: 150,
    price: 200,
    rating: 3,
  },
  {
    title: "Cute Soft Teddybear",
    subheader: "September 14, 2023",
    photo: '/images/products/s11.jpg',
    salesPrice: 285,
    price: 345,
    rating: 2,
  },
  {
    title: "Sony Headphones",
    subheader: "September 14, 2023",
    photo: '/images/products/SonyHeadfone.jpg',
    salesPrice: 200,
    price: 150,
    rating: 5,
  },
  {
    title: "Apple iPhone 15pro",
    subheader: "September 14, 2023",
    photo: '/images/products/Iphone.jpg',
    salesPrice: 1200,
    price: 1000,
    rating: 5,
  },
  {
    title: "Samsung Galaxy S21",
    subheader: "September 14, 2023",
    photo: '/images/products/Galaxy.jpg',
    salesPrice: 900,
    price: 750,
    rating: 4,
  },
  {
    title: "Nike Running Shoes",
    subheader: "September 14, 2023",
    photo: '/images/products/nike.jpg',
    salesPrice: 120,
    price: 100,
    rating: 4,
  },
];

const TopProductsCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '300px', mt: 4, mb: 12 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Top Products
      </Typography>
      <Slider {...settings}>
        {ecoCard.map((product, index) => (
          <Box key={index} sx={{ px: 2 }}>
            <BlankCard>
              <Typography component={Link} href="/">
                <Avatar
                  src={product.photo} variant="square"
                  sx={{
                    height: 250,
                    width: '100%',
                    borderRadius: '16px'
                  }}
                />
              </Typography>
              <Tooltip title="Add To Cart">
                <Fab
                  size="small"
                  sx={{ 
                    bottom: "75px", 
                    right: "15px", 
                    position: "absolute", 
                    backgroundColor: "#ff9800", // Custom background color
                    '&:hover': {
                      backgroundColor: "#e68900", // Darker shade on hover
                    }
                  }}
                >
                  <ShoppingCart />
                </Fab>
              </Tooltip>
              <CardContent sx={{ p: 3, pt: 2 }}>
                <Typography variant="h6">{product.title}</Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  mt={1}
                >
                  <Stack direction="row" alignItems="center">
                    <Typography variant="h6">${product.price}</Typography>
                    <Typography
                      color="textSecondary"
                      ml={1}
                      sx={{ textDecoration: "line-through" }}
                    >
                      ${product.salesPrice}
                    </Typography>
                  </Stack>
                  <Rating
                    name="read-only"
                    size="small"
                    value={product.rating}
                    readOnly
                  />
                </Stack>
              </CardContent>
            </BlankCard>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default TopProductsCarousel;
