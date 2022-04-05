// export default Projects

import React from 'react';

//Components
import Projectscards from './Projectscards';
import About from '../About/About';
import Contact from '../Contact/Contact';

//Stylesheet
import './Projects.css';

// Data
import Projectsdata from './resources/Projectsdata'

import {Grid}from '@material-ui/core';
// import { Link as Scroll } from 'react-scroll';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function Project() {
    return (
        <>
            <div className="homewrapper" className="fade">
               <div className="homecontent">
               <h2>HELLO! I'M YURI, WEB DEVELOPER - BASED IN MELBOURNE.</h2>
                
                <Grid container>
                    <Grid item lg={12}>
                     <img src={`${process.env.PUBLIC_URL}/profilepic.jpg`}  className="profilepic"/>
                     
                    </Grid>

                    <About />

                    {/* <Grid item lg={12}>
                       <p> I'm a design-minded, detail-oriented web developer in Melbourne with passionate about combining beautiful code and user friendly design.</p>
                    </Grid> */}

                  
                </Grid>
             </div>
           </div>
        

            
           
            <Link to="projects" smooth={true} className="scroll"><img src={`${process.env.PUBLIC_URL}/down-arrow.png`} alt="Logo" className="nextpage" /></Link>

            <div className="projectswrapper">
            <h3 id="projects">VIEW MY PROJECTS</h3>
            <Grid container>
              {/* <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Ruby</li>
                <li>React</li>
                <li>Java</li>
                <li>Java Script</li>
              </ul> */}
            </Grid>
            <Grid container justify="left" spacing={2}>
        
            {
                Projectsdata.map( (item) => {

                    return <Projectscards
                                key={item.classname}
                                title={item.title}
                                url={item.url}
                                image={item.image}
                                description={item.description}
                                date={item.date}
                                tech={item.tech}
                                classname={item.classname} >
                            </Projectscards>
                })
            }
            </Grid>
        </div>

        <Contact />
        </>
    )
}

export default Project