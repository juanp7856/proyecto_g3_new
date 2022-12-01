import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"
import ReactPlayer from 'react-player'
import "../styles/H17.css"
import Footer from "../components/Footer"
import { RUTA_BACKEND } from "../conf"

const Ratinginfluencers = () => {
    const [listaResenas, setlistaResenas] = useState([])

    const httpObtenerResenas = async () => {
        const resp = await fetch(`${RUTA_BACKEND}/resenas/influencers`,{
          })
        const data = await resp.json()
        setlistaResenas(data)
        console.log(data)
    }

    useEffect(() => {
        httpObtenerResenas()
    }, [])

    return <div className="bg-light">
        <Header />
        
        <div className="row" style={{ marginLeft: "120px" }}>

        <div className="text-dark h1" style={{ marginTop:"30px" }}>Influencers</div>
            {
                listaResenas.map((resena) => {
                    return <div className="card col-sm-6 border-light mb-5" style={{ width: "800px", height: "800px", marginRight:"150px", marginLeft:"300px", borderRadius:"" }}>
                    <div>
                    <ReactPlayer 
                    url={resena.video_solo_influencer}
                    width='100%'
                    height='370px'
                    />
                    </div>
                    <div className="card-body" style={{paddingTop:"50px"}}>
                        <div className="background-autor-top">
                            {resena.usuario.nombre}
                        </div>
                        <p className="card-text review1 fs-5" style={{ paddingLeft:"100px", paddingRight:"100px"}}>
                            {resena.comentario}
                        </p>
                        <div className="row" style={{paddingTop:"20px"}}>
                            <div className="col-sm-3">
                            <img src= "{MrTop5}" className="MrTop5" style={{ width: "110px", height:"105px", borderRadius:"50%"}} alt=""/>
                            </div>
                            <div className="col-sm-6">
                                <div style={{fontFamily:"Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", fontSize:"2.25em", fontStyle:"italic"}}>
                                    <p>{resena.usuario.nombre}</p>
                                </div>
                                <div className="footer-top5"></div>
                                <div style={{width:"500px"}}>
                                    <p>Thanks to <a href={resena.link_solo_influencer}>@{resena.usuario.nombre}</a> for showing off the unboxing of the #BuildRedux PC! Check out his video to see his PC and setup!</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                })
            }
            
        </div>
        <Footer />
    </div>
}



export default Ratinginfluencers