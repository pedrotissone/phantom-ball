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

	function handleClick(e) {
		if (count > 0 && mostrarBoton == false) {			
			changeColor()
			sumar()
		} else {
			
		}}
	

	const [posicionTotal, setPosicionTotal] = useState({
		top: 350,
		rigth: 0,
		bottom: 0,
		left: 750,
	})

	const [timeLeft, setTimeLeft] = useState(5)

	const [mostrarBoton, setMostrarBoton] = useState(false)

	const [count, setCount] = useState(5)
											

	useEffect(() => {
		if (count > 0) {
		const timer = setTimeout(() => {
			if (timeLeft > 0) {
				setTimeLeft(timeLeft - 1)
			} else {				
				alert("Se acabó el tiempo, el juego terminó")
				setMostrarBoton(true)
			}	
		}, 1000)
	} else {
		setTimeLeft(0)
		setMostrarBoton(true)
	}	},[timeLeft])


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
	
	// return () => clearInterval(intervalo);}, []); //Effect cleanup solo sirve para rendimiento por eso lo saque


	async function handlecount(e) {		
		if ((e.target.tagName == "DIV" && count > 0 && mostrarBoton == false) || (e.target.tagName == "circle" && count > 0 && mostrarBoton == false) || (e.target.tagName == "P" && count > 0 && mostrarBoton == false) ){
			setCount(count - 1)
		} else if (e.target.tagName == "BUTTON") {
			handleDocCreation()
			console.log("soy button")
		} else {
			alert("El juego terminó, ya no tiene mas clicks!")
		}
	}

	const handleDocCreation = async () => {
		await crearDocumento(nombreDeUsuario, puntaje)
	} 		


  return(
      <div onClick={handlecount} className="phantomBall_contenedor">
				<div className="phantomball_divInfo">
					<p className="phantomball_count">CLICKS: {count}</p>
					<p className="phantomBall_time"> TIEMPO: {timeLeft}</p>
					<p className="phantomball_puntaje">PUNTOS: {puntaje}</p>
				</div>
				
				<svg className="phantomBall_start" onClick={handleClick} style={{  color: color, position: 'absolute', top: `${posicionTotal.top}px`, left: `${posicionTotal.left}px`, bottom: `${posicionTotal.bottom}px`, right: `${posicionTotal.rigth}px` }} width="17" height="17" viewBox="0 0 17 17"  xmlns="http://www.w3.org/2000/svg">
				{ mostrarBoton == false && <circle cx="8.5" cy="8.5" r="8.5" fill={color} /> }
				</svg> 
				
				<div className="phantomball_divMostrarBoton">
					<Link to={"/resultado"}>{mostrarBoton && <button className="phantomBall_mostrarBoton">Ver resultado</button>}</Link>
				</div>									 
				
      </div>
  );
}

export default PhantomBall;