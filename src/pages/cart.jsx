import React, { useState } from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"
import "../styles/H8.css"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


let itemsAComprar = JSON.parse(localStorage.getItem('ordenes') || "[]")

const Cart = () => {

    const navigate = useNavigate();

    const [active,setActive] = useState(false)

    const crearTarjeta = (comp) => {


        return <div className="tarjetaco pt-4 mb-3">
            <div style={{width:"20%",float: "left"}}>
                <img className="listaimg" src={"img"} alt="IMG"/>
            </div>
            <div style={{width:"80%", float: "right", marginBottom: "20px"}}>
                <div style={{width:"50%", float: "left"}}><p className="listatext">{comp.nombre}</p></div>
                <div style={{width:"25%", float: "left",  marginTop: "22px"}}><p className="listapr">{comp.precio}$</p></div>
                <button type="button" style={{width:"25%", float: "right",fontSize:"40px", backgroundColor: "transparent",border: "none", marginTop: "22px"}} onClick={
                    ()=>{
                        for (let x=0;x<itemsAComprar.length;x++) {
                            if(itemsAComprar[x].id === comp.id) {
                                itemsAComprar.splice(x,1)
                                localStorage.setItem('ordenes',JSON.stringify(itemsAComprar))
                                setActive(true)
                                setTimeout(()=>{setActive(false)},1);
                            }
                        }
                    }
                }><i class="bi bi-trash" ></i></button>
            </div>
        </div>
    }

    // const onClickFunc = () => {
    //     localStorage.setItem('monto',JSON.stringify({value: montoTotal}))
    //     navigate("/proyecto_g3_new/checkout")
    // }

    // const renderizarpag = () => {
    //     setActive(true)
    //     setTimeout(()=>{setActive(false)},1);
    // }

    // useEffect(() => {
    //     renderizarpag()
    // }, [])
    
    const listarTarjetas = (active) => {

        let tarjetas = itemsAComprar.map( (comps) => {
            return crearTarjeta(comps)
        });

        return tarjetas
    }


    return <div className="bg-dark">
        <Header />

        

        


        <div className="container"  >
            
            <div className="mb-5" style={{ width: "50%", float: "left" }}>
                
                <h2 className="text-white">Articulos del carrito</h2>

            </div>


            <div className="mb-5" style={{ width: "50%", float: "right"}}>
                       
                <button className="btn btn-success" style={{ width: "125px", marginLeft: "15px" }} onClick={()=>{navigate("/proyecto_g3_new/checkout")}}>
                       <i class="bi bi-cart-fill"></i> CHECKOUT
                </button>

                </div>
          
        </div>

        <div className="container" style={{ justifyContent: "center" }}>
            <div className="row" style={{ width: "75%", height:"100%"}}>

                    <div style={{ width: "90%", height: "90%"}}>

                        <div className="row">

                            <div className="col mt-2">
                                {
                                    listarTarjetas(active)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
</div>

}

export default Cart
