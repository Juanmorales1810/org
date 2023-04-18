import { useState } from "react"
import "./formulario.css"
import CampoTexto from "../campoTexto"
import ListaDeOpciones from "../listoptions"
import Boton from "../boton"
const Formulario = () => {

    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const[equipo,actualizarEquipo]= useState("")

    const manejarEnvio = (e)=> {
        e.preventDefault()
        console.log('Manejar el envió');
        let datosAEnviar={
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(datosAEnviar);
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingrese nombre..." 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />
            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingresar puesto..." 
                required 
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <CampoTexto 
            titulo="Foto" 
            placeholder="Ingresar enlace de foto..." 
            required
            valor={foto}
            actualizarValor={actualizarFoto}
            />
            <ListaDeOpciones
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            />
            <Boton>Crear</Boton>
        </form>
    </section>
}
export default Formulario