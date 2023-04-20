import "./equipo.css"

const Equipo = (props)=>{
    // Destructuracion
    const {colorPrimario, colorSecundario,titulo} = props.datos;
    const estiloTitulo = {borderColor: colorPrimario}

    return <section className="equipo" style={{backgroundColor: colorSecundario}}>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">

        </div>
    </section>
}

export default Equipo;