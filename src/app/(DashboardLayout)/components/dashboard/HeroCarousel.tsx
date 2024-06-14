import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

const images = [
  '/images/backgrounds/img_1.jpg', 
  '/images/backgrounds/img_2.jpeg',
  '/images/backgrounds/img_3.png',
  '/images/backgrounds/img_4.png'
];

const HeroCarousel: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '300px',
        borderRadius: '16px',
        overflow: 'hidden', 
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
          <Typography variant="body1" sx={{ color: 'white', mb: 2 }}>
            We offer the best online market experience with over 100 million IP Pools.<br/>
            Choose between rotation or sticky options, all with high-speed connectivity.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Explore
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroCarousel;
