import React from 'react';
import './App.css';
import Navbar from './components/pages/Navbar';
import { BrowserRouter as Router, Switch, Route } 
from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Cars from './components/pages/HomePage/Cars/CarsWeb';
import Footer from './components/pages/Footer/Footer';

function App() {
  return (
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/cars' exact component={Cars} />
        </Switch>
        <Footer />
      </Router>
    
  );
}

export default App;
