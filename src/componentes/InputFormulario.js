import React from "react";
import { useContext } from "react";
import { myContext } from "../context/myContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./inputFormulario.css"


function InputFormulario( ) {

	//Version Sugar = const { onChangeHandler } = useContext(myContext)
	const onChangeHandler = useContext(myContext).onChangeHandler
	const { nombreDeUsuario }  = useContext(myContext)


	const formHandler = ele => {
		ele.preventDefault();		 				
	}

	

	return (
	<div className="inputFormulario_div">
		<form className="inputFormulario_contenedor" onSubmit={formHandler}>

			<input
			className="inputFormulario_input"
			type="text"
			placeholder="Escriba su nombre para jugar"
			name="texto"
			onChange={onChangeHandler}/>

			{/* Este link lleva a otro componente, definido una Route de App */}

			{
				nombreDeUsuario != "" ? 
				<Link to={"/pantallaDePreparacion"}>
					<button className="inputFormulario_button">Confirmar</button>	
				</Link>
				: <button className="inputFormulario_button" onClick={() => Swal.fire({
					titleText: "Debe ingresar un nombre de usuario",
					icon: "warning",
					background: "#17202A",
					color: "#fff",
					iconColor:"red",
					confirmButtonColor:"red",
					})}>Confirmar</button>
			}					
		</form>	
	</div>
	);
}

export default InputFormulario