import React, { useEffect, useState } from 'react';

const PedidosFormStep2 = (props) => {

    const {productosSeleccionados, setProductosSeleccionados} = props;
    const [producto,setProducto] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:4000/api/productos")
            .then(response => response.json())
            .then(data => {
                setProducto(data);
            })
            .catch(error => {
                console.error('Error al obtener productos', error);
            })

    },[]);

    const handleAddProducts = (productData) => {
        setProductosSeleccionados([...productosSeleccionados, productData])
        alert("Producto agregado exitosamente");
    }

    return(
        <div className="row">
            <div className="col">
                <div className='row'>
                    {producto && producto.length > 0 && producto.map((data, index)=>{
                        return(
                            <div className="col-lg-3" key={index}>
                                <div className="card" >
                                    <div className="card-body">
                                        <div className="card-title">{data.nombre}</div>
                                        <img src={'https://via.placeholder.com/200'} alt="..." className="img-fluid" /> 
                                        <p><b>Precio:</b>{data.precioVenta}</p>
                                        <button type="button" onClick={()=>handleAddProducts(data)} className="btn btn-info">Agregar</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>        
    )
}

export default PedidosFormStep2;