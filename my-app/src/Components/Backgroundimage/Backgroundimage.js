import React from 'react';
import backgroundimage from "../assets/backgroundimage.jpeg";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    image: {
        flexGrow: 1,
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'end',
        backgroundImage: `url(${backgroundimage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        
        [theme.breakpoints.up('xs')]: { 
            height: '9rem',
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
            marginRight: theme.spacing(0),
            marginLeft: theme.spacing(0),
        },
        [theme.breakpoints.up('sm')]: {
            paddingRight: theme.spacing(0),
            width: '100%',
            height: '9rem',
            paddingTop: theme.spacing(15),
            paddingBottom: theme.spacing(15),
        },
        [theme.breakpoints.up('md')]: {
            paddingRight: theme.spacing(0),
            width: '100%',
            height: '9rem',
            paddingTop: theme.spacing(20),
            paddingBottom: theme.spacing(20),
        },
        [theme.breakpoints.up('lg')]: {
            paddingRight: theme.spacing(0),
            paddingTop: theme.spacing(20),
            paddingBottom: theme.spacing(20),
            width: '100%',
            height: '9rem',
        },
        [theme.breakpoints.up('xl')]: {
            paddingRight: theme.spacing(0),
            paddingTop: theme.spacing(25),
            paddingBottom: theme.spacing(25),
            width: '100%',
            height: '10rem',
        },
    },
    image__text: {
        textAlign: 'end',
        color: 'red',
        [theme.breakpoints.up('lg')]:{
            marginRight: theme.spacing(5),
        },
        [theme.breakpoints.up('md')]:{
            marginRight: theme.spacing(5),
        },
        [theme.breakpoints.up('sm')]:{
            marginRight: theme.spacing(5),
        },
        [theme.breakpoints.up('xs')]:{
            marginRight: theme.spacing(5),
        },
    },
    image__button: {
        [theme.breakpoints.up('lg')]:{
            marginRight: theme.spacing(5),
            marginBottom: theme.spacing(2),
        },
        [theme.breakpoints.up('md')]:{
            marginRight: theme.spacing(5),
        },
        [theme.breakpoints.up('sm')]:{
            marginRight: theme.spacing(5),
        },
        [theme.breakpoints.up('xs')]:{
            marginRight: theme.spacing(5),
            marginBottom: theme.spacing(3),
        },
    },
    
}));

export default function Backgroundimage() {
    const classes = useStyles();

    return (
                <div className={classes.image}>
                    <Typography className={classes.image__text} variant='h6' color='textPrimary' component='p'>
                        Curso online <br />
                        Aprende con nostros!!!!
                    </Typography>
                    <Link to='/product'>
                    <Button variant="contained" color="secondary" className={classes.image__button}>
                        <strong>buy</strong>
                    </Button>
                    </Link>
                </div>
    );
}