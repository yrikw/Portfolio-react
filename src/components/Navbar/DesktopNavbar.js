import React from 'react'
import { Link } from "react-router-dom";
import {AppBar, Toolbar, Grid }from '@material-ui/core';

import './Navbar.css'

const DesktopNavbar = () => {
    
    return (
        <>
        <Grid xs="12" md="12" lg="8">
          <nav>
              <div className="NavbarContainer">
                 <AppBar position="fixed">
                    <Toolbar>
                      <h1><a href="/">Yuri Ikawa</a></h1>
                        <ul>
                          <li><a href="/">Projects</a></li>
                          <li><a href="/about">About</a></li>
                          <li><a href="/contact">Contact</a></li>
                        </ul>
                      </Toolbar>
                 </AppBar>
                </div>
             </nav>
             </Grid>
          </>
       )
  }

 export default DesktopNavbar