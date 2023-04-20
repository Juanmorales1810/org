import { useState } from 'react';
import './App.css';
import Header from './component/header/header.js';
import Formulario from './component/formulario/formulario'
import MiOrg from './component/miOrg';
import Equipo from './component/equipo';

function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(false)

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //Condición && seMuestra
  const cambiarMostrar = ()=> {
    actualizarMostrar(!mostrarFormulario)
  }
  // Lista de equipos
  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
]
  return (
    <div>
      <Header/>
      {/* { mostrarFormulario  ? <Formulario/> :<></>} */}
      { mostrarFormulario  && <Formulario/> }
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipo) => <Equipo key={equipo.titulo} datos={equipo} />)}
    </div>
  );
}

export default App;
