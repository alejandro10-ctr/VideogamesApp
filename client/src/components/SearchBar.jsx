import React from "react";
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getNameVideogames, searchByName } from "../redux/actions";
import './SearchBar.css'



export default function SearchBar({setCurrentPage}){

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [search, setSearch] = useState(false);
  const videogames = useSelector((state) => state.videogames )

  const normaName = videogames.map(el => el.name.toLowerCase());




  function handleInputChange(e){
      e.preventDefault()
      setName(e.target.value)
      console.log(e.target.value)
      
  };
  function handleClick(e){
      e.preventDefault();
      
      if(name){
        setSearch(true);
        setCurrentPage(1)
       console.log(videogames.filter(el => el.name.toLowerCase().includes((name.toLowerCase() )))) 
       return dispatch (searchByName(videogames.filter(el => el.name.toLowerCase().includes((name.toLowerCase() )))))
        //dispatch(getNameVideogames(name));
        //setName("")
        
      }else{
        setSearch(true);
        //dispatch(searchByName(name))
        return alert ("get a Videogame please!")
      }

  };

  return (
      <div className="barra" >
        
          <input
          name= 'name'
          type = 'text'
          placeholder = 'Search By Name...'
          onChange = {(e) => handleInputChange(e)}
          />
          <button className="searchBtn" type = 'submit' onClick = {(e) => handleClick(e)}><span className="material-symbols-outlined">
search
</span></button>
      </div>
  )
};