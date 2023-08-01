import React from "react";
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../redux/actions';
import './Detail.css'


export default function Detail(){
    
    
    var ID = window.location.pathname.slice(5)
   
    const dispatch = useDispatch();
    /* const myVideogame = useSelector((state) => state.detail)
    console.log(myVideogame) */
    
    const myVideogame = useSelector(state=> state.videogames)
    //console.log(myVideogame) 
   
   const video =myVideogame.filter(el => el.id == ID)
  
  const firstNumRat = video[0].rating.toString().split('')[0];

  const rel = video[0].released.toString().split('-').reverse().join('-')   

   
    useEffect( () => {
        dispatch(getDetail(video.id)) 
    },[dispatch, video.id])


return(
    <div>
        {
              
            (
            <div className="detailContainer">
                
              <h1 className="detailName" >{video[0].name}</h1>
              <img src={video[0].image} className="detailImage" alt=""/>
              <h4 className="detailText">Released: {rel}</h4>
              <h4 className="detailText">Rating: {video[0].rating}   {firstNumRat == 5 ? <div>   ⭐⭐⭐⭐⭐</div>
        :firstNumRat == 4 ? <div>   ⭐⭐⭐⭐</div> 
        : firstNumRat == 3 ? <div>   ⭐⭐⭐</div> 
        : firstNumRat == 2 ? <div>   ⭐⭐</div> 
                : <div>   ⭐</div>  }</h4>
              <h4 className="detailText">Genres: {video[0].genres.map(el => '| '+ el + ' |')}</h4>
              <h4 className="detailText">Platforms: {video[0].platforms.map(el => '| '+ el + ' |')}</h4> 
              <br>
              </br>
              <br>
              </br>
        <Link to = '/home'>
            <button className="detailBtn">Volver</button>
        </Link>
        </div>  )
        }
    </div>
)
};