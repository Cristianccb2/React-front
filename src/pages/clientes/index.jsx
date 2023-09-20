import React from 'react';

const ClientesScreen = () => {

    const [formulario,setFormulario] = React.useState({})
    const [responseApi, setResponseApi] = React.useState(null);
    
    React.useEffect(()=>{
        console.log("[formulario]",formulario)
        if(Object.keys(formulario).length > 0 && Object.keys(formulario).includes("correo")){
            if(formulario.correo !=""){
                validateClient(formulario.correo)
            }
            console.log("se ha llenado el correo")
        }
    },[formulario])

    const handleChange =(e)=>{
        const {value, name} = e.target
        setFormulario({...formulario, [name]:value})
    }

    const validateClient =(correo) =>{
        const payload = {
            correo: correo
        }
        fetch("http://localhost:4000/api/Clientes/check", {
            method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
            setResponseApi(data.message)
          })
        .catch(error => console.error("se presento un error", error))
    }
    
    return(
        <>
        <div className="container">
          <div className="row">
              <div className="col-lg-6">
                  <div className="mb-3">
                    <label>Nombres</label>
                    <input type="text" className="form-control" name="nombres" onBlur={(e)=>handleChange(e)} />
                  </div>                
              </div>
              <div className="col-lg-6">
              <div className="mb-3">
                <label>Apellidos</label>
                <input type="text"  className="form-control" name="apellidos" onBlur={(e)=>handleChange(e)} />
              </div>
              </div>
          </div>
          <div className='row'>
            <div className="col-lg-12">
              <div className="mb-3">
                <label>Correo</label>
                <input type="text"  className="form-control" name="correo" onBlur={(e)=>handleChange(e)} />
              </div>
            </div>
          </div>
          {responseApi &&
          <div className="alert alert-danger text-center">
          {responseApi}
          </div>
          }
          
        </div>
        </>
    )
}
export default ClientesScreen;