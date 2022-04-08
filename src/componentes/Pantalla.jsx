import React from "react";
import '../stylesheets/Pantalla.css';
//se puede definir un componente con una funcion flecha
const Pantalla = ({ input }) => (
    <div className="input">
        {input}
    </div>
);

export default Pantalla;