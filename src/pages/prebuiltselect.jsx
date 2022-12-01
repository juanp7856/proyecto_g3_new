import React from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"
import "../styles/H10.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const PrebuiltSelect = () => {
    const [build,setBuild] = useState('')

    const navigate = useNavigate();

    return <div className="bg-dark">
        <Header />

        <div className="container" style={{ textAlign: "center" }}>
            <div className="mb-5" style={{ width: "50%", float: "left" }}>
                <h1 className="text-white">¿Qué necesitas?</h1>
            </div>
            <div className="mb-5" style={{ width: "50%", float: "right"}}>
                <button className="btn btn-light" style={{ width: "125px", marginRight: "15px" }} onClick={()=>{navigate("/")}}>ATRÁS</button>
                <button className="btn btn-success" style={{ width: "125px", marginLeft: "15px" }} onClick={()=>{navigate(`/prebuilt/${build}`)}}>SIGUIENTE</button>
            </div>
        </div>

        <div style={{ height:"200px" }}>&nbsp;</div>

        <div className="container" style={{ textAlign: "center" }}> 
            <div className="row mb-5">
                <div className="col">
                    <button className="boton btn-success" onClick={() => {setBuild("2386ec30-8d56-4421-aeb9-84cea9a9bc20")}}>
                        <i class="bi bi-controller"></i>
                        <p>Gaming</p>
                    </button>
                </div>
                <div className="col">
                    <button className="boton btn-success" onClick={() => {setBuild("688a8284-54ef-4111-b2c5-5932bb395550")}}>
                        <i class="bi bi-pencil-square"></i>
                        <p>Diseño</p>
                    </button>
                </div>
                <div className="col">
                    <button className="boton btn-success" onClick={() => {setBuild("c709243e-eb4f-41e2-8a65-2bf68aa0cb6b")}}>
                        <i class="bi bi-code-slash"></i>
                        <p>Coding</p>
                    </button>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <button className="boton btn-success" onClick={() => {setBuild("acf9e792-94fc-4a76-9371-1a395a2fbb19")}}>
                        <i class="bi bi-house-fill"></i>
                        <p>Render</p>
                    </button>
                </div>
                <div className="col">
                    <button className="boton btn-success" onClick={()=>{setBuild("b7ffe1f5-924a-4e7e-aa32-ebb1bc2c54bd")}}>
                        <i class="bi bi-building"></i>
                        <p>Oficina</p>
                    </button>
                </div>
                <div className="col">
                    <button className="boton btn-success" onClick={()=>{setBuild("7cb83618-c60c-42be-97eb-ccd9f691f571")}}>
                        <i class="bi bi-alt"></i>
                        <p>Otros</p>
                    </button>
                </div>
            </div>
            </div>
    </div>
}

export default PrebuiltSelect