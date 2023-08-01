import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import './Card.css'

export default function Card({image, name, rating, released, id}){

    const vids = useSelector(state => state.allVideogames)
    const plat = vids.filter(el => el.id === id)
    const platForms =(plat.map(el => el.platforms.map((el => '| '+ el + ' |'))))
    //console.log(platForms)

    const firstNumRat = rating.toString().split('')[0]
   //console.log(rating.toString().split('')[0])

   const rel = released.toString().split('-').reverse().join('-')
    
   //console.log(rel)
  
   

    return(
        <div className="CardContainer">
            <h3 className="CardText">{name}</h3>
            {
            image ? (
            <img  src={image} className="CardImage" alt=""/>)
            : (
                <img src={image} className="CardImage" alt="Images not found"/>)
        }
        <h4 className="CardText">Released: {rel}</h4>
        <h4 className="CardText">Rating: {rating} {firstNumRat == 5 ? <div>⭐⭐⭐⭐⭐</div>
        :firstNumRat == 4 ? <div>⭐⭐⭐⭐</div> 
        : firstNumRat == 3 ? <div>⭐⭐⭐</div> 
        : firstNumRat == 2 ? <div>⭐⭐</div> 
                : <div>⭐</div>  }
        </h4>
       { 
        
        <h4 className="CardText"> Available on:
        {<br></br>} 
       <h5 className="plat"> {platForms}
       <span className="quiebre" >  </span>
        </h5> </h4>
        
        } 
        <br>
        </br>
          <Link to={`/:id=${id}`}>
              <button className="GoToDetailBtn">Details</button>
            </Link>
        </div>
    )
};