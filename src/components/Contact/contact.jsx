import React from 'react'
import Navbar from '../Header';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import { TextField, Box, Grid, Button, Typography } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
//    form: {
//        top: "50%",
//        left: "50%",
//        transform: "translate(-50%, -50%)",
//        position: "absolute",
//    },
    flexbox: {
        display: "flex",
        
        justifyContent: "space-around",
        flexWrap: "wrap",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute"
    },
    contact: {
        marginLeft: "17%"
    },

   button: {
       marginTop: "1rem",
       color: "tomato",
       borderColor: "tomato"
   },
   emailHead: {
       fontSize: "1.5em",
       color: "tomato"
   }, 
   email: {
       color: "tan"
   },
   SkypeHead: {
       color: "tomato",
       fontSize: "1.5em",
   },
   skypeName: {
       color: "tan"
   },
   call: {
       color: "tomato",
       fontSize: "1.5em",
   },
   callNmbr: {
       color: "tan"
   },
   addressHead: {
       color: "tomato",
       fontSize: "1.5em",
   },
   address: {
    color: "tan"
   }

}))

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato",
        },
        "& label": {
            color: "tan",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "tan",
            },
            "&:hover fieldset": {
                borderColor: "tan",
            },
            "& .Mui-focused fieldset": {
                borderColor: "tan",
            },
        },
    },
})(TextField);

 const Contact = () => {
     const classes = useStyles();
    return (
        <>
            <Navbar/>
            <Box component="div" style={{ background: "#233", height: "100vh"}}>
                <Grid className={classes.flexbox} container justify="center">
                    <Box component="form" className={classes.form}>
                        <Typography 
                          variant="h5"
                          style={{ 
                              color: "tomato",
                              textAlign: "center",
                              textTransform: "uppercase",
                          }}
                        >
                            hire or contact me...
                        </Typography>
                        <InputField
                           fullWidth={true}
                           label="Name"
                           variant="outlined" 
                           inputProps={{ style: { color: "white" }}}
                           margin="dense"
                           size="medium"
                        />
                        <br/>

                        <InputField
                          fullWidth={true}
                          label="Email" 
                          variant="outlined"
                          inputProps={{ style: { color: "white" }}}
                          margin="dense"
                          size="medium"
                        />
                        <br/>

                        <InputField
                          fullWidth={true}
                          label="Company name"
                          variant="outlined"
                          inputProps={{ style: { color: "white" }}}
                          margin="dense"
                          size="medium"
                        />
                        <br/>
                        <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon/>}>
                            contact me
                        </Button>

                        {/* <Typography>
                            <Typography variant="h6" className={classes.emailHead}>Email</Typography>
                            <Typography variant="p" className={classes.email}>imkawsar007@gmail.com</Typography>
                            <Typography variant="h6" className={classes.SkypeHead}>Skype</Typography>
                            <Typography variant="p" className={classes.skypeName}>kawsarahamed00</Typography>
                            <Typography variant="h6" className={classes.call}> Call</Typography>
                            <Typography variant="p" className={classes.callNmbr}>01638600627</Typography>
                            <Typography variant="h6" className={classes.addressHead}>Address</Typography>
                            <Typography variant="p" className={classes.address}>71, Housing Society,Mohammadpur, Dhaka-1207.</Typography>
                        </Typography> */}
                    </Box>
                    <Box component="div" className={classes.contact}>
                    
                            <Typography variant="h6" className={classes.emailHead}>Email</Typography>
                            <Typography variant="p" className={classes.email}>imkawsar007@gmail.com</Typography>
                            <Typography variant="h6" className={classes.SkypeHead}>Skype</Typography>
                            <Typography variant="p" className={classes.skypeName}>kawsarahamed00</Typography>
                            <Typography variant="h6" className={classes.call}> Call</Typography>
                            <Typography variant="p" className={classes.callNmbr}>01638600627</Typography>
                            <Typography variant="h6" className={classes.addressHead}>Address</Typography>
                            <Typography variant="p" className={classes.address}>71, Housing Society,Mohammadpur, Dhaka-1207.</Typography>
                       
                    </Box>
                </Grid>
            </Box>
            
         </>   
    );
};

export default Contact;