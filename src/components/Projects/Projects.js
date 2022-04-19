// export default Projects

import React from 'react';

//Components
import Projectscards from './Projectscards';
import Contact from '../Contact/Contact';

//Stylesheet
import './Projects.css';

// Data
import Projectsdata from './resources/Projectsdata'

import {Grid}from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';


function Project() {
    return (
        <>  
           
            {/* <Scroll to="projects" smooth={true} className="scroll"><img src={`${process.env.PUBLIC_URL}/down-arrow.png`} alt="Logo" className="nextpage" /></Scroll> */}

            <div className="projectswrapper">
            <h3 id="projects"></h3>
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