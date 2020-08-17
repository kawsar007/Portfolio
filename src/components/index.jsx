import React from 'react';
import Navbar from './Header';
//import { CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header/header';
import Particles from "react-particles-js";

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
           <Navbar/>
           <Header/>
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