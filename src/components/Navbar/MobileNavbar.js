import React from 'react';
import {AppBar, Toolbar, Grid }from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';

import './Navbar.css'

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    marginLeft: "40px",
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    height: 80,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));



const MobileNavbar = () => {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <nav className="Mobile"> 
        <Toolbar>
        <Grid container>
                     <Grid item xs={10} md={9} lg={9} className="title">
                      <h1><a href="/" className="nav_a">YURI IKAWA</a></h1>
                      </Grid> 

  
                     
          <IconButton
            textAlign= "right"
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
             <Grid item xs={2} md={6} lg={6} className="Icon">
            <p>✳︎</p>
            </Grid>
          </IconButton>
       
        </Grid>
        </Toolbar>
   
      
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ?  <p>✳︎</p>:  <p>✳︎</p>}
          </IconButton>
        </div>
       
        <List>
          <ul className="nav-mobile">
            <Scroll to="home" smooth={true} className="scroll nav-li"> <li><a href="/about" className="Item-Text">HOME</a></li></Scroll>
            <Scroll to="projects" smooth={true} className="scroll nav-li"> <li><a href="/about" className="Item-Text">PROJECTS</a></li></Scroll>
            <Scroll to="contact" smooth={true} className="scroll nav-li">  <li><a href="/contact" className="Item-Text">LINK</a></li></Scroll>
            <li><a href="mailto:mbcrhc@gmail.com" className="Item-Text">CONTACT</a></li>
          </ul>
        </List>
      </Drawer>
    </nav>
  );
    
    // return (
    //     <>
    //     <Grid  container>
    //       <nav>
    //       <div>
    //             <Grid container>
    //                  <Grid item xs={6} md={6} lg={6} className="title">
    //                   <h1><a href="/" className="nav_a">YURI IKAWA</a></h1>
    //                   </Grid> 

                       
    //                     <Grid item xs={6} md={6} lg={6} >
    //                     <ul className="nav-uls">
    //                      <Scroll to="home" smooth={true} className="scroll nav-li"> <li><a href="/about" className="Item-Text">HOME</a></li></Scroll>
    //                      <Scroll to="projects" smooth={true} className="scroll nav-li"> <li><a href="/about" className="Item-Text">PROJECTS</a></li></Scroll>
    //                      <Scroll to="contact" smooth={true} className="scroll nav-li">  <li><a href="/contact" className="Item-Text">LINK</a></li></Scroll>
    //                     <li><a href="mailto:mbcrhc@gmail.com" className="Item-Text">CONTACT</a></li>
    //                     </ul>
    //                     </Grid>
    //                   </Grid>  
    //             </div>
    //          </nav>
    //          </Grid>
    //       </>
    //    )
  }

 export default MobileNavbar