
import axios from 'axios';




export const GET_VIDEOGAMES = "GET_VIDEOGAMES" 
export const FILTER_BY_GENRES = "FILTER_BY_GENRES"
export const FILTER_BY_PLATFORM = "FILTER_BY_PLATFORM"
export const GET_PLATFORMS = 'GET_PLATFORMS'
export const FILTER_CREATED = "FILTER_CREATED" 
export const ORDER_BY_NAME = "ORDER_BY_NAME"
export const ORDER_BY_RATING ="ORDER_BY_RATING"
export const GET_NAME_VIDEOGAMES ="GET_NAME_VIDEOGAMES"
export const GET_GENRES = "GET_GENRES"
export const POST_VIDEOGAME ="POST_VIDEOGAME"
export const GET_DETAIL = "GET_DETAIL"
export const SEARCH_BY_NAME = "SEARCH_BY_NAME"






export function getVideogames(){
    return async function(dispatch){
       try{ 
       const res = await axios.get('http://localhost:3001/home')
       
       return dispatch({
           type: GET_VIDEOGAMES,
           payload: res.data,
           videogames: res.data,
           allVideogames: res.data
        })
      }catch(error){
        console.log('Error en getVideogames, no esta llegando la data')
      }
    }
    
};

export function searchByName(name){
/*     return async function(dispatch){
    try{  
      const response = await axios.get('http://localhost:3001/?name=' + name)
       */
      return /* dispatch */ ({
          type: SEARCH_BY_NAME,
          payload: name
        })
   /*  }catch(error){
        console.log(error, "Error en Busqueda por nombre!!")
      }
  } */
};

export function filterByGenres(payload){
    
    return {
        type: FILTER_BY_GENRES,
        payload
    }
};

export function getPlatforms(payload){
    
    return {
        type: GET_PLATFORMS,
        platforms: payload
    }
};


export function filterByPlatform(payload){
    
    return {
        type: FILTER_BY_PLATFORM,
        payload
    }
};


export function filterCreated(payload){
    return {
        type: FILTER_CREATED,
        payload
    }
}

export function orderByName(payload){
    return {
        type: ORDER_BY_NAME,
        payload
    }
} 

export function orderByRating(payload){
    return {
        type: ORDER_BY_RATING,
        payload
    }
}

/* export function getNameVideogames(name){
    return{
        
            
            
                 type: GET_NAME_VIDEOGAMES,
                 payload,
            
      
    }
} */

export function getGenres(payload){
    
        return ({ 
            type: GET_GENRES,
            genres: payload
        })
    
};

export function postVideogame(payload){
    return async function(dispatch){
        const info = await axios.post('http://localhost:3001/videogame', payload);
        return ({
            type: POST_VIDEOGAME,
            videogames: info
        })
    }
};

export function getDetail(id){
   
    
    return async function (dispatch){
        try{
            const json = await axios.get(`http://localhost:3001/:id=` + id);
            return dispatch({
                type: GET_DETAIL,
                payload: json.data
                
            })
        }catch(error){
            console.log(error)
        }
    }
};