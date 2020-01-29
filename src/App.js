import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Features from './Features';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        
        <div className="content">
          <HashRouter>
        <Route exact path="/" component={Main}/>
          
        <Route path="/Features" component={Features}/>
        </HashRouter>
          
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
