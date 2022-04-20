import './About.css';

import {Grid}from '@material-ui/core';


function About() {
  return (
    <div className="About">

      <div class="popup_wrap">
        <input id="trigger" type="checkbox" />
        <div class="popup_overlay">
           <label for="trigger" className="popup_trigger"></label>
           <label for="trigger" className="close_btn">×</label>

          
             <div class="popup_content">
             <Grid container>
             <Grid item item xs={12} md={12} lg={12}>
            <p><img src={`${process.env.PUBLIC_URL}/resume.png`}/></p>  
            </Grid>
           </Grid>
        </div>
            
            
    </div>
</div>

<label for="trigger" class="button">RESUME</label>
     
     
      <ul>
        <li><a href="https://www.linkedin.com/in/yuri-ikawa-b78227189/" target="_blank">LINKEDIN</a></li>
        <li><a href="https://github.com/yrikw" target="_blank">GITHUB</a></li>
        <li><a href="https://www.instagram.com/_freshpear/" target="_blank">INSTAGRAM</a></li>
        <li><a href="mailto:mbcrhc@gmail.com" target="_blank">E-MAIL</a></li>
      </ul>

      
    </div>
  );
}

export default About;