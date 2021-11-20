import React from 'react'
import { Link } from "react-router-dom";
import {Tabs, Tab, Box, styled, AppBar, Toolbar }from '@material-ui/core';

import './Navbar.css'

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: 'rgba(0, 0, 0, 0.85)',
    '&:hover': {
      color: '#40a9ff',
      opacity: 0,
    },
    '&.Mui-selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }));
  
  const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: 'grey',
    },
    height: '65px'
  });
  
  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      color: 'pink',
      '&.Mui-selected': {
        color: 'grey',
      },
      '&.Mui-focusVisible': {
        backgroundColor: 'grey',
      },
      top: '25px',
      'text-align': 'center'
    }),
  );



const DesktopNavbar = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    
    return (
        <>
          <nav>
              <div className="NavbarContainer">
                 <AppBar position="fixed">
                    <Toolbar>
                      <h1>Yuri Ikawa</h1>
                     <Box>
                            <Box>
                                <StyledTabs
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="styled tabs example">
                                    <StyledTab label="About" />
                                    <StyledTab label="Projects" />
                                    <StyledTab label="Contact" />
                                </StyledTabs>
                            <Box sx={{ p: 2 }} />
                            </Box>
                        </Box>
                        </Toolbar>
                 </AppBar>
                </div>
             </nav>
          </>
       )
  }

 export default DesktopNavbar