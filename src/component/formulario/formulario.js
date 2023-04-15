import "./formulario.css"
import CampoTexto from "../campoTexto"
import ListaDeOpciones from "../listoptions"
const Formulario = () => {
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingrese nombre..." />
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto..." />
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto..." />
            <ListaDeOpciones/>
        </form>
    </section>
}
export default Formulario