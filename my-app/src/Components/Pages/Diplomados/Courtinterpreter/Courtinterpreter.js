import React from 'react';
import "./style.scss";
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import courtImagen from '../../../assets/courtImagen.jpeg';

export default function Courtinterpreter() {

    return (
        <div className="court">
            <div className='container__court'>
                <div>
                    <img className="title__court" src={courtImagen} alt='courtImagen' />
                </div>
                <div>
                    <p>
                        <strong>Court Interpreter</strong>
                    </p>
                    <p>
                        El curso presenta a los participantes las funciones y habilidades de los intérpretes legales y judiciales, la ética del intérprete y la terminología legal y judicial tanto en inglés como en el idioma de destino. Los estudiantes obtendrán una comprensión del sistema legal y observarán de cerca los Estándares y Procedimientos para Intérpretes de la Corte, el documento que regula la interpretación profesional de la corte.
                        Los intérpretes experimentados que son hablantes nativos del idioma de destino ofrecen orientación lingüística y juegos de roles en el idioma de destino.
                        COSTO TOTAL DEL PROGRAMA:
                        $ 150 (tarifa de inscripción no reembolsable de $ 20 más tarifa de curso de $ 150)

                        LUGAR DE ENTRENAMIENTO (sujeto a cambios):
                        El curso es completamente en línea.
                    </p>
                    <p>
                        <strong>COSTO TOTAL DEL PROGRAMA:</strong> <br />
                        $ 150 (tarifa de inscripción no reembolsable de $ 20 más tarifa de curso de $ 150)<br />
                        <strong>LUGAR DE ENTRENAMIENTO (sujeto a cambios)</strong><br />
                        El curso es completamente en línea.
                    </p>
                </div>
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
