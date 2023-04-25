import "./equipo.css"
import Colaborador from "../colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props)=>{
    // Destructuracion
    const {colorPrimario, titulo, id} = props.datos;
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props;
    const estiloTitulo = {borderColor: colorPrimario}

    return<>
    { colaboradores.length > 0 &&
        <section className="equipo" style={{backgroundColor: hexToRgba(colorPrimario, 0.6)}}>
            <input
                type="color"
                className="input-color"
                value={colorPrimario}
                onChange={(e)=>{
                    actualizarColor(e.target.value, id);
                }}
            />
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador, index)=> <Colaborador 
                    datos={colaborador} 
                    key={index} 
                    color={colorPrimario}
                    eliminarColaborador={eliminarColaborador}
                    like={like}
                    />)
                }
            </div>
        </section>
    }</>
}

export default Equipo;