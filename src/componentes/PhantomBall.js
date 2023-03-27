import React from "react";
import { useState, useEffect, useContext } from "react";
import { myContext } from "../context/myContext";
import { Link } from "react-router-dom"
import { crearDocumento } from "../services/firestore";
import "./phantomBall.css"

function PhantomBall() {
	
	const sumar = useContext(myContext).sumarPuntos
	
	const { nombreDeUsuario, puntaje } = useContext(myContext)


	const [color, setColor] = useState("black")

	function changeColor() {
		if (color == "black") {
			setColor("red")
		} else if (color == "red") {
			setColor("blue")
		} else {
			setColor("black")
		}
	}

	function handleClick() {		
		changeColor()
		sumar()			
	}

	const [posicionTotal, setPosicionTotal] = useState({
		top: 350,
		rigth: 0,
		bottom: 0,
		left: 750,
	})

	useEffect(() => {				
		const intervalo = setInterval(() => {
			setPosicionTotal({
			top: Math.floor(Math.random() * (window.innerHeight - 45)),
			rigth: Math.floor(Math.random() * (window.innerWidth - 45)),
			bottom: Math.floor(Math.random() * (window.innerHeight - 45)),
			left: Math.floor(Math.random() * (window.innerWidth - 45)),
			});
		}, 1500);	

	setTimeout(() => {
		clearInterval(intervalo);			
		setMostrarBoton(true)
	}, 5000);

	}, [])

	
	const [mostrarBoton, setMostrarBoton] = useState(false)
	

		
	// return () => clearInterval(intervalo);}, []); //Effect cleanup solo sirve para rendimiento por eso lo saque 

  return(
      <div className="phantomBall_contenedor">
				<svg className="phantomBall_start" onClick={handleClick} style={{  color: color, position: 'absolute', top: `${posicionTotal.top}px`, left: `${posicionTotal.left}px`, bottom: `${posicionTotal.bottom}px`, right: `${posicionTotal.rigth}px` }} width="17" height="17" viewBox="0 0 17 17"  xmlns="http://www.w3.org/2000/svg">
					<circle cx="8.5" cy="8.5" r="8.5" fill={color} />
				</svg>				
				<Link to={"/resultado"}>{mostrarBoton && <button onClick={async () => await crearDocumento(nombreDeUsuario, puntaje)} className="phantomBall_mostrarBoton">Ver resultado</button>}</Link>				
      </div>
  );
}

export default PhantomBall;