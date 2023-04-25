import { useState } from "react"
import "./formulario.css"
import Campo from "../campo"
import ListaDeOpciones from "../listoptions"
import Boton from "../boton"
const Formulario = (props) => {

    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const[equipo,actualizarEquipo]= useState("")
    const [titulo,actualizarTitulo] = useState("")
    const [color,actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (e)=> {
        e.preventDefault()
        console.log('Manejar el envió');
        let datosAEnviar={
            nombre,
            puesto,
            foto,
            equipo,
        }
        registrarColaborador(datosAEnviar);
    }
    const manejarNuevoEquipo = (e)=>{
        e.preventDefault()
        crearEquipo({titulo,colorPrimario:color});
    }
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo
                tipo="text"
                titulo="Nombre" 
                placeholder="Ingrese nombre..." 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />
            <Campo
                tipo="text"
                titulo="Puesto" 
                placeholder="Ingresar puesto..." 
                required 
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <Campo
            tipo="url"
            titulo="Foto" 
            placeholder="Ingresar enlace de foto..." 
            required
            valor={foto}
            actualizarValor={actualizarFoto}
            />
            <ListaDeOpciones
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}
            />
            <Boton>Crear</Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo
                tipo="text"
                titulo="Titulo" 
                placeholder="Ingrese titulo..." 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            />
            <Campo
                tipo="color"
                titulo="Color" 
                // placeholder="Ingresar el color en Hex..." 
                required 
                valor={color}
                actualizarValor={actualizarColor}
            />
            <Boton>Registrar equipo</Boton>
            </form>
    </section>
}
export default Formulario