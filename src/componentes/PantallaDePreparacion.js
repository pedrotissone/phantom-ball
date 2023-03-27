import React from "react"
import CuadroDeInformacion from "./CuadroDeInformacion";
import { Link } from "react-router-dom";
import "./pantallaDePreparacion.css"


function PantallaDePreparacion() {

    return(
        <>
        	<div className="pantallaDePreparacion_contenedor">
						<div className="pantallaDePreparacion_cuadroDeInformacion">
						<CuadroDeInformacion />
						</div>
						
          	<Link to={"/PhantomBall"}> <button className="pantallaDePreparacion_button">Hága click para comenzar</button> </Link>
        	</div>
        </>
    );
}

export default PantallaDePreparacion;