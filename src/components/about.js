import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box, Grid, Card, AppBar, Toolbar,IconButton  } from '@mui/material';
import { NavLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Facebook, Twitter, Instagram } from '@mui/icons-material'; 
import { useNavigate } from 'react-router-dom';

const teamMembers = [
    {
        name: 'John Doe',
        role: 'Founder & CEO',
        description: 'John is passionate about showcasing Ethiopia’s breathtaking beauty and rich culture, ensuring each visitor has a memorable experience.',
        image: 'images/men.jpg', 
    },
    {
        name: 'Eva Smith',
        role: 'Tour Guide',
        description: 'Jane is an expert in Ethiopian history and culture, dedicated to providing insightful and unforgettable journeys through the country’s treasures.',
        image: 'images/girl1.png', 
    },
    {
        name: 'Smith Drown',
        role: 'Cultural Specialist',
        description: 'Smith brings Ethiopia’s rich traditions to life through immersive tours, sharing stories that connect travelers with local heritage.',
        image: 'images/men2.jpg',
    },
];

const About = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/');
    };

    return (
        <>
            {/* AppBar */}
<AppBar position="static" style={{ backgroundColor: 'rgba(54, 93, 147, 0.9)' }}>
    <Toolbar>
    <Typography 
    variant="h6" 
    sx={{ 
        flexGrow: 1, 
        cursor: 'pointer',
        transition: 'color 0.3s', 
        '&:hover': {
            color: 'grey',
        }
    }} 
    onClick={handleNavigate}
>
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
            <Button 
    variant="contained" 
    sx={{ 
        backgroundColor: 'rgba(54, 93, 147, 0.9)', 
        '&:hover': { backgroundColor: 'rgba(54, 93, 147, 0.7)' },
        color: 'white', 
    }} 
    size="medium"
>
    <ArrowBackIcon sx={{ pr: '5px', borderRadius: '100px' }} />
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
                align="start" 
                sx={{
                    lineHeight: 1.5, 
                    transition: 'color 0.3s',
                    fontWeight: 'semi-bold', 
                    cursor:'pointer',
                    marginBottom:'120px',
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
                                    style={{ width: '100%', height: '350px', objectFit: 'cover' }} 
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

                <Typography variant="h4" gutterBottom align="center" mt={20}>
                    Our Mission
                </Typography>
                <Typography 
            variant="h6" 
            paragraph 
            align="left" 
            sx={{
                lineHeight: 1.5, 
                transition: 'color 0.3s', 
                fontWeight: 'semi-bold', 
                cursor:'pointer',
                padding: '16px', 
                marginBottom:'70px',
              //  border: '2px solid rgba(54, 93, 147, 0.9)',
                borderRadius: '8px',
                backgroundColor: 'rgba(54, 93, 147, 0.1)', 
                '&:hover': {
                    color: 'rgba(54, 93, 147, 1)', 
                    backgroundColor: 'rgba(54, 93, 147, 0.2)', 
                }
            }}  
        >
         Our mission is to connect travelers with the breathtaking beauty & rich diversity of Ethiopia.
          We aim to create personalized experiences that not only leave a lasting impression but also foster a deep appreciation for the country's unique culture & heritage.
          At Explore Ethiopia, we believe that travel is more than just visiting new places; it’s about creating connections.
        </Typography>
            </Container>

            <footer className="footer" style={{  padding: '20px' }}>
    <Container maxWidth="lg">
        <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
                <Typography variant="body1" color="white">
                    &copy; 2024 Explore Ethiopia. All rights reserved.
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body2" style={{ margin: '10px 0' }}>
                    <Link to="/" style={{ marginRight: '15px', color: 'white' }}>Home</Link>
                    <Link to="/about" style={{ marginRight: '15px', color: 'white' }}>About Us</Link>
                    <Link to="/contact" style={{ marginRight: '15px', color: 'white' }}>Contact Us</Link>
                    <Link to="/destinations" style={{ color: 'white' }}>Destinations</Link>
                </Typography>
            </Grid>
        </Grid>

        <Grid container justifyContent="space-between" alignItems="center" style={{ marginTop: '10px' }}>
            <Grid item>
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
            </Grid>
            <Grid item>
                <Typography variant="body2" color="white" style={{ marginTop: '10px', textAlign: 'right' }}>
                    Discover the beauty, culture, and adventure of Ethiopia with us!
                </Typography>
            </Grid>
        </Grid>
    </Container>
            </footer>

        </>
    );
};

export default About;
