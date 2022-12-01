import React from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"
import { useState } from "react"
import { RUTA_BACKEND } from "../conf"
import { useNavigate } from "react-router-dom"

let usuario = JSON.parse(localStorage.getItem('usuario') || "[]")

const Ticket = () => {

    const navigate = useNavigate();

    const [nombre,setNombre] = useState('');
    const [correo,setCorreo] = useState('');
    const [telefono,setTelefono] = useState('');
    const [asunto,setAsunto] = useState('');
    const [descripcion,setDescripcion] = useState('');

    const enviarTicket = async () => {
        const data = {
            id : usuario.id,
            correo : correo,
            nombre : nombre,
            telefono : telefono,
            asunto : asunto,
            descripcion : descripcion
        }

        if (usuario.id === null || usuario.id === undefined) {
            navigate("/login")
        } else {
            await fetch(`${RUTA_BACKEND}/reporte/generar`,{
                method : 'POST',
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(data)
            })
        }
    }

    return <div className="bg-dark">
        <Header />
        <div className="container" style={{ textAlign: "center" }}>
            <div className="mb-2" style={{ width: "50%", float: "left" }}>
                <h1 className="text-white">Submit a Request</h1>
            </div>
        </div>
        
        <div className="container" >
            <form className="row g-3 rounded-1 bg-white fs-5" style={{ width: "80%", height: "650", marginLeft: "15%" }}>
                
                <div className="col-md-12">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" value={correo} onChange={ (evt) => setCorreo(evt.target.value) }></input>
                </div>

                <div className="col-md-12">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" value={nombre} onChange={ (evt) => {setNombre(evt.target.value)} }></input>
                </div>

                <div className="col-12">
                    <label className="form-label">Phone</label>
                    <input type="text" className="form-control" value={telefono} onChange={ (evt) => {setTelefono(evt.target.value)} }></input>
                </div>

                <div className="col-12">
                    <label className="form-label">Subject</label>
                    <input type="text" className="form-control" value={asunto} onChange={ (evt) => {setAsunto(evt.target.value)} }></input>
                </div>

               <div class="form-group">
                    <label for="exampleFormControlDescription" value={descripcion} onChange={ (evt) => {setDescripcion(evt.target.value)} }>Description</label>
                    <textarea class="form-control" id="exampleFormControlDescription" rows="3"></textarea>
                </div>

                <div className="col-md-20" >
                    <button type="submit" class="btn btn-primary" style={{ width: "160px", height: "40px", padding: "5px",textAlign: "center"}} onClick={enviarTicket}>Submit</button>
                </div>

            </form>
        </div>

    </div>
}

export default Ticket