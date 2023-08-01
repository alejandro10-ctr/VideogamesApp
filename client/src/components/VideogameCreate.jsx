import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {postVideogame, getGenres, getVideogames} from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
//import Carrusel from "./Carrusel";
import './VideogameCreate.css'


export default function VideogameCreate(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const genres = useSelector((state) => state.genres)

    const [input, setInput] = useState({
        name: '',
        released: '',
        rating: '',
        image: '',
        platforms: '',
        genres: []
    })


    function handleSubmit(e){
        e.preventDefault(e);
        console.log(input)
        dispatch(postVideogame(input))
        alert('Videogame created')
        setInput({
            name: '',
            released: '',
            rating: '',
            image: '',
            platforms: '',
            genres: []
        })
        //navigate.push('/home')
        
    };

    function handleDelete(e){
        setInput({
            ...input,
            genres: input.genres.filter( gen => gen !== e)
        })
    };


    function handleSelect(e){
        setInput({
            ...input,
            genres: [...input, e.target.value]
        })
    };

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    };

    useEffect(() => {
        //dispatch(getGenres())
        dispatch(getVideogames())
    },[dispatch]);

    return(
        <div className="backgroundCreate">
<div className="FormContainer">
            <Link className="btn"  to = '/home'><button>Back</button></Link>
            <h1>Create your Videogame</h1>
            <form onSubmit= {(e) => handleSubmit(e)}>
                <div>
                    <label>Name: </label>
                    <input
                    type = 'text'
                    value = {input.name}
                    name= 'name'
                    onChange = {(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <label>Released: </label>
                    <input
                    type = 'text'
                    value = {input.released}
                    name = 'released'
                    onChange = {(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <label>Rating: </label>
                    <input
                    type = 'text'
                    value = {input.rating}
                    name = 'rating'
                    onChange = {(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <label>Image: </label>
                    <input
                    type = 'text'
                    value = {input.image}
                    name = 'image'
                    onChange = {(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <label>Platforms: </label>
                    <input
                    type = 'text'
                    value = {input.platforms}
                    name = 'platforms'
                    onChange = {(e) => handleChange(e)}
                    />
                </div>
             {/*    <select onChange = {(e) => handleSelect(e)}>
                    {genres.map((gen) => (
                        <option value = {gen.name}>{gen.name}</option>
                    ))}
                </select> */}
                
                <button type='submit' >Create Videogame</button>

            </form>
            {input.genres.map(el=> 
                <div className="divGen">
                <p>{el}</p>
                <button className="btnX" onClick={()=> handleDelete(el)}>x</button> 
                </div>
                    )}
               </div>     
        </div>
    )
};