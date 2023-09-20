import React, { useEffect, useState } from 'react';


const PedidosFormStep1 = (props) => {

    const {ClienteSeleccionado, setClienteSeleccionado} = props;
    const [cliente, setCliente] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:4000/api/Clientes")
            .then(response => response.json())
            .then(data => {
                setCliente(data);
            })
            .catch(error => {
                console.error('Error al obtener clientes', error);
            })

    },[]);

    return(
        <div className='row'>
            <div className='col'>
                <label>Seleccionar cliente</label>
                <select className='form-control' value={ClienteSeleccionado} onChange={(e)=>setClienteSeleccionado(e.target.value)}>
                    {cliente.map((cliente)=>(
                        <option key={cliente.id} value={cliente.nombres}>
                            {cliente.nombres}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
export default PedidosFormStep1;