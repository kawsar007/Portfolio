import React from 'react';
import Navbar from './Header';
//import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router , Switch, Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header/header';
import Particles from "react-particles-js";
import Resume from './Resume';
import About from './About';
import Portfolio from './Portfolio/portfolio';
import Contact from './Contact/contact';
import Education from './Education/Edication.jsx';

// CSS Styles
const useStlye = makeStyles({
    particlesCanva: {
        position: "absolute"
    }
})

const RootComponent = () => {
    const classes = useStlye();
    return (
        <>
           {/* <CssBaseline/> */}
           <Router>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Header}/>
                    <Route path="/resume" component={Resume}/>
                    <Route path="/about" component={About}/>
                    <Route path="/portfolio" component={Portfolio}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/education" component={Education} />
                </Switch>
                
           </Router>
           {/* <Header/> */}
           <Particles
               canvasClassName={classes.particlesCanva}
               params={{
                  particles: {
                      number: {
                          value: 45
                      }
                  }
               }}
           />

        </>
    )
}

export default RootComponent;