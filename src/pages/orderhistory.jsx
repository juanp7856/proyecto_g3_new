import React, { useEffect } from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"
import "../styles/H14.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { RUTA_BACKEND, RUTA_IMG } from "../conf"

let usuario = JSON.parse(localStorage.getItem('usuario') || "[]")

const OrderHistory = () => {

    const [listaOrdenes,setlistaOrdenes] = useState([])

    const navigate = useNavigate();

    const httpObtenerOrdenes = async () => {
        const resp = await fetch(`${RUTA_BACKEND}/orden/productos?id=${usuario.id}`, {
          })
        const data = await resp.json()
        setlistaOrdenes(data)
        console.log(data)
    }

    useEffect(() => {
        httpObtenerOrdenes()
    }, [])

    const logOut = () => {
        localStorage.setItem('usuario',JSON.stringify([]))
        navigate("/login")
    }

    return <div className="bg-dark">
        <Header />
        <div className="container">

            <div className="row ">
                <div className="col-4 text-white" >
                    <div class="d-grid gap-2">
                        <button type="button" className="btn btn-light btn-lg" style={{ width: "320px", height: "50px" }}>Order History</button>
                        <button type="button" className="btn btn-light btn-lg" style={{ width: "320px", height: "50px" }} onClick={()=>{navigate("/profileinfo")}}>Profile Info</button>
                        <button type="button" className="btn btn-light btn-lg" style={{ width: "320px", height: "50px" }} onClick={()=>{logOut()}}>Log Out</button>
                    </div>
                </div>


                     <div className="col-8">
                        {
                            listaOrdenes.map((orden)=>{
                                return <div className="row fila">
                                <div className="col">
                                <p><img className="listaimg" src={`${RUTA_IMG}${orden.imagen}`} alt="" /> </p>
                                </div>
                                <div className="col">
                                <p className="listatext">{orden.nombre}</p>
                                </div>
                                <div className="col">
                                <p className="listapr">${orden.precio}</p>
                                </div>
                                <div className="col">
                                <p className="listapr">{orden.fecha}</p>
                                </div>
                            </div>
                            })
                        } 
                    </div>

              
                </div>
            </div>


        </div>
}

export default OrderHistory   