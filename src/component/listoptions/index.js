import './listoptions.css'

const ListaDeOpciones = (props) => {
    // Método map -> arreglo.map((equipos)=> {
        //     return <options><options/>
    // })
    
    const manejarCambio=(e)=>{
        console.log("cambio",e.target.value);
        props.actualizarEquipo(e.target.value)
    }

    return <div className='ListaDeOpciones'>
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option 
            value="" 
            disabled 
            defaultValue="" 
            hidden>Seleccionar equipo</option>
        {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaDeOpciones