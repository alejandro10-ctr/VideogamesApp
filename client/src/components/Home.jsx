import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getVideogames, filterByGenres, filterCreated, orderByName, orderByRating, searchByName, getPlatforms, filterByPlatform } from '../redux/actions';
import { Link } from 'react-router-dom';
import  Card  from './Card';
import Paginado from './Paginado.jsx';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import Loader from './Loader';
import './Home.css'



export default function Home(){

    const dispatch = useDispatch()
    const allVideogames = useSelector((state) => state.allVideogames)
   

     const platforms = useSelector((state) => state.platforms) 
    console.log('platforms(state):',platforms)
 

    
    const allPlatform = allVideogames.map(item => item.platforms)
   
    const platSet =([allPlatform.map(el => el)])
        
    const platSet1 = platSet.map(el => el)
    
    const platSet2 = platSet1[0].map(el => el)
       
    const platSet4 = Array.from(platSet2).flat()

    const uniqueSet = new Set(platSet4)
  
  const allPlatforms = [...uniqueSet]
 


    const [loading, setLoading] = useState(false);
   
    const [order, setOrder] = useState('')

    const [currentPage, setCurrentPage] = useState(1)
    
    const [videogamesPerPage, setVideogamesPerPage] = useState(8)
    
    const indexOfLastVideogame = currentPage * videogamesPerPage
    
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage
    
    const [currentVideogames, setCurrentVideogames] = useState([]);


    
   
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
        console.log(pageNumber)
        setCurrentVideogames(allVideogames?.slice(indexOfFirstVideogame, indexOfLastVideogame))
       console.log(currentVideogames)
       
       
        
    }; 
    

    
    
    
    
    


    
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            dispatch(getVideogames());
        }, 15000)
        
        },[dispatch]);
    
    
    useEffect(() => {
       if(allVideogames){
           setCurrentVideogames(allVideogames && allVideogames?.slice(indexOfFirstVideogame, indexOfLastVideogame))
          
       }
   }, [allVideogames])













/* 
     useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)       
           dispatch(getVideogames(currentVideogames))
        
    }, [currentVideogames, dispatch]) 
 */


/* 
    const videogames = useSelector(state => state.videogames)
    console.log(videogames) 

    const allvideogames = useSelector(state => state.allVideogames)
    console.log(allvideogames)
 */




    function handleRefresh(){
      
      window.location.reload()
    };
 




    function handleGen(e){
        //e.preventDefault();
        setLoading(true)
        setTimeout(()=> {
           setLoading(false)
            // console.log(e.target.value)
            setCurrentPage(1)
             dispatch(filterByGenres(allVideogames && allVideogames?.filter(el => el.genres.includes(e.target.value))))
         // console.log(allVideogames.filter(el => el.genres.includes(e.target.value)))
           setOrder(`Order: ${e.target.value}`)
      }, 3000)
    };

    function handleVid(e){
        e.preventDefault();
        dispatch(filterByPlatform(e.target.value))
    };
    
    function handleAlpha(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrder(`Order: ${e.target.value}`)
    };

    function handleRating(e){
        e.preventDefault();
        dispatch(orderByRating(e.target.value))
        setCurrentPage(1);
        setOrder(`Order: ${e.target.value}`)
    };


    

    if(loading){
        return (
            <Loader/>
        )
    }

    return (
        <div className='headerContainer'>
        
            {/*     <div className='CarouselContainer'>
                 <Carrusel/> 

            </div> */} 
           {/*  <Link  to= '/videogame'>Add Videogame</Link> */}
           <br></br>
           
            <h1 className='TitleHome'>Videogames App</h1>
              {/* <div className='searchbarContainer' > */}

             <br>
             </br>
                <SearchBar
                className="Searchbar"
                setCurrentPage={setCurrentPage}
                />
                {/* </div> */}
                <br>
                </br>
                <br>
            </br>
                
            <div>
                
                
                <select className='input' onChange = { handleGen}>
                    <option value='All' key='All'>By Genres</option>
                    <option value='Action' key='Action' >Action</option>
                    <option value='Strategy' key='Strategy' >Strategy</option>
                    <option value='RPG' key='RPG' >RPG</option>
                    <option value='Shooter' key='Shooter' >Shooter</option>
                    <option value='Adventure' key='Adventure' >Adventure</option>
                    <option value='Puzzle' key='Puzzle' >Puzzle</option>
                    <option value='Racing' key='Racing' >Racing</option>
                    <option value='Sports' key='Sports' >Sports</option>
                </select>


                <select className='input' onChange = {e => {handleVid(e)}}>
                    <option value = 'All'>By Platform</option>
                   {
                     
                  
                       

                     allPlatforms && allPlatforms?.map(el => {
                        return (
                            <option value={el} key={el} > {el} </option>
                        )
                     })
                   }
                </select>


                <select className='input' onChange = {e => {handleAlpha(e)}}>
                   <option value = ''>Alphabetical</option>
                   <option value = 'asc'>Ascendent</option>
                   <option value = 'desc'>Descendent</option>
                </select>
                <select className='input' onChange = {e => {handleRating(e)}}>
                    <option value = ''>Rating</option> 
                    <option value = 'asc'>Ascendent</option>
                    <option value = 'desc'>Descendent</option>
                </select>
                <br>
                </br>
                
                <br>
                </br>
            <button className='RefreshBtn' onClick={e=> {handleRefresh(e)}}>
                Refresh
            </button>
            </div>
                <br>
                </br>
            <br>
            </br>
           
            
            
            <div className='Container'>
            
            <hr className='separador'>
            </hr>
           {/*  <div>
                <Navbar/>
            </div> */}
            <br>
            </br>
            {
             allVideogames.length>1 ? 
            <div    className='Cards'>{
                    allVideogames?.slice(indexOfFirstVideogame, indexOfLastVideogame) && allVideogames?.slice(indexOfFirstVideogame, indexOfLastVideogame).map( el => {
                        return(
                            <div className='CardContainer' key={el.id}>
                              { 
                                 <Card
                                 id = { el.id }
                                 image={el.image} 
                                 name={el.name}
                                 released={el.released}
                                 rating={el.rating}  
                                 />
                                } 
                             
                                
                          </div>
                    )})
                }</div> :  
               
                    <div    className='Cards1'>{
                        allVideogames?.slice(indexOfFirstVideogame, indexOfLastVideogame) && allVideogames?.slice(indexOfFirstVideogame, indexOfLastVideogame).map( el => {
                            return(
                                <div className='CardContainer' key={el.id}>
                                  { 
                                     <Card
                                     id = { el.id }
                                     image={el.image} 
                                     name={el.name}
                                     released={el.released}
                                     rating={el.rating}  
                                     
                                     />
                                    } 
                                 
                                    
                              </div>
                        )})
                    }</div>
               }
                
                    <hr className='separador'>
                    </hr>
                    <br>
                    </br>
                    <br>
                    </br>
                
                    <br>
                    </br>
                    <br>
                    </br>
                <div>
                <Paginado
                videogamesPerPage={ videogamesPerPage }
                allVideogames={ allVideogames?.length } 
                paginado= {pagination} 
                
                
                />
                </div>
            </div>
           
        </div>

    )
};

