import React from 'react';
import { makeStyles } from "@material-ui/core";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Facebook } from '@material-ui/icons';
import { GitHub } from '@material-ui/icons';
import { Instagram } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
            fill: "tan",
            "&:hover": {
                fill: "tomato",
                fontSize: "1.8rem"
            }
            
        }
    },
})

const Footer = () => {
    const classes = useStyles();
    return (
       <BottomNavigation width="auto" style={{background: "#222"}}>
           
           <BottomNavigationAction
             className={classes.root}
             style={{padding: 0}}
             href="https://www.facebook.com/kawser.ahamed.142"
             icon={<Facebook/>}
            />
            
            <BottomNavigationAction
             className={classes.root}
             style={{padding: 0}}
             href="https://github.com/kawsar007"
             icon={<GitHub/>}
            />
            <BottomNavigationAction
             className={classes.root}
             style={{padding: 0}}
             href="https://www.instagram.com/kawser.ahamed.142/?hl=en"
             icon={<Instagram/>}
            />
       </BottomNavigation>
    )
}

export default Footer;