import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';
import Header from './component/header/header.js';
import Formulario from './component/formulario/formulario'
import MiOrg from './component/miOrg';
import Equipo from './component/equipo';
import Footer from './component/footer';

function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(false)
  const [colaboradores,actualizarColaboradores] = useState([
    {
      id: uuid(),
    equipo: "Programación",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de Software", 
    foto: "https://github.com/genesysaluralatam.png",
    fav: true
  },
    {
      id: uuid(),
    equipo: "Front End",
    nombre: "Juan Morales",
    puesto: "Desarrollador Jr", 
    foto: "https://github.com/Juanmorales1810.png",
    fav: false
  },
    {
      id: uuid(),
    equipo: "UX y Diseño",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructor", 
    foto: "https://github.com/JeanmarieAluraLatam.png",
    fav: false
  },
    {
      id: uuid(),
    equipo: "Front End",
    nombre: "Harland Lohora",
    puesto: "Instructor", 
    foto: "https://github.com/harlandlohora.png",
    fav: false
  },
    {
      id: uuid(),
    equipo: "Devops",
    nombre: "Cristian Velasco",
    puesto: "Head de Alura Latam", 
    foto: "https://github.com/christianpva.png",
    fav: false
  },
    {
      id: uuid(),
    equipo: "Innovación y Gestión",
    nombre: "Jose Gonzalez",
    puesto: "Head de Alura Latam", 
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    fav: false
  },
])
  const [equipos,actualizarEquipos] = useState( [
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
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
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
])

  //Ternario --> condición ? seMuestra : noSeMuestra
  //Condición && seMuestra

  const cambiarMostrar = ()=> {
    actualizarMostrar(!mostrarFormulario)
  }

  // Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador",colaborador);

    //Spread operator

    actualizarColaboradores([...colaboradores,colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    // actualizarColaboradores(colaboradores.filter((_, i) => i !== index))
    console.log('eliminar colaborador',id);
    const nuevosColaboradores = colaboradores.filter((colaborador)=>colaborador.id !== id)
    console.log(nuevosColaboradores);
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color
  const actualizarColor = (color, id) => {
    console.log('actualizar color',color, id);
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos,{...nuevoEquipo,id:uuid()}])
  }

  const like = (id) => {
    console.log("like",id);
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header/>

      {/* { mostrarFormulario  ? <Formulario/> :<></>} */}

      { mostrarFormulario  && <Formulario 
      equipos={equipos.map((equipo)=>equipo.titulo)}
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
      /> }
      
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipo) => <Equipo 
      key={equipo.titulo} 
      datos={equipo} 
      colaboradores={colaboradores.filter((colaborador)=>colaborador.equipo === equipo.titulo)}
      eliminarColaborador={eliminarColaborador}
      actualizarColor={actualizarColor}
      like={like}
      />)}

      <Footer/>

    </div>
  );
}

export default App;