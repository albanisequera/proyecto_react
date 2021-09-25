import React from 'react';
import Grid from "@material-ui/core/Grid";
import "./style.scss";
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import bridgiImagen from '../../../assets/bridgiImagen.jpeg';

export default function Bridgingthegap() {

    return (
        <div className="bridgi">
            <div className='container__bridgi'>
                <div >
                    <img className="title__bridgi" src={bridgiImagen} alt='bridgiImagen' />
                </div>
                <div>
                    <p>
                        <strong>Bridging the gap</strong>
                    </p>
                    <p>
                        Acerca de la formación de intérprete médico de 64 horas
                        La formación de intérpretes médicos de Bridging the Gap (BTG) es el programa de certificación de intérpretes médicos líder en los EE. UU. En la actualidad. Este curso de 8 días (64 horas) le proporcionará las habilidades y estándares más importantes cuando trabaje en el campo médico como intérprete profesional.
                    </p>
                    <p>
                        <strong>En esta clase aprenderás:</strong> <br />
                        Habilidades de interpretación<br />
                        Códigos de ética<br />
                        Los cuatro roles del intérprete médico<br />
                        Modos de interpretación<br />
                        Interpretación remota<br />
                        El sistema de atención médica de EE. UU.<br />
                        Disparidades de salud en EE. UU.<br />
                        Disparidades de salud LGBTQIA en los EE. UU.<br />
                        Introducción a la salud mental<br />
                        Habilidades de interpretación para la salud mental<br />
                        Habilidades de comunicación y pensamiento crítico<br />
                        Desarrollo profesional<br />
                        Vocabulario médico (¡anatomía, fisiología y más!)<br />

                        ¡Únase a otras personas de ideas afines que quieran utilizar sus habilidades bilingües para impulsar su carrera en un campo que les apasiona!
                    </p>
                </div>
            </div>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={4} lg={4} >
                    <div className='bridgingthegap__content__fondo' >
                        <p className="bridgingthegap__content__fondo__texto">
                            <strong>Introduccion</strong></p>
                        <p className="bridgingthegap__content__fondo__texto">
                            Tomado de Notas
                        </p>
                        <p className="bridgingthegap__content__fondo__texto">
                            Codigo de Etica
                        </p>
                        <p className="bridgingthegap__content__fondo__texto">
                            bridgingthegap Simultanea
                        </p>
                        <p className="bridgingthegap__content__fondo__texto">
                            bridgingthegap Consecutiva
                        </p>
                    </div>
                </Grid>


                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <div className='bridgingthegap__content__fondo' >
                        <p className="bridgingthegap__content__fondo__texto">
                            <strong>bridgingthegap Telefonica</strong></p>
                        <p className="bridgingthegap__content__fondo__texto">
                            Terminologica Medica
                        </p>
                        <p className="bridgingthegap__content__fondo__texto">
                            Terminologica Legal
                        </p>
                        <p className="bridgingthegap__content__fondo__texto">
                            Terminologica Financiera
                        </p>
                        <p className="bridgingthegap__content__fondo__texto">
                            Terminologica Social
                        </p>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <div className='bridgingthegap__content__fondo' >
                        <p className="bridgingthegap__content__fondo__texto">
                            <strong>Casos Practicos</strong></p>
                        <p className="bridgingthegap__content__fondo__texto">
                            Escenarios Medicos
                        </p>
                        <p className="bridgingthegap__content__fondo__texto">
                            Escenarios Legales
                        </p>
                        <p className="bridgingthegap__content__fondo__texto">
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
