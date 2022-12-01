import React, { useEffect } from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"

import PC from "../assets/pc_recomendada.png"
import { useState } from "react"
import { RUTA_BACKEND, RUTA_IMG } from "../conf"


const Rankingpcs = () => {
  const [build, setBuild] = useState('');
  const [productos, setProductos] = useState([]);

  const httpObtenerProductos = async () => {
    const resp = await fetch(`${RUTA_BACKEND}/build?id=${build}`)
    const data = await resp.json()
    setProductos(data)
    console.log(data)
  }

  useEffect(() => {
      httpObtenerProductos()
  }, [build])

    return <div classNameName="bg-dark">
        <Header />
        <div className="container, fs-3" style={{ marginLeft : "60px" }}> 
            <div className="text-white" style={{ marginBottom: "30px" }}> Ranking best sellers builds</div>
            
            <div className="accordion" id="accordionExample">
                
                <div className="accordion-item" style={{ width: "50%" }}>
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" onClick={()=>{setBuild("f00eab03-4df1-4bc9-ab84-7f02db176a90")}}>
                      <div className="col-4 fs-3" style={{ textAlign: "left" }}>
                        <img src= {PC} className="PC-Gamer" style={{ width: "110px", height:"120px"}} alt="PC"/>
                      </div>
                      <div className="col-4 fs-3">Monster PC</div>
                      <div className="col-4 fs-3">$1899</div>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                    <div className="accordion-body bg-gradient" style={{ backgroundColor: "blue"}}>
                            <div className="row row-cols-1 text-white gx-3 gy-3">
                            {
                              productos.map((producto)=>{
                                return <div className="row mb-2">
                                <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {`${RUTA_IMG}${producto.imagen}`} className="CPU" style= {{ width: "80px", height:"65px"}} alt=""/></div>
                                <div className="col-4 fs-6 d-flex justify-content-center align-items-center">{producto.nombre}</div>
                                <div className="col-4 fs-6 d-flex justify-content-center align-items-center">${producto.precio}</div>
                                </div>
                              })
                            }
                        </div>
                    </div>
                  </div>
                </div>


                <div className="accordion-item" style={{ width: "50%" }}>
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" onClick={()=>{setBuild("461c7c57-80d5-4e11-a47b-2c6d4057d47f")}}>
                      <div className="col-4 fs-3" style={{ textAlign: "left" }}>
                        <img src= {PC} className="PC-Gamer" style={{ width: "110px", height:"120px"}} alt="PC"/>
                      </div>
                      <div className="col-4 fs-3">Cruser Build</div>
                      <div className="col-4 fs-3">$1759</div>
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" >
                    <div className="accordion-body bg-gradient" style={{ backgroundColor: "blue"}}>
                            <div className="row row-cols-1 text-white gx-3 gy-3">
                            {
                              productos.map((producto)=>{
                                return <div className="row mb-2">
                                <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {`${RUTA_IMG}${producto.imagen}`} className="CPU" style= {{ width: "80px", height:"65px"}} alt=""/></div>
                                <div className="col-4 fs-6 d-flex justify-content-center align-items-center">{producto.nombre}</div>
                                <div className="col-4 fs-6 d-flex justify-content-center align-items-center">${producto.precio}</div>
                                </div>
                              })
                            }
                        </div>
                    </div>
                  </div>
                </div>


                <div className="accordion-item" style={{ width: "50%" }}>
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" onClick={()=>{setBuild("dafc7cdb-c8e9-4887-a5c9-1d6fc7c4956e")}}>
                      <div className="col-4 fs-3" style={{ textAlign: "left" }}>
                        <img src= {PC} className="PC-Gamer" style={{ width: "110px", height:"120px"}} alt="PC"/>
                      </div>
                      <div className="col-4 fs-3">Nasa PC</div>
                      <div className="col-4 fs-3">$1679</div>
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" >
                    <div className="accordion-body bg-gradient" style={{ backgroundColor: "blue"}}>
                            <div className="row row-cols-1 text-white gx-3 gy-3">
                            {
                              productos.map((producto)=>{
                                return <div className="row mb-2">
                                <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {`${RUTA_IMG}${producto.imagen}`} className="CPU" style= {{ width: "80px", height:"65px"}} alt=""/></div>
                                <div className="col-4 fs-6 d-flex justify-content-center align-items-center">{producto.nombre}</div>
                                <div className="col-4 fs-6 d-flex justify-content-center align-items-center">${producto.precio}</div>
                                </div>
                              })
                            }
                        </div>
                    </div>
                  </div>
                </div>


                <div className="accordion-item" style={{ width: "50%" }}>
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" onClick={()=>{setBuild("ce29193d-8d13-4af3-9cb6-563803e3618f")}}>
                      <div className="col-4 fs-3" style={{ textAlign: "left" }}>
                        <img src= {PC} className="PC-Gamer" style={{ width: "110px", height:"120px"}} alt="PC"/>
                      </div>
                      <div className="col-4 fs-3">Budget Build</div>
                      <div className="col-4 fs-3">$1299</div>
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample" >
                    <div className="accordion-body bg-gradient " style={{ backgroundColor: "blue"}}>
                            <div className="row row-cols-1 text-white gx-3 gy-3">
                            {
                              productos.map((producto)=>{
                                return <div className="row mb-2">
                                <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {`${RUTA_IMG}${producto.imagen}`} className="CPU" style= {{ width: "80px", height:"65px"}} alt=""/></div>
                                <div className="col-4 fs-6 d-flex justify-content-center align-items-center">{producto.nombre}</div>
                                <div className="col-4 fs-6 d-flex justify-content-center align-items-center">${producto.precio}</div>
                                </div>
                              })
                            }
                        </div>
                    </div>
                  </div>
                </div>



        </div>
    </div>
    </div>
}

export default Rankingpcs