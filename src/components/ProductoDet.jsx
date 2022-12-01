import React, { useEffect, useState } from "react"
import Header from "./Header"
import "bootstrap/dist/css/bootstrap.css"
import "../styles/H6.css"
import { useParams } from "react-router-dom"
import { RUTA_BACKEND, RUTA_IMG } from "../conf"

let itemsAComprar = JSON.parse(localStorage.getItem('ordenes') || "[]")

const ProductoDet = () => {
    let params = useParams();

    const [Producto,setProducto] = useState([]);

    const httpObtenerProductos = async () => {
        const resp = await fetch(`${RUTA_BACKEND}/infoproducto?id=${params.id}`,{
          })
        const data = await resp.json()
        setProducto(data)
        console.log(data)
      }
    
      useEffect(() => {
        httpObtenerProductos()
      }, [])

    const guardarProd = () => {
        itemsAComprar.push(Producto)
        localStorage.setItem('ordenes',JSON.stringify(itemsAComprar))
    }

    return <div className="bg-dark">
        <Header />

        <div className="container" style={{margintop:"10%",padding:"50px"}} >

            <div className="row mb-4" >

                <div className="col" style={{width:"20%",height:"150px"}} >

                    <div className="bg-light p-2 text-dark bg-opacity-10" style={{width:"60%" }}>

                        <div style={{marginLeft:"10%", width:"50%"}}>
                            <img  width={250} height={250} src={`${RUTA_IMG}${Producto.imagen}`} alt="GRAFICA" />
                        </div>



                            <button id="bot" style={{marginLeft:"25%", width:"50%"}} type="button" className="both3 btn btn-danger border-0" onClick={guardarProd}>Agrega al carrito</button>
                    </div>
                </div>

      


                <div className="col" >

                    <div className="bg-primary p-2 text-dark bg-opacity-25">

                        <h1>{Producto.nombre}</h1>
                        <h2><b>${Producto.precio}</b></h2>

                        <h3>Shipping calculated at checkout.</h3>

                        <table style={{margintop:"20px"}}>
                            
                                <tr>
                                    <th><b>CHIPSET <br/> MANUFACTURER </b> </th><th>N/A</th></tr>
                                <tr>
                                    <td><b>INFO</b></td><td>{Producto.descripcion}</td></tr>
                                <tr>
                                    <td><b>CORE CLOCK</b>   </td><td>1530 MHz</td></tr>
                                <tr>
                                    <td><b>BOOST CLOCK</b>    </td><td>OC Mode: 1800 MHz <br/> Gaming Mode <br/> (Default): 1770 MHz</td></tr>
                                <tr>
                                    <td><b>CUDA CORES</b>    </td><td>1280</td></tr>
                            
                        </table>
                            

                    </div>

                </div>

            </div>
        </div>
    </div>

}

export default ProductoDet;
