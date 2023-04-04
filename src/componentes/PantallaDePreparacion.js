import React from "react"
import CuadroDeInformacion from "./CuadroDeInformacion";
import { Link } from "react-router-dom";
import "./pantallaDePreparacion.css"
import Ranking from "./Ranking";


function PantallaDePreparacion() {

	return (
		<>
			<div className="pantallaDePreparacion_contenedor">				
				<CuadroDeInformacion />
				
				<div className="pantallaDePreparacion_divReglas">
					<p className="pantallaDePreparacion_textReglas"><span style={{color: "yellow"}}>ATENCIÓN:</span> El juego se trata de una pelota que aparece y desaparece cada un segundo durante 20 segundos y el usuario debe tratar de hacerle click. Cada click suma 10 puntos y solo se puede hacer click 20 veces, por lo que el puntaje máximo es el de 200 puntos. <span style={{color: "red"}}>NUNCA NADIE LOGRÓ HACER CLICK LAS 20 VECES Y TU NO SERÁS EL PRIMERO.</span></p>
					<div className="pantallaDePreparacion_divButton">
						<Link to={"/PhantomBall"}> <button className="pantallaDePreparacion_button">Haga click para comenzar</button> </Link>
					</div>
				</div>
				<div className="pantallaDePreparacion_divRanking">
				<Ranking />
				</div>
				

			</div>

			{/* <div className="pantallaDePreparacion_divButton">
				<Link to={"/PhantomBall"}> <button className="pantallaDePreparacion_button">Haga click para comenzar</button> </Link>
			</div> */}
		</>
	);
}

export default PantallaDePreparacion;