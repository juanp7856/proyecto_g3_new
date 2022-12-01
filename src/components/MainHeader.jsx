import React from "react"
import "../styles/header.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import { useNavigate } from "react-router-dom"
import SearchButton from "./searchButton"


const MainHeader = () => {

    const navigate = useNavigate();

    return <div className="header fs-3 " style={{ paddingBottom: "4%" }}>
        <nav>
            <ul className="nav-links" style={{marginLeft: "35%"}}>
                <li> <button className="botonnav" onClick={()=>{navigate('/')}}>Inicio</button> </li>
                <li> <p>Acerca</p> </li>
                <li> <button className="botonnav" onClick={()=>{navigate('/ticket')}}>Soporte</button> </li>
                <li> 
                    <p>Reseñas</p> 
                    <ul className="submenu">
                        <li> <button className="botonnav" onClick={()=>{navigate('/ratingusers')}}>Usuarios</button> </li>
                        <li> <button className="botonnav" onClick={()=>{navigate('/ratinginfluencers')}}>Influencers</button> </li>
                    </ul>
                </li>
                <li> 
                    <p>Ranking</p> 
                    <ul className="submenu">
                        <li> <button className="botonnav" onClick={()=>{navigate('/rankingperipherals')}}>Periféricos</button> </li>
                        <li> <button className="botonnav" onClick={()=>{navigate('/rankingpcs')}}>Computadoras</button> </li>
                    </ul>
                </li>
            </ul>
            <ul className="nav-icons">
            <li> <SearchButton /> </li>
            <li> <button className="btn-header" onClick={()=> {navigate("/profileInfo")}}> <i class="bi bi-person-fill"></i> </button> </li>
            <li> <button className="btn-header" onClick={()=> {navigate("/cart")}}> <i class="bi bi-cart-fill"></i> </button> </li>
            </ul>
        </nav>
    </div>
}

export default MainHeader