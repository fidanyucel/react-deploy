import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import {BrowserRouter as Router, Switch,Route}
from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        
        <Route path='/react-website' exact component={Home} />
        <Route path='/react-website/services' component={Services} />
        <Route path='/react-website/products' component={Products} />
        <Route path='/react-website/sign-up' component={SignUp} />
      </Switch>
      <Footer />
    </Router>
    </>

  );
}

export default App;
