import React from 'react';
import PedidosFormStep1 from '../../components/pedidos-form/step1';
import PedidosFormStep2 from '../../components/pedidos-form/step2';
import PedidosFormStep3 from '../../components/pedidos-form/step3';

const PedidosScreen = () => {

    const [step, setStep] = React.useState(1);
    const [clienteSeleccionado, setClienteSeleccionado] = React.useState(null);
    const [productosSeleccionados, setProductosSeleccionados] = React.useState([]);

    return(
        <div className="container">
            {/* Formularios */}
            {step == 1 && <PedidosFormStep1 clienteSeleccionado={clienteSeleccionado} setClienteSeleccionado={setClienteSeleccionado} />}        
            {step == 2 && <PedidosFormStep2 productosSeleccionados={productosSeleccionados} setProductosSeleccionados={setProductosSeleccionados} />}        
            {step == 3 && <PedidosFormStep3 productosSeleccionados={productosSeleccionados} clienteSeleccionado={clienteSeleccionado} />}        
            {/* Botones */}
            <div className="row">
                <div className="col">
                    {step > 1 && <button type="button" className="btn btn-danger" onClick={()=>setStep(prev => prev - 1)}>Atrás</button>}                    
                </div>
                <div className="col">
                    {step < 3 && <button type="button" className="btn btn-success" onClick={()=>setStep(prev => prev + 1)}>Siguiente</button>}
                </div>
            </div>
        
        </div>
    )
}

export default PedidosScreen;