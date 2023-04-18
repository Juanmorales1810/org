import { useState } from 'react';
import './App.css';
import Header from './component/header/header.js';
import Formulario from './component/formulario/formulario'
import MiOrg from './component/miOrg';

function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(true)

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //Condición && seMuestra
  const cambiarMostrar = ()=> {
    actualizarMostrar(!mostrarFormulario)
  }
  return (
    <div>
      <Header/>
      {/* { mostrarFormulario  ? <Formulario/> :<></>} */}
      { mostrarFormulario  && <Formulario/> }
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
