import React from 'react';
import './App.css';
import { CssBaseline } from "@material-ui/core";
import RootComponent from './components/index';
import {BrowserRouter as Router, Route } from "react-router-dom";
import Resume from "./components/Resume/index";
import About from "./components/About/index";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/contact";
import Education from "./components/Education/Edication";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={RootComponent}/>
        <Route path="/resume" component={Resume}/>
         <Route path="/about" component={About}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/education" component={Education} />
      </Router>
    </div>
  );
}

export default App;
