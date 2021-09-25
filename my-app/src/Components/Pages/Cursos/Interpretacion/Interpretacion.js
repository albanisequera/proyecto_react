import React from 'react';
import Grid from "@material-ui/core/Grid";
import "./style.scss";
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

export default function Interpretacion() {

    return (
        <div className="interpretacion">
            <div className="interpretacion__title">
                <h3>Interpretacion</h3>
            </div>
            <div className="interpretacion__parrafo">
                <p>
                    INTERPRETACION<br/>
                    Un intérprete es un mediador para personas que se enfrentan a las barreras del lenguaje. Se encarga de convertir un pensamiento o una expresión procedente de un idioma de origen, en una expresión con un significado similar en el idioma de destino. La función del intérprete es la de transmitir cada uno de los elementos semánticos (el tono y el registro), así como la intención y los sentimientos  que el emisor del mensaje de origen dirige a los receptores del idioma destino.
                    Los servicios de interpretación pueden realizarse de múltiples modos, pero los dos principales son la interpretación consecutiva y la simultánea. Vamos a examinar estos dos métodos..<br/>
                    <br/>
                    Simultánea<br/>
                    
                    En la interpretación simultánea, los participantes utilizan auriculares, y el intérprete transmite las palabras del orador en el idioma destino tan pronto como él o ella pueda formularlas desde el idioma origen, mientras que el orador del idioma origen continúa hablando;<br/>
                    <br/>
                    Consecutiva<br/>
                    En la interpretación consecutiva, el intérprete comienza a hablar después de que el orador del idioma origen ha terminado de hablar. El discurso se divide en segmentos, y el intérprete se sienta o permanece de pie junto al orador del idioma origen, escuchando y tomando notas según el orador va emitiendo el mensaje. Cuando el orador pausa o termina de hablar, el intérprete pasa a transmitir la parte del mensaje o el mensaje completo en el idioma de destino. Los discursos interpretados de forma consecutiva, o los segmentos de ellos, suelen ser breves. Hace cincuenta años, el intérprete consecutivo transmitiría discursos de 20 o 30 minutos; hoy en día, suelen ser de 10 o 15 minutos y se considera un período demasiado largo. Sin embargo, en ocasiones, dependiendo de la situación o del asunto que se trate, y en función de la capacidad del intérprete para memorizar el mensaje, el intérprete puede pedir al orador que haga una pausa tras cada frase o cada punto. La interpretación frase por frase exige menos memorización y por lo tanto, existen menos probabilidades de omitir partes del mensaje.
                    La interpretación consecutiva se utiliza frecuentemente en interpretaciones médicas, en las comunicaciones entre los pacientes y médicos o en las negociaciones comerciales.
                </p>
            </div>
            <div className='interpretacion__content'>


                <Grid container spacing={1}>

                    <Grid item xs={12} sm={12} md={4} lg={4} >
                        <div className='interpretacion__content__fondo' >
                            <p className="interpretacion__content__fondo__texto">
                                <strong>Introduccion</strong></p>
                            <p className="interpretacion__content__fondo__texto">
                                Tomado de Notas
                            </p>
                            <p className="interpretacion__content__fondo__texto">
                                Codigo de Etica
                            </p>
                            <p className="interpretacion__content__fondo__texto">
                                Interpretacion Simultanea
                            </p>
                            <p className="interpretacion__content__fondo__texto">
                                Interpretacion Consecutiva
                            </p>
                        </div>
                    </Grid>


                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <div className='interpretacion__content__fondo' >
                            <p className="interpretacion__content__fondo__texto">
                                <strong>Interpretacion Telefonica</strong></p>
                            <p className="interpretacion__content__fondo__texto">
                                Terminologica Medica
                            </p>
                            <p className="interpretacion__content__fondo__texto">
                                Terminologica Legal
                            </p>
                            <p className="interpretacion__content__fondo__texto">
                                Terminologica Financiera
                            </p>
                            <p className="interpretacion__content__fondo__texto">
                                Terminologica Social
                            </p>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <div className='interpretacion__content__fondo' >
                            <p className="interpretacion__content__fondo__texto">
                                <strong>Casos Practicos</strong></p>
                            <p className="interpretacion__content__fondo__texto">
                                Escenarios Medicos
                            </p>
                            <p className="interpretacion__content__fondo__texto">
                                Escenarios Legales
                            </p>
                            <p className="interpretacion__content__fondo__texto">
                                Lidiando con situacion dificiles
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </div>
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
