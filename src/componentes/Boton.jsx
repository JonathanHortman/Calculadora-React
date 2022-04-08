import React from "react";
import '../stylesheets/Boton.css';
//props.children se usa cuando uso etiqueta de apertura y cierre, para darle un input

function Boton(props) {

    const esOperador = (valor) => {
        return isNaN(valor) && (valor != '.') && (valor != '=')
    }

    return (
        <div       //tiene que ser un operador (* / + -) para que se le asigne el className operador
            className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}
            onClick={() => props.manejarClic(props.children)}> 
            {props.children}
        </div>
    );
}

export default Boton;