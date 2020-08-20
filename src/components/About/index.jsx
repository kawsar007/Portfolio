import React from 'react';
import './about.css';
import avatar from "../../kawsar1.jpg";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Navbar from '../Header';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "90%",
    margin: "auto",
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: '200px',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function About() {
    const classes = useStyles();
    return (
      <>
        <Navbar/>
        <div className={classes.root}>
            <Paper className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item>
                    <ButtonBase className={classes.image}>
                       <img className={classes.img} alt="complex" src={avatar} />
                    </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
               
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
          </Grid>
                </Grid>
            </Paper>
        </div>
      </>
    )
}
