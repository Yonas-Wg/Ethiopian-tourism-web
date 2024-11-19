import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ComingSoon = () => {
  const handleBackClick = () => {
    // Logic to navigate back or redirect to home
    window.history.back(); // Example: Navigates to the previous page
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        color: '#364D93',
        padding: '20px',
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
        🚧 Coming Soon
      </Typography>
      <Typography variant="h6" sx={{ color: '#7a7a7a', mb: 3 }}>
        We're working hard to bring you this feature.
      </Typography>
      <Button
        variant="contained"
        size="medium"
        onClick={handleBackClick}
        sx={{
          backgroundColor: 'rgba(54, 93, 147, 0.9)',
          color: 'white',
          '&:hover': { backgroundColor: 'rgba(54, 93, 147, 0.7)' },
        }}
      >
        <ArrowBackIcon sx={{ pr: '5px' }} />
        Back
      </Button>
    </Box>
  );
};

export default ComingSoon;
