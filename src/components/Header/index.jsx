import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RightMenuSlider from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';
import { 
    AppBar, Toolbar,
    ListItem, IconButton,
    ListItemText, ListItemIcon, Avatar,
    Divider, List, 
    Typography, Box 
} from '@material-ui/core';

import { 
    ArrowBack, AssignmentInd, 
    Home, Apps, ContactMail 
} from '@material-ui/icons';

import CastForEducationIcon from '@material-ui/icons/CastForEducation';

import avatar from '../../kawsar1.jpg';
import Footer from './footer';

// CSS STYLES
const useStyle= makeStyles(theme=> ({
    menuContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "tan"
    }
}))

const menuItem = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio",
        listPath: "/portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contacts",
        listPath: "/contact"
    },
    {
        listIcon: <CastForEducationIcon/>,
        listText: "Education",
        listPath: "/education"
    }
]



const Navbar = () => {
    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open});
    }


    const classes = useStyle();

    const sideList = slider => (
        
        <Box onClick={toggleSlider(slider, false)} className={classes.menuContainer} component="div">
         <Avatar className={classes.avatar} alt="Kawsar" src={avatar}/>
          <Divider/> 
            <List>
                {menuItem.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>{lsItem.listIcon}</ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText}/>
                    </ListItem>
                ))}
            </List>
        </Box>
       
    )
    

    return (
        <>
            <Box component="nav">
                <AppBar position="static" style={{ background: '#222'}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)} style={{background: '#fff'}}>
                        <ArrowBack style={{ color: 'tomato'}}/>
                        </IconButton>
                        <Typography variant="h5" style={{color: 'tan', marginLeft: '10px'}}>Portfolio</Typography>
                        <RightMenuSlider onClose={toggleSlider("right", false)} anchor="right" open={state.right}>
                             {sideList("right")}
                             <Footer/>
                        </RightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar;