import react from "react";
import { useState, useContext } from "react"; //Importo el hook useContext para poder conectarme al contexto
import { myContext } from "../context/myContext"; //Importo el contexto al que quiero que acceda el componente
import "./cuadroDeInformacion.css"


function CuadroDeInformacion() {

	const { nombreDeUsuario, puntaje } = useContext(myContext)


  return(
		<>
		<div className="contenedorDeInformacion">
			<p className="cuadroDeInformacion_title">Nombre de Usuario</p>
			<p className="cuadroDeInformacion_usuario">{nombreDeUsuario}</p>
			<p className="cuadroDeInformacion_title">Puntos</p>
			<p className="cuadroDeInformacion_puntaje">{puntaje}</p>	
		</div>		
		</>
    
	);
}

export default CuadroDeInformacion;