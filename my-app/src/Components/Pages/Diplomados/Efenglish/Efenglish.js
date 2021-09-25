import React from 'react';
import Grid from "@material-ui/core/Grid";
import "./style.scss";
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import efeImagen from '../../../assets/efeImagen.jpeg';

export default function Efenglish() {

    return (
        <div className="efe">
            <div className='container__efe'>
                <div >
                    <img className="title__efe" src={efeImagen} alt='efeImagen' />
                </div>
                <div>
                    <p>
                        <strong>EF ENGLISH</strong>
                    </p>
                    <p>
                        Aquí vas a aprender inglés de verdad. No importa si ya estudiaste antes o si empiezas de cero. Vamos a acompañarte en tu proceso de aprendizaje con todos los recursos prácticos y teóricos que necesitas para alcanzar el éxito.
                        En solo tres meses puedes subir de nivel y obtener tu Certificado Oficial de ABA English.
                        A continuación te contamos por qué nuestro método de aprendizaje es único y eficaz.
                        APRENDES CON UN CURSO BASADO EN VÍDEOS
                        Nuestro curso consta de 144 unidades organizadas en 6 niveles (A1 Beginners a Business C1) y está preparado para que puedas seguirlo a través del dispositivo que tú elijas: ordenador, móvil o tablet.
                        COMITÉ ACADÉMICO
                        El Comité Académico está compuesto por catedráticos de prestigiosas universidades que orientan a nuestros profesores y supervisan el contenido del curso. De esta manera, garantizamos la más alta calidad y respondemos a las necesidades reales de nuestros alumnos. Entre los miembros del Comité, se encuentran:
                    </p>
                    <p>
                        <strong>PRECIOS </strong> <br />
                        USD $50.00 por nivel
                    </p>
                </div>
            </div>
            <Grid container spacing={1}>

                <Grid item xs={12} sm={12} md={4} lg={4} >
                    <div className='efenglish__content__fondo' >
                        <p className="efenglish__content__fondo__texto">
                            <strong>Introduccion</strong></p>
                        <p className="efenglish__content__fondo__texto">
                            Tomado de Notas
                        </p>
                        <p className="efenglish__content__fondo__texto">
                            Codigo de Etica
                        </p>
                        <p className="efenglish__content__fondo__texto">
                            efenglish Simultanea
                        </p>
                        <p className="efenglish__content__fondo__texto">
                            efenglish Consecutiva
                        </p>
                    </div>
                </Grid>


                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <div className='efenglish__content__fondo' >
                        <p className="efenglish__content__fondo__texto">
                            <strong>efenglish Telefonica</strong></p>
                        <p className="efenglish__content__fondo__texto">
                            Terminologica Medica
                        </p>
                        <p className="efenglish__content__fondo__texto">
                            Terminologica Legal
                        </p>
                        <p className="efenglish__content__fondo__texto">
                            Terminologica Financiera
                        </p>
                        <p className="efenglish__content__fondo__texto">
                            Terminologica Social
                        </p>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <div className='efenglish__content__fondo' >
                        <p className="efenglish__content__fondo__texto">
                            <strong>Casos Practicos</strong></p>
                        <p className="efenglish__content__fondo__texto">
                            Escenarios Medicos
                        </p>
                        <p className="efenglish__content__fondo__texto">
                            Escenarios Legales
                        </p>
                        <p className="efenglish__content__fondo__texto">
                            Lidiando con situacion dificiles
                        </p>
                    </div>
                </Grid>
            </Grid>

            <div className='Button__comprar'>
                <Link to='/product'>
                    <Button variant="contained" color="secondary">
                        <strong>buy</strong>
                    </Button>
                </Link>
            </div>
        </div>
    )
}
