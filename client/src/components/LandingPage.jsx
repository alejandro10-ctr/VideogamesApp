import React from "react";
import { Link } from 'react-router-dom'
import './LandingPage.css';


export default function LandingPage(){
    return(
        <div className='background'>
            <h1 className="landingTitle" >Welcome to Videogames</h1>
            <h5 className="landingText">
                Hola, mi nombre es Alejandro Diez soy Full-Stack Developer.
                Realice este proyecto con el fin de practicar y optimizar mi forma de debuguear codigo.
                Lo que hice fue agarrar un proyecto que este completamente roto comenzar a arreglar cada detalle
                hasta que todo funcione como me imaginaba. La pagina todavia esta en proceso, por lo que no está terminada aun. Comence dandole mas atencion al front-end, luego voy a centrarme terminar mejor el back-end y agregarle algunas funcionalidades mas. 
            </h5>
            <Link to = '/home'>
                <button className='btn'>START</button>
            </Link>
        </div>
    ) 
}