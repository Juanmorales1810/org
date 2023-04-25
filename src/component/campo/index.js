import './campo.css'

const Campo =(props) => {

    const manejarCambio =(e) =>{
        props.actualizarValor(e.target.value)
    }
    return <div className={'campo campo-${type}'}>
        <label>{props.titulo}</label>
        <input 
            placeholder={props.placeholder}
            required={props.required}  
            value={props.valor}
            onChange={manejarCambio}
            type={props.tipo}
            />
            
    </div>
}
export default Campo