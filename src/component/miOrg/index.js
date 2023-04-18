import { useState } from 'react';
import './miOrg.css'

const MiOrg = (props) =>{
    //Estado - Hooks
    //useState
    //const [nombreVariable, funcionActualizar] = useState(valorInicial)
    console.log(props);
    // const [mostrar, actualizarMostrar]= useState(true)
    // const manejarClick = () =>{
    //     console.log('mostrar o ocultar elemento', !mostrar);
    //     actualizarMostrar(!mostrar)
    // }

    return <section className='orgSection'>
        <h3 className='titulo'>Mi Organización</h3>
        <img src='/img/add.png' alt='add' onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg