import React from 'react';
import Grid from "@material-ui/core/Grid";
import "./style.scss";
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

export default function Traduccion() {

    return (
        <div className='traduccion'>
            <div className="traduccion__title">
                <h3>Traduccion</h3>
            </div>
            <div className="traduccion__parrafo">
                <p>
                    El proceso traductor y su complejidad<br />
                    El proceso traductor es el proceso mental por el cual se permite transmitir un texto formulado en una lengua, utilizando los medios de la otra lengua a la que se quiere traducir. Aunque este proceso podría parecer simple a primera vista, no lo es tanto y se esconde tras él una operación compleja. Para decodificar el sentido completo del texto origen, el traductor tiene que interpretar y analizar todas sus características de forma consciente y metódica. Este proceso requiere un conocimiento profundo de la gramática, semántica, sintaxis y frases hechas o similares de la lengua origen, así como de la cultura de sus hablantes.<br />
                    <br />
                    El traductor debe contar también con estos conocimientos para recodificar el sentido en la lengua traducida. De hecho, estos suelen ser más importantes y, por tanto, más profundos que los de la lengua origen. De ahí que la mayoría de los traductores traduzcan a su lengua materna. Además, es esencial que los traductores conozcan el área que se está tratando, ya que no es lo mismo traducir un contrato de trabajo que un Ensayo Clínico.<br />
                    <br />
                    Fidelidad y transparencia<br />
                    La fidelidad y la transparencia son necesarias en la traducción, especialmente en la traducción jurada, en la que el traductor jurado da fe pública de la veracidad del documento y de que el contenido del documento original se ha trasladado fiel e íntegramente a otro idioma y así lo certifica legalmente. La fidelidad se puede entender como la medida en que una traducción expresa de manera precisa el significado que pretende el texto origen, sin distorsionarlo.
                </p>
            </div>
            <div className='traduccion__content'>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={4} lg={4} >
                        <div className='traduccion__content__fondo' >
                            <p>
                                <strong>Tipos de traduccion</strong></p>
                            <p>
                                Traduccion Inversa
                            </p>
                            <p>
                                Traduccion de Textos Legales
                            </p>
                            <p>
                                Traduccion y Edicion
                            </p>
                            <p>
                                Tecnicismos y Regionalismos
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <div className='traduccion__content__fondo' >
                            <p>
                                <strong>Uso de Plataforma de Traduccion como :</strong></p>
                            <p>
                                SDL Trados Studio
                            </p>
                            <p>
                                SMARTCAT
                            </p>
                            <p>
                                WORDBEE
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <div className='traduccion__content__fondo' >
                            <p>
                                <strong>Flujo de Trabajo :</strong></p>
                            <p>
                                Traduccion
                            </p>
                            <p>
                                Edicion
                            </p>
                            <p>
                                Revision y Correcion del Texto
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
