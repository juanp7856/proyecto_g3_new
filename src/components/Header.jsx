import React from "react"
import "../styles/header.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import logo from "../assets/LOGO.png"
import { useNavigate } from "react-router-dom"
import SearchButton from "./searchButton"

const Header = () => {

    const navigate = useNavigate()


    return <div className="header fs-3 bg-dark" style={ {paddingBottom : "4%"} }>
    <nav>
        <img src={logo} className="logo" alt="main"/>
        <ul className="nav-links">
            <li> <a href="/">Inicio</a> </li>
            <li> <p>Acerca</p> </li>
            <li> <a href="/ticket">Soporte</a> </li>
            <li> 
                <p>Reseñas</p> 
                <ul className="submenu">
                    <li> <a href="/ratingusers">Usuarios</a> </li>
                    <li> <a href="/ratinginfluencers">Influencers</a> </li>
                </ul>
            </li>
            <li> 
                <p>Ranking</p> 
                <ul className="submenu">
                    <li> <a href="/rankingperipherals">Periféricos</a> </li>
                    <li> <a href="/rankingpcs">Computadoras</a> </li>
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

export default Header