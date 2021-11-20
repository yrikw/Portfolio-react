import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'



function App() {
  return (
    <div className="App">
      
      {/* <Router> */}
        <Navbar />
        <Home />
        <Projects />
        
        {/* <Routes>
         <Route exact={true} path="/" element={<Home />} />
         <Route path='/' element={<Projects />} />
          
                            
        </Routes> */}
      {/* </Router> */}
</div>
  );
}

export default App;
