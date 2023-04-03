import React from "react"
import "./ranking.css"
import { useState, useEffect, useContext } from "react";
import { myContext } from "../context/myContext";
import { traerDocumentos, firestoreRankingData } from "../services/firestore";


function Ranking() {
	

	const [dataRanking, setDataRanking] = useState([])

	async function esperarDocumentos() {
		await traerDocumentos()
		setDataRanking(firestoreRankingData)			
	}
	
	useEffect(() => {	
		esperarDocumentos()
	}, [])	

  return(
    <div className="ranking_div">
			<ul className="ranking_ul">
				<h3 className="ranking_title">RANKING</h3>
				{ firestoreRankingData == undefined ? <h3>CARGANDO...</h3> : dataRanking.map( ele => {
			return <li className="ranking_li" key={ele.id}>{ele.nombre} (puntos: {ele.puntos}) </li>
		})}	
			</ul>	
    </div>
  )}


export default Ranking;