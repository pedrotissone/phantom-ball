import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, getDoc, getDocs, setDoc, addDoc, doc, deleteDoc, orderBy, limit } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyD6Dt6LIO-i58GcXA8P4Pd-wKum_-JGFJE",
  authDomain: "phantomball-41eb4.firebaseapp.com",
  projectId: "phantomball-41eb4",
  storageBucket: "phantomball-41eb4.appspot.com",
  messagingSenderId: "439426339066",
  appId: "1:439426339066:web:533dcc7565be19d3477943"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app) //Base de datos ES LA REFERENCE

export let firestoreRankingData

export async function traerDocumentos() {
	//1) Referenciamos nuetras coleccion
	const collectionRanking = collection(db, "ranking")
	//2)Ordenamos la coleccion de mayor a menor por el valor del key puntos y limitamos a 10 a traves de una query
	const orderedCollecctionRanking = query(collectionRanking, orderBy("puntos", "desc"), limit(10))
	//3) Solicitamos los documentos de la coleccion
	const collectionRankingSnapshot = await getDocs(orderedCollecctionRanking)
	//4) accedemos a los datos que nesecitamos de nuestra coleccion mapeando y usando el metodo data()
	const collectionRankingData = collectionRankingSnapshot.docs.map( doc => {
		return({
			...doc.data(),
			id: doc.id
		})
	})
	return firestoreRankingData = collectionRankingData
}
//Set doc, tenes que referenciar el documento con el par collection/doc y te sobreescribe el mismo documento cada vez que lo llamas
//getDoc sirve para leer tu documento, te devuelve un snapshot (un objeto que representa tu documento) para leer los datos usas el metodo data()

const collectionRef = collection(db, "ranking") //Para crear nuevos documentos, hay que referenciar nuestra collección, y usar addDoc.

export let totalDocs //No voy a usar todo esto

export const collectionSnapshot = async () => { //tampoco esto
	const snapRef = await getDocs(collectionRef)
	console.log(snapRef.docs)
	return totalDocs = snapRef.docs
} 
	

export async function crearDocumento(a, b) {
	const newDoc = await addDoc(collectionRef, {
		nombre: a,
		puntos: b
	});	
}



