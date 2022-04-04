import React from 'react';
import {AppBar, Toolbar, Grid, Typography, Box }from '@material-ui/core';

import './Navbar.css'

import { Link as Scroll } from 'react-scroll';

const DesktopNavbar = () => {
    
    return (
        <>
          <nav>
              <div>
                <Grid container>
                     <Grid item xs={6} md={6} lg={6} className="title">
                      <h1><a href="/" className="nav_a">YURI IKAWA</a></h1>
                      </Grid> 

                       
                        <Grid item xs={6} md={6} lg={6} >
                        <ul className="nav-uls">
                         <Scroll to="home" smooth={true} className="scroll nav-li"> <li><a href="/about" className="Item-Text">HOME</a></li></Scroll>
                         <Scroll to="projects" smooth={true} className="scroll nav-li"> <li><a href="/about" className="Item-Text">PROJECTS</a></li></Scroll>
                         <Scroll to="contact" smooth={true} className="scroll nav-li">  <li><a href="/contact" className="Item-Text">LINK</a></li></Scroll>
                        <li><a href="mailto:mbcrhc@gmail.com" className="Item-Text">CONTACT</a></li>
                        </ul>
                        </Grid>
                      </Grid>  
                </div>
                {/* <hr /> */}
             </nav>
          </>
       )
  }

 export default DesktopNavbar