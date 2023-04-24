import "./equipo.css"
import Colaborador from "../colaborador";

const Equipo = (props)=>{
    // Destructuracion
    const {colorPrimario, colorSecundario,titulo} = props.datos;
    const {colaboradores} = props;
    const estiloTitulo = {borderColor: colorPrimario}

    return <section className="equipo" style={{backgroundColor: colorSecundario}}>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
            <Colaborador/>
            {
                colaboradores.map((colaborador)=> <Colaborador datos={colaborador} key={colaborador.id}/>)
            }
            
        </div>
    </section>
}

export default Equipo;