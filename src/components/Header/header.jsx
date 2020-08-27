import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link } from 'react-router-dom';
import { Typography, Avatar, Grid, Box, Button } from "@material-ui/core";
import Typed from "react-typed";
import avatar from '../../kawsar3.jpg';

// CSS STYLES
const useStyle = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
        height: "200px",
        width: "200px"
    },
    title: {
        color: "#ffffff",
    },
    nameTitle: {
        color: "#14dba9"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: '50%',
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    },
    resume: {
       right: theme.spacing(3),
       color: '#ffffff'
    },
    about: {
        textDecuration: "none",
    }
}))

function Header() {
    const classes = useStyle()
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Kawsar"/>
            </Grid>
            <Typography className={classes.nameTitle} variant="h6">
                Hello! I am
            </Typography>
            <Typography className={classes.title} variant="h3">
                {/* <Typed strings={["Md Kawsar"]} typeSpeed={40}/> */}
                Md Kawsar Mia
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={["Web Design", "Web Development", "MERN Stack"]} typeSpeed={40} typeSpeed={60} loop/>
            </Typography>
            <Typography>
            <Button className={classes.resume} variant="outlined" color="secondary">
               Get Resume
            </Button>
            <Button variant="contained" color="primary">
              <Link to='./about'>About Me</Link>  
            </Button>
            </Typography>
        </Box>
    )
}

export default Header;
