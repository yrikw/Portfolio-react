import React from 'react';

import './Footerbar.css';

import {AppBar, Toolbar, Grid, Typography, Box } from '@material-ui/core';


const Footerbar = () => {
    
    return (
          <div className="Footer">
            {/* <div className="line">
              <hr className="line"/>
            </div> */}
            
            <p className="copyright">&#169; 2022 YURI IKAWA</p> 

            {/* <Grid container className="footer-content">
              <Grid item xs={6} md={6} lg={6}>
                 <p>PLEASE FOLLOW AND FEEL FREE TO CONTACT WITH ME.</p>
                 <p className="copyright">&#169; 2022 YURI IKAWA</p>    
              </Grid>

              <Grid item xs={6} md={6} lg={6}>
                <ul>
                    <li><a href="https://www.linkedin.com/in/yuri-ikawa-b78227189/">LINKEDIN</a></li>
                    <li><a href="https://github.com/yrikw">GITHUB</a></li>
                    <li><a href="https://www.instagram.com/_freshpear/">INSTAGRAM</a></li>
              </ul>
              </Grid>
            </Grid> */}
          </div>
       )
  }

 export default Footerbar