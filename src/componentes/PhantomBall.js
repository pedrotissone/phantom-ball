import React from "react";
import { useState, useEffect, useContext } from "react";
import { myContext } from "../context/myContext";
import { Link } from "react-router-dom"
import { crearDocumento } from "../services/firestore";
import Swal from "sweetalert2";
import "./phantomBall.css"

function PhantomBall() {
	
	const sumar = useContext(myContext).sumarPuntos
	
	const { nombreDeUsuario, puntaje } = useContext(myContext)


	const [className, setClassName] = useState("phantomBall_start")

	function changeClassName() {
		if (className == "phantomBall_start") {
			setClassName("phantomBall_invert")		
		} else {
			setClassName("phantomBall_start")
		}
	}

	function handleClick(e) {
		if (count > 0 && mostrarBoton == false) {			
			changeClassName()
			sumar()
		} else {
			
		}}
	

	const [posicionTotal, setPosicionTotal] = useState({
		top: 350,
		right: 0,
		bottom: 0,
		left: 150,
	})

	const [timeLeft, setTimeLeft] = useState(20)

	const [mostrarBoton, setMostrarBoton] = useState(false)

	const [count, setCount] = useState(20)
											

	// useEffect(() => {
	// 	if (count > 0) {
	// 	const timer = setTimeout(() => {
	// 		if (timeLeft > 0) {
	// 			setTimeLeft(timeLeft - 1)
	// 		} else {				
	// 			Swal.fire({
	// 				titleText: "El juego terminó, ya no tiene más clicks",
	// 				icon: "warning",
	// 				iconColor: "red",
	// 				background: "#17202A",
	// 				color: "#fff",					
	// 				confirmButtonColor:"#17202A",
	// 				})
	// 			setMostrarBoton(true)
	// 		}	
	// 	}, 1000)
	// } else {
	// 	setTimeLeft(0)
	// 	setMostrarBoton(true)
	// }}, [timeLeft])


	// useEffect(() => {		
	// 	  const intervalo = setInterval(() => {					

	// 		setPosicionTotal({
	// 		top: Math.floor(Math.random() * (window.innerHeight - 45)),
	// 		right: Math.floor(Math.random() * (window.innerWidth - 45)),
	// 		bottom: Math.floor(Math.random() * (window.innerHeight - 45)),
	// 		left: Math.floor(Math.random() * (window.innerWidth - 45)),
	// 		});
	// 	}, 1000); 	

	// setTimeout(() => {
	// 	clearInterval(intervalo);			
	// 	setMostrarBoton(true)		
	// }, 20000);

	// return () => clearInterval(intervalo);}, []);	
	


	async function handlecount(e) {		
		if ( count > 0 && mostrarBoton == false) {
			setCount(count - 1)			
		} else if (e.target.tagName == "BUTTON") {
			handleDocCreation()			
		} else {
			Swal.fire({
				titleText: "El juego terminó, ya no tiene más clicks",
				icon: "warning",
				iconColor: "red",
				background: "#17202A",
				color: "#fff",					
				confirmButtonColor:"#17202A",
				})
		}
	}

	const handleDocCreation = async () => {
		await crearDocumento(nombreDeUsuario, puntaje)
	} 		


  return(
      <div  onClick={handlecount} className="phantomBall_contenedor">
				<div className="phantomball_divInfo">
					<p className="phantomball_count">CLICKS: {count}</p>
					<p className="phantomBall_time"> TIEMPO: {timeLeft}</p>
					<p className="phantomball_puntaje">PUNTOS: {puntaje}</p>
				</div>
				
				{/* // <svg className="phantomBall_start" onClick={handleClick} style={{  color: color, position: 'absolute', top: `${posicionTotal.top}px`, left: `${posicionTotal.left}px`, bottom: `${posicionTotal.bottom}px`, right: `${posicionTotal.rigth}px` }} width="17" height="17" viewBox="0 0 17 17"  xmlns="http://www.w3.org/2000/svg">
				// { mostrarBoton == false && <circle cx="8.5" cy="8.5" r="8.5" fill={color} /> }
				// </svg> */}

				{ mostrarBoton == false && <img src="./circulo.png" className={className} onClick={handleClick} style={{ position: 'absolute', top: `${posicionTotal.top}px`, left: `${posicionTotal.left}px`, bottom: `${posicionTotal.bottom}px`, right: `${posicionTotal.right}px` }}/>}
				
				
				<div className="phantomball_divMostrarBoton">
					<Link to={"/resultado"}>{mostrarBoton && <button className="phantomBall_mostrarBoton">Ver resultado</button>}</Link>
				</div>									 
				
      </div>
  );
}

export default PhantomBall;