import React from "react";
import { useDispatch } from "react-redux";
import { filterByGenres, filterCreated, orderByName, orderByRating } from "../redux/actions";
import './Navbar.css'




export default function Navbar({allVideogames, setCurrentPage, setOrder}){

    const dispatch = useDispatch()

    let listElements = document.querySelectorAll('.list__button--click');
    
    listElements.forEach((listElement) => {
        listElement.addEventListener('click', () => {
    
            listElement.classList.toggle('arrow')
    
            let height = 0;
            let menu = listElement.nextElementSibling;
            console.log(menu.scrollHeight) // => me muestra el alto minimo para que el elemento exista
            if(menu.clientHeight == '0'){
                height = menu.scrollHeight;
            }
            menu.style.height = `${height}px`; // === height + "px"
        })
    })
    
    function handleGen(e){
        //e.preventDefault();
        //setLoading(true)
        setTimeout(()=> {
          // setLoading(false)
            // console.log(e.target.value)
           // setCurrentPage(1)
             dispatch(filterByGenres(allVideogames && allVideogames?.filter(el => el.genres.includes(e.target.value))))
         // console.log(allVideogames.filter(el => el.genres.includes(e.target.value)))
           //setOrder(`Order: ${e.target.value}`)
      }, 3000)
    };

    function handleVid(e){
        e.preventDefault();
        dispatch(filterCreated(e.target.value))
    };
    
    function handleAlpha(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value))
       // setCurrentPage(1);
       // setOrder(`Order: ${e.target.value}`)
    };

    function handleRating(e){
        e.preventDefault();
        dispatch(orderByRating(e.target.value))
      //  setCurrentPage(1);
       // setOrder(`Order: ${e.target.value}`)
    };





    return(
        <nav className="navContainer">
         <ul className="list">
            <li className="list__item">
                <div className="list__button">
                        <img src="assets/dashboard.svg" alt="" className="list__img" />
                        <a href="#" className="nav__link"></a>
                </div>
            </li>

            <li className="list__item">
              <div className="list__button list__button--click">
                 <img src="assets/ghost.svg" alt="" className="list__img"/>
                 <a href="#" className="nav__link">Order By:</a>
                 <img src="assets/arrow.svg" alt="" className="list__arrow" />
              </div>

            <ul className="list__show">
               <li className="list__inside" >
                <a href="#" className="nav__link nav__link--inside" >
                <select onChange = {e => {handleAlpha(e)}}>
                   <option value = ''>Alphabet</option>
                   <option value = 'asc'>Ascendent</option>
                   <option value = 'desc'>Descendent</option>
                </select>
                </a>
               </li>

               <li className="list__inside" >
                <a href="#" className="nav__link nav__link--inside" >
                <select onChange = {e => {handleRating(e)}}>
                    <option value = ''>Rating</option> 
                    <option value = 'asc'>Ascendent</option>
                    <option value = 'desc'>Descendent</option>
                </select>
                </a>
               </li>

               

            </ul>

            </li>



            
            <li className="list__item">
              <div className="list__button list__button--click">
                 <img src="assets/bell.svg" alt="" className="list__img"/>
                 <a href="#" className="nav__link">Filter By:</a>
                 <img src="assets/arrow.svg" alt="" className="list__arrow" />
              </div>

            <ul className="list__show">
               <li className="list__inside" >
                <a href="#" className="nav__link nav__link--inside" >
                <select onChange = { handleGen}>
                    <option value='All' key='All'>Genres</option>
                    <option value='Action' key='Action' >Action</option>
                    <option value='Strategy' key='Strategy' >Strategy</option>
                    <option value='RPG' key='RPG' >RPG</option>
                    <option value='Shooter' key='Shooter' >Shooter</option>
                    <option value='Adventure' key='Adventure' >Adventure</option>
                    <option value='Puzzle' key='Puzzle' >Puzzle</option>
                    <option value='Racing' key='Racing' >Racing</option>
                    <option value='Sports' key='Sports' >Sports</option>
                </select>
                </a>
               </li>

               <li className="list__inside" >
                <a href="#" className="nav__link nav__link--inside" >
                <select onChange = {e => {handleVid(e)}}>
                    <option value = 'All'>All Videogames</option>
                    <option value ='api'>Videogames Available</option>
                    <option value = 'created'>Videogame Created</option>
                </select>
                </a>
               </li>

               

            </ul>

            </li>

            <li className="list__item">
                <div className="list__button">
                        <img src="assets/message.svg" alt="" className="list__img" />
                        <a href="#" className="nav__link"></a>
                </div>
               </li>

         </ul>
{/* 
<div>                          

                <select onChange = { handleGen}>
                    <option value='All' key='All'>All</option>
                    <option value='Action' key='Action' >Action</option>
                    <option value='Strategy' key='Strategy' >Strategy</option>
                    <option value='RPG' key='RPG' >RPG</option>
                    <option value='Shooter' key='Shooter' >Shooter</option>
                    <option value='Adventure' key='Adventure' >Adventure</option>
                    <option value='Puzzle' key='Puzzle' >Puzzle</option>
                    <option value='Racing' key='Racing' >Racing</option>
                    <option value='Sports' key='Sports' >Sports</option>
                </select>


                <select onChange = {e => {handleVid(e)}}>
                    <option value = 'All'>All Videogames</option>
                    <option value ='api'>Videogames Available</option>
                    <option value = 'created'>Videogame Created</option>
                </select>


                <select onChange = {e => {handleAlpha(e)}}>
                   <option value = ''>Alphabetical Order</option>
                   <option value = 'asc'>Ascendent</option>
                   <option value = 'desc'>Descendent</option>
                </select>
                <select onChange = {e => {handleRating(e)}}>
                    <option value = ''>Rating</option> 
                    <option value = 'asc'>Ascendent</option>
                    <option value = 'desc'>Descendent</option>
                </select>
           </div>
          
 */}
        </nav>
    )


};