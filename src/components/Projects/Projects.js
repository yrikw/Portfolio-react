// import React from 'react'

// //Stylesheet
// import './Projects.css'

// const Projects = () => {
//     return (
//         <div className="projectswrapper">
//         <h2>Projects</h2>
//         <p>aaa</p>
//         </div>
//     )
// }

// export default Projects

// import * as React from 'react';
// //Stylesheet
// import './Projects.css'
// import Projectscards from './Projectscards.js';
// import Projectsdata from './resources/Projectsdata'
// import {Grid, styled, Card, CardHeader, CardMedia, CardContent, CardAction, Collapse, AvatarProps, IconButton, Typography, Avatar, red, CardActions,  }from '@material-ui/core';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// const Projects = (title) => {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div className="projectswrapper">
//         <h2>Projects</h2>
//          <p>{Projects.title}</p>
//             <Grid item xs={12} md={6} >
            
//             { Projectsdata.map( (item) => {
//              <Projectscards 
//              key={item.classname}
//                                 title={item.title}
//                                 url={item.url}
//                                 image={item.image}
//                                 description={item.description}
//                                 label={item.label}
//                                 classname={item.classname}
//                                 />
// })}
//             </Grid>
//     </div>
//   );
// }

// export default Projects

import React from 'react';

//Components
import Projectscards from './Projectscards';

//Stylesheet
import './Projects.css';

// Data
import Projectsdata from './resources/Projectsdata'

import {Grid}from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';


function Project() {

    return (
        <>
            <div className="homewrapper">
                <div className="homecontent">
                    <h1>Yuri Ikawa</h1>
                    <a>aaaaaa</a>
                </div>
                <Scroll to="projects" smooth={true} className="scroll"><img src={`${process.env.PUBLIC_URL}/downarrow.png`} alt="Logo" className="nextpage" /></Scroll>
            </div>

            <div className="projectswrapper">
            <h2 id="projects">Projects</h2>
            <Grid container justify="left" spacing={2}>
        
            {
                Projectsdata.map( (item) => {

                    return <Projectscards
                                key={item.classname}
                                title={item.title}
                                url={item.url}
                                image={item.image}
                                description={item.description}
                                label={item.label}
                                classname={item.classname} >
                            </Projectscards>
                })
            }
            </Grid>
        </div>
        </>
    )
}

export default Project