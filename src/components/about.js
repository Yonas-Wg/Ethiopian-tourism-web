import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box, Grid, Card, AppBar, Toolbar,IconButton  } from '@mui/material';
import { NavLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Facebook, Twitter, Instagram } from '@mui/icons-material'; 


const teamMembers = [
    {
        name: 'John Doe',
        role: 'Founder & CEO',
        description: 'John is passionate about showcasing Ethiopia’s breathtaking beauty and rich culture, ensuring each visitor has a memorable experience.',
        image: 'https://via.placeholder.com/300x200?text=John+Doe',
    },
    {
        name: 'Jane Smith',
        role: 'Tour Guide',
        description: 'Jane is an expert in Ethiopian history and culture, dedicated to providing insightful and unforgettable journeys through the country’s treasures.',
        image: 'https://via.placeholder.com/300x200?text=Jane+Smith',
    },
    {
        name: 'Smith Drown',
        role: 'Cultural Specialist',
        description: 'Smith brings Ethiopia’s rich traditions to life through immersive tours, sharing stories that connect travelers with local heritage.',
        image: 'https://via.placeholder.com/300x200?text=Smith+Drown',
    },
];

const About = () => {
    return (
        <>
            {/* AppBar */}
<AppBar position="static" style={{ backgroundColor: 'rgba(54, 93, 147, 0.9)' }}>
    <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
            Explore Ethiopia
        </Typography>
        <NavLink 
            to="/" 
            style={({ isActive }) => ({
                color: isActive ? 'black' : 'white',
                textDecoration: 'none',
                marginRight: '15px',
                backgroundColor: isActive ? 'white' : '',
                borderRadius: isActive ? '50px' : '0', 
                padding: isActive ? '0px 5px' : '0', 
            })}
        >
            <Button color="inherit">Home</Button>
        </NavLink>
        <NavLink 
            to="/about" 
            style={({ isActive }) => ({
                color: isActive ? 'black' : 'white',
                textDecoration: 'none',
                backgroundColor: isActive ? 'white' : '',
                borderRadius: isActive ? '50px' : '0', 
                padding: isActive ? '0px 5px' : '0', 
            })}
        >
            <Button color="inherit">About Us</Button>
        </NavLink>
    </Toolbar>
</AppBar>
<Box textAlign="left" m={5}>
            <Link to="/">
                <Button variant="contained" color="primary" size="medium">
                <ArrowBackIcon  sx={{pl:'3px',borderRadius:'100px'}}/>
                    Back to Home
                </Button>
            </Link>
        </Box>

            {/* Main Content */}
            <Container maxWidth="lg" style={{ padding: '40px 20px', backgroundColor: 'white', marginTop: '20px', borderRadius: '8px' }}>
            <div>
            <Typography 
                variant="h3" 
                gutterBottom 
                align="left" 
                color="rgba(54, 93, 147, 0.9)"
                sx={{
                    lineHeight: 1.6, 
                    transition: 'color 0.3s', 
                    '&:hover': {
                        color: 'rgba(54, 93, 147, 1)', 
                    }
                }}
            >
                About Us
            </Typography>
            <Typography 
                variant="h6" 
                paragraph 
                align="center" 
                sx={{
                    lineHeight: 1.2, 
                    transition: 'color 0.3s',
                    fontWeight: 'semi-bold', 
                    cursor:'pointer',
                    //textTransform: 'uppercase', 
                    padding: '16px', 
                  //  border: '1px solid rgba(54, 93, 147, 0.9)', 
                    borderRadius: '8px',
                    backgroundColor: 'rgba(54, 93, 147, 0.1)', 
                    '&:hover': {
                        color: 'rgba(54, 93, 147, 0.8)', 
                        backgroundColor: 'rgba(54, 93, 147, 0.2)',
                    }
                }}
            >
                We specialize in providing unforgettable experiences in Ethiopia, 
                showcasing the country’s breathtaking landscapes—from the majestic Simien Mountains to the stunning Danakil Depression. 
                Our tours highlight not only the natural beauty but also the richness of our cultural heritage, 
                including ancient traditions, vibrant festivals, and warm hospitality. 
                Whether exploring historic sites like Lalibela’s rock-hewn churches or enjoying the flavors of our diverse cuisine, 
                every moment is designed to immerse you in the unique tapestry of Ethiopian life. 
                Join us in creating memories that will last a lifetime!
            </Typography>
        </div>

                <Typography variant="h4" gutterBottom align="center">
                    Meet Our Team
                </Typography>
                <Grid container spacing={4}>
                    {teamMembers.map((member, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card>
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
                                />
                                <Box sx={{ padding: 2 }}>
                                    <Typography variant="h6" gutterBottom>
                                        {member.name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        {member.role}
                                    </Typography>
                                    <Typography variant="body2">
                                        {member.description}
                                    </Typography>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Typography variant="h4" gutterBottom align="center" mt={4}>
                    Our Mission
                </Typography>
                <Typography 
            variant="h6" 
            paragraph 
            align="center" 
            sx={{
                lineHeight: 1.2, 
                transition: 'color 0.3s', 
                fontWeight: 'semi-bold', 
                cursor:'pointer',
                padding: '16px', 
              //  border: '2px solid rgba(54, 93, 147, 0.9)',
                borderRadius: '8px',
                backgroundColor: 'rgba(54, 93, 147, 0.1)', 
                '&:hover': {
                    color: 'rgba(54, 93, 147, 1)', 
                    backgroundColor: 'rgba(54, 93, 147, 0.2)', 
                }
            }}  
        >
            Our mission is to connect travelers with the beauty and diversity of Ethiopia, 
            offering personalized experiences that leave a lasting impression.
        </Typography>
            </Container>

            <footer className="footer">
            <Typography variant="body1" color="white">
                &copy; 2024 Explore Ethiopia. All rights reserved.
            </Typography>
            <Typography variant="body2" style={{ margin: '10px 0' }}>
                <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
                <Link to="/about" style={{ marginRight: '15px' }}>About Us</Link>
                <Link to="/contact" style={{ marginRight: '15px' }}>Contact Us</Link>
                <Link to="/destinations">Destinations</Link>
            </Typography>
            <Typography variant="body2" color="white" style={{ margin: '10px 0' }}>
                Follow us on:
            </Typography>
            <Box>
                <Link to="#" style={{ marginRight: '15px', color: 'white' }}>
                    <Facebook fontSize="small" />
                </Link>
                <Link to="#" style={{ marginRight: '15px', color: 'white' }}>
                    <Twitter fontSize="small" />
                </Link>
                <Link to="#" style={{ color: 'white' }}>
                    <Instagram fontSize="small" />
                </Link>
            </Box>
            <Typography variant="body2" color="white" style={{ marginTop: '10px' }}>
                Discover the beauty, culture, and adventure of Ethiopia with us!
            </Typography>
        </footer>
        </>
    );
};

export default About;
