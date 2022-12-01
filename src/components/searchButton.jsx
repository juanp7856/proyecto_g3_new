import { useEffect, useState } from "react";
import "../styles/searchButton.css";
import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { useNavigate } from "react-router-dom";
import { RUTA_BACKEND } from "../conf";




const Historia6 = () => {
    const [value, setValue] = useState("");
    const [activo,setActivo] = useState(false);
    const [listaProductos,setlistaProductos] = useState([]);
    const navigate = useNavigate();

    const alternarBarra = () => {
        setActivo(!activo);
    }

    const httpObtenerProductos = async () => {
      const resp = await fetch(`${RUTA_BACKEND}/productos`,{
      })
      const data = await resp.json()
      setlistaProductos(data)
      console.log(data)
    }

    useEffect(() => {
        httpObtenerProductos()
    }, [])

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const enrutarPag = (nombre) => {
    listaProductos.map((item) => {
      if(nombre === item.nombre) {
        navigate(`/prod/${item.id}`)
      } else {
        return "asd"
      }
    })
  }

//   const onSearch = (searchTerm) => {
//     setValue(searchTerm);
//     // our api to fetch the search result
//     console.log("search ", searchTerm);
//   };

  // const clickLupa = () => {
  //   // agregarData(graphic, processor, memory, storage, cooling, windows, psupply);
  //   // alternarBarra;
    
  // }


  return (
      <div className="search-container">
        <div className="search-inner" style={{justifyContent: "end"}}>
          <input type="text" style={{backgroundColor: "gray"}} className={"oculto" + (activo ? "mostrado" : "")} value={value} onChange={onChange} />
          <button className="btn-header"  onClick={alternarBarra}> <i class="bi bi-search"></i> </button>
        </div>
        <div className="dropdown">
          {
          listaProductos
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.nombre.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => 
                (
              <div
                onClick={()=>{enrutarPag(item.nombre)}}
                className="dropdown-row"
                key={item.nombre}
              >
                {item.nombre}
              </div>
            ))}
        </div>
      </div>
  );
}

export default Historia6
