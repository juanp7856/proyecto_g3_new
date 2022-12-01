import React, { useEffect } from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"
import PC from "../assets/pc_recomendada.png"
import "../styles/H11.css"

import { useNavigate, useParams } from "react-router-dom"
import { RUTA_BACKEND, RUTA_IMG } from "../conf"
import { useState } from "react"

let itemsAComprar = JSON.parse(localStorage.getItem('ordenes') || "[]")

const Prebuilt = () => {
    const params = useParams();

    const [productos, setProductos] = useState([]);
    // const [montoTotal,setmontoTotal] = useState(0);

    const navigate = useNavigate();

    const httpObtenerProductos = async () => {
        const resp = await fetch(`${RUTA_BACKEND}/build?id=${params.id}`,{
          })
        const data = await resp.json()
        setProductos(data)
    }

    let montoTotal = 0

    useEffect(() => {
        httpObtenerProductos()
        // eslint-disable-next-line
    }, [])

    const agregarCompra = () => {
        productos.map((producto) => {
            return itemsAComprar.push(producto)
        })
        localStorage.setItem('ordenes',JSON.stringify(itemsAComprar))
        navigate("/cart")
    }

    return <div className="bg-dark">
        <Header />

        <div className="container-fluid row" style={{ textAlign: "center" }}>
            <div className="mb-5 col-6">
                <h1 className="text-white">¡Tu PC optimizada!</h1>
            </div>
            <div className="mb-5 col-6">
                <button className="btn btn-light" style={{width: "125px", marginRight: "15px"}} onClick={()=>{navigate("/prebuiltselect")}}>ATRÁS</button>
                <button className="btn btn-success" style={{width: "125px", marginRight: "15px"}} onClick={agregarCompra}>
                    <i class="bi bi-cart-fill"></i> CARRITO
                </button>
            </div>
        </div>

        <div className="container-fluid row" style={{ textAlign: "center" }}>
            <div className="col-3">
                <img src={PC} style={{ height: "350px", width: "350px" }} alt="PCBANNER"/>
                <div className="container-fluid" style={{ marginTop: "20px", backgroundColor: "slategrey", width: "350px" }}>
                    <div  className="container" style={{ textAlign: "center" }}>
                        <div className="row">
                            <div className="col mt-2">
                                <p style={{ color:"white" }}>Precio Componentes</p>
                                <p style={{ color:"white" }}>${montoTotal}</p>
                            </div>
                            <div className="col mt-2">
                                <p  style={{ color:"white" }}>Costo armado</p>
                                <p  style={{ color:"white" }}>$99</p>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>

            <div className="col-sm-7">
                <h2 className="mb-4" style={{ color:"white" }}>Componentes</h2>
                
                <div className="bg-gradient" style={{ backgroundColor: "blue"}}>
                    <div className="row">
                    {
                        productos.map((producto) => {
                            montoTotal = producto.precio + montoTotal

                            return <div className="col-lg-6 mt-2">
                            <div className="lista">
                                <img className="listaimg" src={`${RUTA_IMG}${producto.imagen}`} alt="CPU"/>
                                <div style={{}}><p className="listatext">{producto.nombre}</p></div>
                                <div style={{}}><p className="listapr">{producto.precio}$</p></div>
                            </div>
                            <div style={{height:"2px", opacity:"75%", backgroundColor: "black"}}></div>
                        </div>
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Prebuilt