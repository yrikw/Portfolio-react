import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Footerbar from './components/Footerbar/Footerbar'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'

import {Grid}from '@material-ui/core';

function App() {
  return (
    <div>
      <Navbar />
      

      <div className="App">
      
      

      <Grid container spacing={10} >
              <Grid item xs={12} md={12} lg={3}>
                <Home />
                <About />   
              </Grid>

              <Grid item xs={12} md={12} lg={9}>
                 <Projects />
              </Grid>
            </Grid>
            </div>

       <Footerbar />
      
</div>
  );
}

export default App;
