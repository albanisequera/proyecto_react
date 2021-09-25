import React from 'react';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Button, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent:'center', 
    textAlign: 'center',
    [theme.breakpoints.up('xs')]: {
      maxWidth: 255,
    margin:'0 auto',
    pading:0,
    marginTop:'5px',
    marginTop:'15px',
   },
   [theme.breakpoints.up('sm')]: {
    maxWidth: 255,
    margin:'0 auto',
    pading:0,
    marginTop:'15px',
   },
   [theme.breakpoints.up('md')]: {
    maxWidth: 255,
    margin:'0 auto',
    pading:0,
    marginTop:'15px',
   },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 255,
    margin:'0 auto',
    pading:0,
    marginTop:'15px',
   },   
  },

  media: {
    height: 0,
    paddingTop: "100%", // 16:9
  },
}));

export default function Nosotro({
  nosotro: { nosotroType, image, description },
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <CardMedia className={classes.media} image={image} />
          <Button color='textSecondary' component='p'>
            {nosotroType}
          </Button>
            <Typography paragraph>{description}</Typography>  
    </div>
  );
}
