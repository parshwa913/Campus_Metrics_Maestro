import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 
import logo from '../images/logo.png'; 

const NavigationBar = () => {
  const { currentUser, logout } = useAuth(); 

  return (
    <AppBar position="fixed" sx={{ background: 'linear-gradient(135deg, #8A2BE2, #4B0082)' }}>
      <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '16px' }} />
          <Typography variant="h6" fontFamily={'cursive'} sx={{ color: '#ffffff' }}> 
            Walchand College Of Engineering, Sangli
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto', flexWrap: 'wrap' }}>
          {!currentUser ? (
            <>
              <Button component={Link} to="/" color="inherit" sx={{fontFamily: 'cursive'}}>
                Login
              </Button>
              <Button component={Link} to="/about" color="inherit" sx={{fontFamily: 'cursive'}}>
                About Us
              </Button>
            </>
          ) : (
            <>
              <Button component={Link} to="/dashboard" color="inherit" sx={{fontFamily: 'cursive'}}>
                Dashboard
              </Button>
              <Button component={Link} to="/add-event" color="inherit" sx={{fontFamily: 'cursive'}}>
                Add Event
              </Button>
              <Button onClick={logout} color="inherit" sx={{fontFamily: 'cursive'}}>
                Logout
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
