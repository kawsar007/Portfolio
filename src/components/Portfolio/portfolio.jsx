import React from 'react';
import Navbar from '../Header';
import { makeStyles } from "@material-ui/styles";
import netflix from './netflix.jpg';
import { 
    Box, Grid, Card,
    CardActionArea, CardActions,
    CardContent, CardMedia, 
    Button, Typography 
} from "@material-ui/core";
import { Link } from '@material-ui/icons';

const useStyles = makeStyles({
    mainContainer: {
       background: "#233",
       height: "100%",
    },
    cardContent: {
        maxWidth: 345,
        margin: "3rem",
        margin: "5rem auto"
    }
})

export default function Portfolio() {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar/>
            <Grid container justify="center">
                  {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContent}>
                        <CardActionArea>
                            <CardMedia 
                               component="img"
                               alt="Netflix Clone"
                               height="140"
                               image={netflix}
                               link="https://material-ui.com/"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Netflix Clone
                                </Typography>
                                <Typography variant="body" color="textSecondary" component="p">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, veritatis.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                {/* <Button size="small" color="primary">
                                    Live Demo
                                </Button> */}
                                <Button href="https://netflix-clone-cfa62.web.app/?fbclid=IwAR0A2-lT9flvPTVZXUr3qs2ll8QzSsTxQGN6SJgPb2r_PjqaSOgyqLlteqM" 
                                size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>              
                    </Card>
                </Grid>
                {/* Project 2 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContent}>
                        <CardActionArea>
                            <CardMedia 
                               component="img"
                               alt="Netflix Clone"
                               height="140"
                               image={netflix}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Netflix Clone
                                </Typography>
                                <Typography variant="body" color="textSecondary" component="p">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, veritatis.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>        
                    </Card>
                </Grid>
                {/* Project 3  */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContent}>
                        <CardActionArea>
                            <CardMedia 
                               component="img"
                               alt="Netflix Clone"
                               height="140"
                               image={netflix}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Netflix Clone
                                </Typography>
                                <Typography variant="body" color="textSecondary" component="p">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, veritatis.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>     
                    </Card>
                </Grid>
                {/* Project 4 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContent}>
                        <CardActionArea>
                            <CardMedia 
                               component="img"
                               alt="Netflix Clone"
                               height="140"
                               image={netflix}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Netflix Clone
                                </Typography>
                                <Typography variant="body" color="textSecondary" component="p">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, veritatis.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>  
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}
