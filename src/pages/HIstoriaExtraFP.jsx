import React, { useEffect } from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"
import { RUTA_JUEGOS } from "../conf"
import { useState } from "react"
import "../styles/H13.css"

const HistoriaExtraFP = () => {

    const [juegos, setJuegos] = useState([])

    const httpObtenerJuegos = async () => {
        const resp = await fetch(`${RUTA_JUEGOS}/deals?lowerPrice=0&steamRating=0&title=batman&desc=0&output=json&steamworks=0&sortBy=Deal%20Rating&AAA=0&pageSize=60&exact=0&upperPrice=50&pageNumber=0&onSale=0&metacritic=0&storeID%5B0%5D=1%2C2%2C3`,{
            method : 'GET',
            headers : {
                "X-RapidAPI-Key": "f358f2834emsh2cd5055ec80a17cp18c9c3jsna6b9ba55da48",
                "X-RapidAPI-Host": "cheapshark-game-deals.p.rapidapi.com"
            },

          })
        const data = await resp.json()
        setJuegos(data)
        console.log(data)
    }

    useEffect(() => {
        httpObtenerJuegos()
    }, [])

    return <div>
        <Header />

        {/* <form className="createaccount container" style={{ width: "750px", paddingtop: "10px" }}>

            <div className="fst-italic text-white h3" style={{ paddingTop: "10px" }}>RECUPERE SU CUENTA</div>
            <p className="text-white">Por favor, ingrese su correo electrónico, le enviaremos un enlace para que restablezca</p>
            <div className="input-group">
                <span className="input-group-text">Correo electrónico</span>
                <input type="text" className="form-control"></input>
            </div>
            <div style={{ paddingBottom: "0px", paddingTop: "10px" }}>
                <button className="rounded border-0 btn-primary h5" style={{ padding: "15px" }} type="button">Restablecer contraseña</button>
            </div>


        </form > */}

        <div className="row container-fluid">
            {
            juegos.map((juego) => {
                return <div className="col-3 tarjetaco m-2" style={{borderWidth : '10px', borderColor: 'black'}}>
                    <div className="col-3">
                        <p><img src={juego.thumb} alt="" style={{width : '50%'}}/> </p>
                    </div>
                    <div className="col-5">
                        <h2 style={{color : 'black'}}>Juego</h2>
                        <p>{juego.title}</p>
                    </div>
                    <div className="col-4">
                        <h2 style={{color : 'black'}}>Precio</h2>
                        <p>${juego.salePrice}</p>
                    </div>
                    
                </ div>
            })
            }
        </div>
    </div >


}

export default HistoriaExtraFP