import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Tab, Tabs, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();
  
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
            <Typography
              variant="h5"
              component="div"
              sx={{ color: 'white', cursor: 'pointer' }}
              onClick={() => { navigate('/'); setActiveTab(0); }}
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
