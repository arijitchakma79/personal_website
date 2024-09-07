import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Tab, Tabs, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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
    <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
      <List>
        <ListItem button onClick={() => { setActiveTab(0); navigate('/'); toggleDrawer(false); }}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={() => { setActiveTab(1); navigate('/projects'); toggleDrawer(false); }}>
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button onClick={() => { setActiveTab(2); navigate('/resume'); toggleDrawer(false); }}>
          <ListItemText primary="Resume" />
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#a3a3c2' }}>
        <Toolbar>
          {/* Home Navigation */}
          <Typography
            variant="h5"
            component="div"
            sx={{ color: 'white', cursor: 'pointer' }}
            onClick={() => { navigate('/'); setActiveTab(0); }} // Navigate to HomePage on logo click
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
                    color: activeTab === 0 ? 'black' : 'white',
                    backgroundColor: activeTab === 0 ? '#E3F2FD' : 'inherit',
                  }}
                />
                <Tab
                  label="Projects"
                  sx={{
                    color: activeTab === 1 ? 'black' : 'white',
                    backgroundColor: activeTab === 1 ? '#E3F2FD' : 'inherit',
                  }}
                />
                <Tab
                  label="Resume"
                  sx={{
                    color: activeTab === 2 ? 'black' : 'white',
                    backgroundColor: activeTab === 2 ? '#E3F2FD' : 'inherit',
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
