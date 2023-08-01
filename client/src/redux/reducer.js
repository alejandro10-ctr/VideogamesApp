import {GET_VIDEOGAMES, 
    SEARCH_BY_NAME,
    FILTER_BY_GENRES, 
    FILTER_CREATED, 
    ORDER_BY_NAME,ORDER_BY_RATING,
    GET_NAME_VIDEOGAMES,
    GET_GENRES,
    POST_VIDEOGAME,
    GET_DETAIL, 
    FILTER_BY_PLATFORM,
    GET_PLATFORMS} from "./actions"


const initialState = {
    videogames : [],
    allVideogames : [],
    genres: [],
    platforms: [],
    detail: []
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_VIDEOGAMES:
            return{
                ...state,
                videogames: action.payload,
                allVideogames: action.payload
            }
        
        case SEARCH_BY_NAME:
                
            return{
                    ...state,
                    allVideogames: action.payload
                    
                } 

        case FILTER_BY_GENRES:
                const allVideogames = state.allVideogames
                // console.log(action.payload)
                return{
                    ...state,
                    videogames: action.payload === 'All' ? allVideogames : action.payload,
                    allVideogames: action.payload === 'All' ? allVideogames : action.payload
                }

                case GET_PLATFORMS:
                    const alvids = state.allVideogames;
                  
                    const allPlatform = alvids.map(item => item.platforms)
   // console.log(allPlatform)
    const platSet0 =([allPlatform.map(el => el)])
    //console.log(platSet)
    
    const platSet1 = platSet0.map(el => el)
    //console.log(platSet1[0])
    
    const platSet2 = platSet1[0].map(el => el)
   // console.log(platSet2)
   
    const platSet = Array.from(platSet2).flat()

    const uniqueSet = new Set(platSet)
    const allPlats = [...uniqueSet]


                    return{
                        ...state,
                        platforms:allPlats,
                        
                    }


                case FILTER_BY_PLATFORM:
                const alVideogames = state.allVideogames
                 console.log(action.payload)
                return{
                    ...state,
                    videogames: action.payload === 'All' ? alVideogames : alVideogames.filter(el => el.platforms.includes(action.payload)),
                    allVideogames: action.payload === 'All' ? alVideogames : alVideogames.filter(el => el.platforms.includes(action.payload))
                }

        case FILTER_CREATED:
               // const allVideogames = state.allVideogames
                const createdFilter = action.payload === 'created' ? state.allVideogames.filter( el => el.createdInDb) : state.allVideogames.filter( el => !el.createdInDb) 
                return{
                    ...state,
                    videogames: action.payload === 'All' ? state.allVideogames : createdFilter
                }
                
                
                
        case ORDER_BY_NAME:
                 let sortedArr = action.payload === 'asc' ?
                state.videogames.sort(function (a, b){
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                    return 0;
                })  :
                state.videogames.sort(function (a, b){
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;  
                }) 
                return {
                    ...state,
                    videogames: sortedArr
                }  
        case ORDER_BY_RATING:
                let Arr = action.payload === 'desc' ?
                state.videogames.sort(function (a, b){
                    if (a.rating > b.rating) {
                        return 1;
                    }
                    if (b.rating > a.rating) {
                        return -1;
                    }
                    return 0;
                })  :
                state.videogames.sort(function (a, b){
                    if (a.rating > b.rating) {
                        return -1;
                    }
                    if (b.rating > a.rating) {
                        return 1;
                    }
                    return 0;  
                })
                return {
                    ...state,
                    videogames: Arr
                }  
                
        case GET_NAME_VIDEOGAMES:
                    return {
                        ...state,
                        videogames: action.payload
                    }    
        case GET_GENRES:
                return {
                    ...state,
                    genres: action.payload

                }        
        case POST_VIDEOGAME:
                return {
                    ...state,
                }
        case GET_DETAIL:
                return {
                    ...state,
                    detail: action.payload 
                }    

        default: 
            return state;    
    }

};


export default rootReducer