import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'



function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        
        {/* <Routes>
         <Route exact={true} path="/home" element={<Home />} />
         <Route path='/projects' element={<Projects />} />
          
                            
        </Routes> */}
      </Router>
</div>
  );
}

export default App;
