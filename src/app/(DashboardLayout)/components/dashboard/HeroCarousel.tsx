import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const images = [
  '/images/product1.jpg', 
  '/images/product2.jpg',
  '/images/product3.jpg',
  '/images/product4.jpg'
];

const HeroCarousel: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '300px',
        borderRadius: '16px',
        overflow: 'hidden', // Ensure the border radius is applied to children
      }}
    >
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={5000}
        showStatus={false}
        showIndicators={true}
      >
        {images.map((src, index) => (
          <Box
            key={index}
            component="img"
            src={src}
            sx={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '16px' }}
          />
        ))}
      </Carousel>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'left',
          paddingLeft: '20px',
          borderRadius: '16px',
        }}
      >
        <Container>
          <Typography variant="h2" sx={{ color: 'white', mb: 2 }}>
            Proxy Market
          </Typography>
          <Typography variant="h6" sx={{ color: 'white' }}>
            We offer the best online market experience with over 100 million IP Pools.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroCarousel;
