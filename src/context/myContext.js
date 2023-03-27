import React from "react";
import { createContext, useState } from "react"; //Importamos el context

export const myContext = createContext() //Lo inicializamos y exportamos

export function MyContextProvider(props) { //Creamos un COMPONENTE,  que va a ser un Provider, donde estan todas las variables que van a poder ser consumidas por otros componentes

	const [nombreDeUsuario, setNombreDeUsuario] = useState("")

	const onChangeHandler = ele => {
		setNombreDeUsuario(ele.target.value)
	}

	const [puntaje, setPuntaje] = useState(0)

		const sumarPuntos = () => {				
		const nuevosPuntos = puntaje + 10	
		setPuntaje(nuevosPuntos)			
	}

	const value = {
		nombreDeUsuario,
		onChangeHandler,
		puntaje,
		sumarPuntos,		
	}

return(
	//Los componentes que esten dentro del Provider son los que van a poder acceder al context
	//Si no pone props.children no se va a renderizar nada en App.
	//En el value, estan todas las variables que quiero que sean accecibles para los componentes dentro del provider
		<myContext.Provider value={ value }>
			{props.children}
		</myContext.Provider>	
);
}