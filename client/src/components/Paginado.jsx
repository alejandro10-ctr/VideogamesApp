import React from "react";
import './Paginado.css'

export default function Paginado({videogamesPerPage, allVideogames, paginado}){
    const pageNumber = []

    for( let i = 1  ;  i <= Math.ceil(allVideogames/videogamesPerPage)  ;  i++){
        pageNumber.push( i )
    }

   

    return(
        <div className="PagContainer">
          <nav className="pagination">
            <ul className="pages">
                {pageNumber &&
                pageNumber.map(number =>  (
                    <li  key={number}>
                    <button className="PageBtn" onClick={() => paginado(number)}>{number}</button>
                    </li>
                ))}
            </ul>
          </nav>
        </div>
    )
}