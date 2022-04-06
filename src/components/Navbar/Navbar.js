import React from 'react'
import MediaQuery from "react-responsive";
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'

import './Navbar.css'

const Navbar = () => { 
    return (
        <>
          <nav>
              <div className="NavbarContainer">

              <MediaQuery query="(min-width: 600px)">
                    <DesktopNavbar />
                </MediaQuery>

                <MediaQuery query="(max-width: 600px)">
                    <MobileNavbar />
                </MediaQuery>
                
                
                </div>
             </nav>
          </>
       )
  }

 export default Navbar