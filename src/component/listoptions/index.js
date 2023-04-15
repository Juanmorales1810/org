import './listoptions.css'

const ListaDeOpciones = () => {
    // Método map -> arreglo.map((equipos)=> {
        //     return <options><options/>
    // })
    const equipos = ["Programación", "Front End", "Data Science", "Devops", "UX y Diseño", "Movil", "Innovación y Gestión"]
    return <div className='ListaDeOpciones'>
        <label>Equipos</label>
        <select>
        {equipos.map((equipo, index) => <option key={index}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaDeOpciones