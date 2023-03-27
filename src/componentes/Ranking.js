import React from "react"
import "./ranking.css"
import { useState, useEffect, useContext } from "react";
import { myContext } from "../context/myContext";
import { traerDocumentos, firestoreRankingData } from "../services/firestore";


function Ranking() {
	

	const [dataRankin, setDataRanking] = useState([])

	async function esperarDocumentos() {
		await traerDocumentos()
		setDataRanking(firestoreRankingData)	
	}


	
	useEffect(() => {	
		esperarDocumentos()
	}, [])	

  return(
    <>
			<ol className="ranking_ol">
				<h3 className="ranking_title">RANKING</h3>
				{ firestoreRankingData == undefined ? <h3>CARGANDO...</h3> : dataRankin.map( ele => {
			return <li className="ranking_li" key={ele.id}>{ele.nombre} (puntos: {ele.puntos}) </li>
		})}	
			</ol>	
    </>
  )}


export default Ranking;