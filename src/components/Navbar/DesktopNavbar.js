import React from 'react';
import {AppBar, Toolbar, Grid }from '@material-ui/core';

import './Navbar.css'

const DesktopNavbar = () => {
    
    return (
        <>
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
          </>
       )
  }

 export default DesktopNavbar