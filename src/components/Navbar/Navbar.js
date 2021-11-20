import React from 'react'
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import {Tabs, Tab, Box, styled, AppBar, Toolbar }from '@material-ui/core';
import DesktopNavbar from './DesktopNavbar'

import './Navbar.css'

const Navbar = () => { 
    return (
        <>
          <nav>
              <div className="NavbarContainer">

                <MediaQuery query="(max-width: 414px)">
                    <a>mobile</a>
                </MediaQuery>

                <MediaQuery query="(min-width: 414px)">
                    <DesktopNavbar />
                </MediaQuery>
                
                
                </div>
             </nav>
          </>
       )
  }

 export default Navbar