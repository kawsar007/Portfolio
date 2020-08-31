import React from 'react';
import Navbar from './Header';
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
              <Navbar/>
              <Header/>

           <Particles
            params={{
                "particles": {
                    "number": {
                        "value": 50
                    },
                    "size": {
                        "value": 3
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
  	       }} />

        </>
    )
}

export default RootComponent;