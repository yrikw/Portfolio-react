import React from 'react'

//Stylesheet
import './Home.css'

import About from '../About/About';

import {Grid}from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';


const Home = () => {
    return (
        <div className="homewrapper">
             <div className="homewrapper" className="fade">
               {/* <p style={{ fontSize: "180px", position: "absolute", bottom: "20px", color:"#afa15b" }}>✴︎</p>
               <p style={{ fontSize: "80px", position: "absolute", top: "90px", right: "500px", color:"#e8321e" }}>✴︎</p>
               <p style={{ fontSize: "80px", position: "absolute", bottom: "200px", right: "300px", color:"#406d60" }}>✴︎</p> */}

               <div className="homecontent">
                
               <h2><span style={{ color:"#406d60", fontStyle: "none" }}>✴︎</span>HELLO! I'M YURI, WEB DEVELOPER - BASED IN MELBOURNE.</h2>
                
                {/* <Grid container>
                    <Grid item lg={12}>
                     <img src={`${process.env.PUBLIC_URL}/profilepic.jpg`}  className="profilepic"/>              
                    </Grid>
                </Grid> */}
             </div>
           </div>

          
        </div>
    )
}

export default Home