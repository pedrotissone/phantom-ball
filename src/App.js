import "./App.css";
import InputFormulario from "./componentes/InputFormulario";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhantomBall from "./componentes/PhantomBall";
import Header from "./componentes/Header";
import { MyContextProvider } from "./context/myContext";
import CuadroDeInformacion from "./componentes/CuadroDeInformacion";
import PantallaDePreparacion from "./componentes/PantallaDePreparacion";
import Ranking from "./componentes/Ranking";

function App() {

  return (
    <MyContextProvider>
      <BrowserRouter>        
        <Routes>

          <Route path="/" element={
            <>
            <Header />
            <div className="app_contenedor">
              <InputFormulario />
            </div> 
            </>}
          />

          <Route path="/pantallaDePreparacion" element={
            <>
            <Header />
          <PantallaDePreparacion />
          </>} />

          <Route path="/PhantomBall" element={<PhantomBall />}/>

          <Route path="/resultado" element={
            <>
              <Header/>
              <div className="divDeResultados">
              <CuadroDeInformacion/>
              <Ranking/>
              </div>              
            </>            
          }/>

        </Routes>

      </BrowserRouter>
    </MyContextProvider>
  );
}

export default App;
