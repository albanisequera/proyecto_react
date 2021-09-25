import React from 'react';
import Grid from "@material-ui/core/Grid";
import "./style.scss";
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import HipaaImagen from '../../../assets/HipaaImagen.jpeg';


export default function Hipaa() {

    return (
        <div className='hippa'>
            <div className='container__hippa'>
                <div >
                    <img className="title__hippa" src={HipaaImagen} alt='HipaaImagen' />
                </div>
                <div>
                    <p>
                        La Ley de Transferencia y Responsabilidad de Seguro Médico (Health Insurance Portability and Accountability Act, HIPAA por sus siglas en inglés) de 1996 fue creada para proteger a millones de trabajadores y a miembros de sus familias en los Estados Unidos que padecen alguna afección médica. Estas personas a menudo presentaban dificultades para conseguir cobertura médica debido a una afección médica que tenían antes de intentar obtener un seguro médico (lo cual se le conoce como una condición preexistente). De hecho, antes de que entraran en vigor las garantías importantes de la ley de atención médica, conocida como Ley de Atención Médica Accesible (ACA, siglas en inglés), muchas personas con problemas de salud graves no podían adquirir un seguro médico.
                        Ahora, muchas de las disposiciones de HIPAA no son necesarias debido a las protecciones más fuertes de la ley más reciente de atención a la salud. No obstante, las personas que tengan planes médicos previos, conocidos como planes de derechos adquiridos, pueden aún beneficiarse de las protecciones que provee la HIPAA.
                        Animamos a todos nuestros interesados en este programa para darnos una llamada para que podamos dar la orientación necesaria sobre el curso HIPAA más apropiado para llevar a cabo.
                    </p>
                </div>
            </div>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} md={6} lg={6} >
                        <div className='hipaa__content__fondo' >
                            <p className="hipaa__content__texto">
                                <strong>hipaa</strong></p>
                            <p className="hipaa__content__texto">
                                ¿Qué es el fraude médico, el desperdicio y el abuso?
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <div className='hipaa__content__fondo' >
                            <p className="hipaa__content__texto">
                                <strong>Beneficios de este curso :</strong></p>
                            <p className="hipaa__content__texto">
                                Cumplir con todas las leyes, regulaciones y requisitos estatales de Medicaid y CMS aplicables
                            </p>
                            <p className="hipaa__content__texto">
                                Evitar multas y sanciones por incumplimiento.
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <div className='hipaa__content__fondo' >
                            <p className="hipaa__content__texto">
                                <strong>Tiempo de finalización promedio: 1.5 horas Formato: Entrenamiento a ritmo individual en línea Acceso: Acceso en línea por 60 días. Certificado de finalización: sí</strong>
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
