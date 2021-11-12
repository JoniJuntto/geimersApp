import React from 'react';
import Warzone from '../assets/warzone.png'
import Minecraft from '../assets/minecraft.png'
import gta from '../assets/gta.png'
import { Card, Typography, Grid, CardContent, makeStyles } from '@material-ui/core';
import Header from '../components/Header';

const useStyles = makeStyles({
  root: {
      width: 300,
      height: 400,
      marginRight: 5,
      marginLeft: 5,
      marginTop: 5,
      marginBottom: 5
  },
  bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
  },
  title: {
      fontSize: 14,
  },
  pos: {
      marginBottom: 12,
  },
  rootG: {
      flexGrow: 1,
      
    },
    paper: {
      height: 140,
      width: 100,
    },
    text: {
      height: 60
    },
});

const images = [
    {
      title:"Wazone",
      id:1,
      url: Warzone,

    },
    {
      title:"Minecraft",
      id:2,
      url: Minecraft,

    },
    {
      title:"GTA V",
      id:3,
      url: gta,

    }
  ];
  
  
  export default function TrendingGames(){

    const classes = useStyles();

    const imgStyle = {
      width: 150,
      height: 150,
  };

      return (
        <div>
        <Header/>
        <Grid container className={classes.rootG} spacing={10}>
            
            {
                images.map(image => {
                    var imageUrl = image.url.toString();
                    return (
                        <div key={image.id}>
                            <Card className={classes.root}>
                                <CardContent>
                                    <Typography className={classes.text} variant="h5" component="h2">
                                        {image.title}
                                    </Typography>
                                    <img style={imgStyle} src={imageUrl} alt='Pelikuva' />
                                </CardContent>
                            </Card>
                        </div>
                    );
                })
            }
        </Grid>
        </div>
    );
}