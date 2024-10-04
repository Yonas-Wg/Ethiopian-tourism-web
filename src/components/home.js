import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid, Card, CardMedia, CardContent } from '@mui/material';
import './home.css';
import { Facebook, Twitter, Instagram } from '@mui/icons-material'; 
import { NavLink } from 'react-router-dom';

const attractions = [
    {
        title: 'Lalibela Rock-Hewn Churches',
        image: '/images/lalibela.jpg',
        description: 'Famous for its monolithic churches carved from rock, a UNESCO World Heritage site.',
    },
    {
        title: 'Simien Mountains National Park',
        image: '/images/simien.jpg',
        description: 'Home to stunning landscapes and unique wildlife, perfect for trekking and adventure.',
    },
    {
        title: 'Addis Ababa National Museum',
        image: '/images/addis.jpeg',
        description: 'Houses a rich collection of artifacts, including the famous fossil of Lucy.',
    },
    {
        title: 'Danakil Depression',
        image: '/images/danakil.jpg',
        description: 'One of the hottest places on Earth, known for its otherworldly landscapes.',
    },
    {
        title: 'Omo Valley Tribes',
        image: '/images/omo.jpg',
        description: 'Experience the rich culture of Ethiopia’s diverse tribes in the Omo Valley.',
    },
    {
        title: 'Axum',
        image: '/images/axum.jpg',
        description: 'Aksum is a city in northern Ethiopia, known for its tall, carved obelisks, relics of the ancient Kingdom of Aksum.',
    },
];

const Home = () => {
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

            <Container maxWidth="lg" style={{ textAlign: 'center', padding: '40px 20px', minHeight: 'calc(100vh - 64px)' }}>
                <Typography variant="h2" gutterBottom>
                    Explore Ethiopia
                </Typography>
                <Typography variant="h5" paragraph>
                    Discover breathtaking landscapes, rich culture, and unforgettable experiences!
                </Typography>
                <Link to="/about">
                    <Button variant="contained" color="primary" size="large" style={{ marginBottom: '20px' }}>
                        Learn More
                    </Button>
                </Link>
                
                <Box sx={{ m: 5 }}>
                    <Typography variant="h4" gutterBottom style={
                        {marginBottom:'50px'}
                    }>
                        Must-See Attractions
                    </Typography>
                    <Grid container spacing={4}>
                        {attractions.map((attraction, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card className="card" elevation={3}>
                                    <CardMedia
                                        component="img"
                                        height="240"
                                        image={attraction.image}
                                        alt={attraction.title}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            {attraction.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {attraction.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
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

export default Home;