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
					<p className="pantallaDePreparacion_textReglas">Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance. Everyone has the right to freedom of opinion and expression; this right includes freedom to hold opinions without interference and to seek, receive and impart information and ideas through any media and regardless of frontiers. Everyone has the right to rest and leisure, including reasonable limitation of working hours and periodic holidays with pay.</p>
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