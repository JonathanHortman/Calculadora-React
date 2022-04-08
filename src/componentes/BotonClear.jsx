import React from "react";
import '../stylesheets/BotonClear.css'

const BotonClear = (props) => (
    <div className="boton-clear" onClick={props.clearInput}>
        {props.children}
    </div>
);

export default BotonClear;