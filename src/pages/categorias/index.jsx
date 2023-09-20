import React from 'react';

const CategoriasScreen = () => {
    
    //----Manejo de estados locales con componentes (useStates)----
    const[contador,setContador]=React.useState(0)
    const[nombre,setNombre]=React.useState("")
    const[apellido,setApellido]=React.useState("")
    const[productos,setproductos]=React.useState([])
    const[categorias,setCategorias]=React.useState({})
    const[persona,setpersona]=React.useState("")
    const[islogged,setIslogged]=React.useState(false)
    //-------------------------------------------------------------

    
    React.useEffect(()=>{},[])

    React.useEffect(()=>{console.log("me ejecuto cada que tengo un cambio")})  /* -> sin argumentos, se va a disparar cada que cualquiera de los hooks sufra un cambio */

    React.useEffect(()=>{
        console.log("me ejecuto una unica vez cuando se crea el dom")
    },[]) /* -> como segundo argumento, recibe las deps o dependencias, cuando tiene dependencias vacías se va a ejecutar una única vez y es cuando se monta el DOM */
    
    React.useEffect(()=>{
        console.log("me ejecuto una unica vez cuando se crea el dom y cuando mis dependencias sufren un cambio")
    },[contador]) /* -> como segundo argumento, recibe las deps o dependencias, cuando tiene dependencias se va a ejecutar una única vez y es cuando se monta el DOM y cada que esa dependencia sufra un cambio */

    React.useEffect(()=>{
        return() => {
            console.log("me ejecuto cuando el componente se destruye o sufre un cambio")
        }
    },[]) /*  -> como segundo argumento, recibe las deps o dependencias, cuando tiene dependencias se va a ejecutar una única vez y es cuando se monta el DOM y cada que esa dependencia sufra un cambio */


    const incrementarContador = () =>{
        setContador(contador+1)
    }

    const handleChangeName = (e) => {
        const {value,name} = e.target
        setNombre(value)
        setContador(contador + 1);
    }

    const handleChangeApellido = (e) => {
        const {value,name} = e.target
        setApellido(value)
    }

    return(
        <>
        contador: {contador} <br/>
        valor de nombre: {nombre} <br/>
        valor de appelido {apellido} <br/>
        
        <label>Nombres</label>
        <input type="text" onBlur={(e)=>handleChangeName(e)} />
        
        <label>Apellido</label>
        <input type="text" onBlur={(e)=>handleChangeApellido(e)} />
        <br/>
        <button type='button' onClick={()=>incrementarContador()}>incrementar</button>
        
        </>
    )
}
export default CategoriasScreen;

/* ciclos de vida (basado en clases)
componentDidMount -> se monto el dom
componentDidupdate -> se dipara cuando hay un cambio en el componente
componentWillUnmount -> cuando se demonta un componente
ComponenDidCatch -> cuando se encuentra un error
*/


