import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Contact from './components/Contact/Contact'



function App() {
  return (
    <div className="App">
      <Navbar />

　　　　<BrowserRouter>
      <Switch>
        <Route exact path="/" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </Switch>
    </BrowserRouter>
</div>
  );
}

export default App;
