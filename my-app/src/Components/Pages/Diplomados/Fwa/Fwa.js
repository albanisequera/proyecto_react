import React from 'react';
import Grid from "@material-ui/core/Grid";
import "./style.scss";
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import fwaImagen from '../../../assets/fwaImagen.jpeg';

export default function Fwa() {

    return (
        <div className="fwa">
            <div className='container__fwa'>
                <div >
                    <img className="title__fwa" src={fwaImagen} alt='fwaImagen' />
                </div>
                <div>
                    <p>
                        <strong>FWA (FRAUD, WASTE AND ABUSE)</strong>
                    </p>
                    <p>
                        ¿Qué es el fraude médico, el desperdicio y el abuso?

                        raude: es el engaño intencional o la tergiversación que un individuo sabe, o debería saber, que es falso, o que no cree que sea verdadero, y hace que saber que el engaño podría resultar en un beneficio no autorizado para sí mismo o para otra persona .

                        El fraude implica hacer declaraciones falsas o una tergiversación de hechos materiales para obtener algún beneficio o pago por el cual de lo contrario no existiría ningún derecho. Los actos pueden ser cometidos en beneficio propio de la persona o en beneficio de otra parte. Para ser considerado un fraude, el acto debe realizarse a sabiendas, intencional e intencionalmente.

                        Desperdicio: un intento de obtener un reembolso por artículos o servicios donde no hubo intención de engañar o tergiversar, pero el resultado de un error de facturación causó costos innecesarios para las compañías involucradas. El desperdicio incluye la sobreutilización de servicios no causados por acciones criminales negligentes. El desperdicio también implica el mal uso de los recursos.


                        Desperdicio significa uso excesivo de servicios o prácticas que resultan en costos innecesarios. El desperdicio también se refiere a un consumo o gasto inútil sin retorno adecuado, o un acto o instancia de desperdicio.

                        Abuso: describe las prácticas de los proveedores que son inconsistentes con las prácticas fiscales, comerciales o médicas sólidas y que resultan en:

                        Un costo innecesario para el programa de Medicaid y Medicare;
                        Reembolso por servicios que no son médicamente necesarios; o
                        Servicios que no cumplen con los estándares de atención médica reconocidos profesionalmente.
                        También incluye prácticas para los destinatarios que resultan en costos innecesarios para el programa de Medicaid y Medicare. El abuso es similar al fraude, excepto que no hay ningún requisito para probar o demostrar que los actos de abuso se cometieron a sabiendas, intencional e intencionalmente.
                    </p>
                    <p>
                        <strong>Detalles Del Curso</strong> <br />
                        Tiempo de finalización promedio: 1.5 horas<br />
                        Formato: Entrenamiento a ritmo individual en línea<br />
                        Acceso: Acceso en línea por 60 días.<br />
                        Certificado de finalización: sí<br />
                        Certificado de expiración: 1 año<br />
                        Audio: Sí<br />
                    </p>
                </div>

            </div>

            <Grid container spacing={1}>
                <Grid item xs={12} sm={6} md={6} lg={6} >
                    <div className='fwa__content__fondo' >
                        <p className="fwa__texto">
                            <strong>Fwa</strong></p>
                        <p className="fwa__texto">
                            ¿Qué es el fraude médico, el desperdicio y el abuso?
                        </p>
                    </div>
                </Grid>


                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <div className='fwa__content__fondo' >
                        <p className="fwa__texto">
                            <strong>Beneficios de este curso :</strong></p>
                        <p className="fwa__texto">
                            Cumplir con todas las leyes, regulaciones y requisitos estatales de Medicaid y CMS aplicables
                        </p>
                        <p className="fwa__texto">
                            Evitar multas y sanciones por incumplimiento.
                        </p>
                    </div>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <div className='fwa__content__fondo' >
                        <p className="fwa__texto">
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
