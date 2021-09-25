import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';
import nosotrosImage from '../../assets/nosotrosImage.jpeg';
import Nosotro from "./Nosotro";
import nosotros from "../../../nosotro-data";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: 'center',
        paddingLeft: theme.spacing(1),
    },  
    parrafo: {
        textAlign: 'start',
        margin: theme.spacing(2),
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        padding: theme.spacing(2),
        [theme.breakpoints.up('xs')]: {
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
         },
         [theme.breakpoints.up('sm')]: {
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
         },
         [theme.breakpoints.up('md')]: {
            display:'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            textAlign: 'center',
         },
        [theme.breakpoints.up('lg')]: {
            display:'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            textAlign: 'center',
         },   
    },
    image: {
        [theme.breakpoints.up('xs')]: {
            width:'100%',
         },
         [theme.breakpoints.up('sm')]: {
            width:'100%',
         },
         [theme.breakpoints.up('md')]: {
            width:'100%',
         },
        [theme.breakpoints.up('lg')]: {
            width:'90%',
         },    
    },
}));

const Nosotros = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.parrafo}>
                    <h1>Nuestra Metodologia</h1>
                    <p>En Academy contamos con una metodologia de enseñanza cuyo
                        <br /> principal objetivo es que el alumno sea protagonista de su propio
                        <br /> aprendizaje. Por lo que proporcionamos el material requerido
                        <br /> para el aprendizaje eficaz del alumno.
                        <br />
                        Por lo que pretendemos es que sea el propio alumno quien
                        <br /> interactúe con todos los elementos y recursos educativos que
                        <br /> ponemos a su alcance, de manera que pase a tomar un papel
                        <br />
                        activo en su propio proceso de aprendizaje.
                    </p>
                </div>
                <div >
                    <img className={classes.image} src={nosotrosImage} alt='nosotrosImage' />
                </div>
            </div>

            <div className={classes.map}>
                <Grid container spacing={5}>
                    {nosotros.map((nosotro) => (
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Nosotro nosotro={nosotro} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}

export default Nosotros;
