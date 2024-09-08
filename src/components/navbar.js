import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Tab, Tabs, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'; // Import Close icon
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route
  const [activeTab, setActiveTab] = useState(0); // Initially set to homepage
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Handle tab change logic
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    if (newValue === 0) {
      navigate('/'); // Navigate to HomePage
    } else if (newValue === 1) {
      navigate('/projects'); // Navigate to ProjectsPage
    } else if (newValue === 2) {
      navigate('/resume'); // Navigate to ResumePage
    }
  };

  // Set active tab based on current route when the component mounts or when location changes
  useEffect(() => {
    if (location.pathname === '/') {
      setActiveTab(0); // Set HomePage as active
    } else if (location.pathname === '/projects') {
      setActiveTab(1); // Set ProjectsPage as active
    } else if (location.pathname === '/resume') {
      setActiveTab(2); // Set ResumePage as active
    }
  }, [location]);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const isMobile = useMediaQuery('(max-width:600px)');

  const drawer = (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={() => toggleDrawer(false)}
      PaperProps={{
        sx: {
          backgroundColor: '#9181b6', // Light violet background color for the drawer
          border: '2px solid #a3a3c2', // Light border color around the drawer
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Slight shadow for depth
          borderRadius: '10px', // Rounded corners
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
        {/* Close button */}
        <IconButton onClick={() => toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        <ListItem
          button
          onClick={() => {
            setActiveTab(0);
            navigate('/');
            toggleDrawer(false);
          }}
          sx={{
            '&:hover': { backgroundColor: '#c1a4d7' }, // Hover effect
            borderBottom: '1px solid #a3a3c2', // Divider between each item
          }}
        >
          <ListItemText primary="Home" sx={{ color: '#3f3f3f', fontWeight: 'bold' }} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setActiveTab(1);
            navigate('/projects');
            toggleDrawer(false);
          }}
          sx={{
            '&:hover': { backgroundColor: '#c1a4d7' }, // Hover effect
            borderBottom: '1px solid #a3a3c2', // Divider between each item
          }}
        >
          <ListItemText primary="Projects" sx={{ color: '#3f3f3f', fontWeight: 'bold' }} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setActiveTab(2);
            navigate('/resume');
            toggleDrawer(false);
          }}
          sx={{
            '&:hover': { backgroundColor: '#c1a4d7' }, // Hover effect
          }}
        >
          <ListItemText primary="Resume" sx={{ color: '#3f3f3f', fontWeight: 'bold' }} />
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    <>
      <AppBar position="static" sx={{
          background: 'linear-gradient(135deg, #5a6283, #3283a8, #32a85a)', 
          backgroundSize: '1000% 400%',
          animation: 'gradientAnimation 15s ease infinite'
        }}>
        <Toolbar>
          {/* Home Navigation */}
          <Typography
            variant="h5"
            component="div"
            sx={{
              color: 'white',
              cursor: 'pointer',
              fontSize: isMobile ? '1.2rem' : '1.5rem', // Adjust font size based on screen size
            }}
            onClick={() => {
              navigate('/');
              setActiveTab(0);
            }} // Navigate to HomePage on logo click
          >
            Arijit Chakma
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          {isMobile ? (
            <>
              <IconButton color="inherit" edge="end" onClick={() => toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <Box sx={{ display: 'flex' }}>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                TabIndicatorProps={{
                  style: {
                    backgroundColor: '#B3E5FC',
                  },
                }}
              >
                <Tab
                  label="Home"
                  sx={{
                    color: activeTab === 0 ? 'white' : 'white',
                    backgroundColor: activeTab === 0 ? '#9284ab' : 'inherit',
                  }}
                />
                <Tab
                  label="Projects"
                  sx={{
                    color: activeTab === 1 ? 'white' : 'white',
                    backgroundColor: activeTab === 1 ? '#9284ab' : 'inherit',
                  }}
                />
                <Tab
                  label="Resume"
                  sx={{
                    color: activeTab === 2 ? 'white' : 'white',
                    backgroundColor: activeTab === 2 ? '#9284ab' : 'inherit',
                  }}
                />
              </Tabs>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {drawer}
    </>
  );
};

export default Navbar;
