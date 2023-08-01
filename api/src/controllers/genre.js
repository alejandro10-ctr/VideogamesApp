
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const { Videogame, Genero } = require("../db")
const axios = require('axios')
const {API} = process.env
const AllVideogames = require('./videogames')



const getGenre = async ( req, res ) => {
    

    //const allVids = await AllVideogames();

   // console.log(allVids)

  // const apiCall = await axios.get(`https://api.rawg.io/api/genres?key=${API}`)
 
 
 // const genreName =apiCall.data.results.map( element => {
  //  element.name         
//} ); 
 
// console.log("esto es genreName",genreName)
 /* const genreApi = genreName.map( element => {
       element.name         
 } );
 */

/*  const genreDb = genreName.forEach(async (g) => {
    await Genero.findOrCreate({
        where: {
            name: g.name,
        }
    })

 }); */

 //const allGenres = await Genero.findAll();
 //const allGenres = genreApi.concat(genreDb)
 //return res.status(200).json(genreName)
//console.log(genreName)
    
/*    const apiCall = await axios.get(`https://api.rawg.io/api/genres?key=${API}`)
const response = await apiCall.data
console.log(response) */
/*  
const axiosInstance = axios.create({
  // Configura un tiempo de espera de 10 segundos (10000 milisegundos)
  timeout: 10000
});

      // Realiza una solicitud POST con una opción de tiempo de espera personalizada
      const apiCall = axiosInstance.get(`https://api.rawg.io/api/genres?key=${API}`, data, {
        timeout: 15000 // Aumenta el tiempo de espera a 15 segundos para esta solicitud en particular
      })
      .then(response => {
        // La solicitud se completó correctamente
        return response.data;
      })
      .catch(error => {
        // Ocurrió un error durante la solicitud
        if (error.code === 'ECONNRESET') {
          console.error('Error de conexión: la solicitud tardó demasiado en completarse.');
        } else {
          console.error('Error:', error.message);
        }
      });
      */
     try{ 

        
        const apiCall = axios.get(`https://api.rawg.io/api/genres?key=${API}`) 
        console.log(apiCall)    

    const response = await apiCall.data; 
    console.log(response)
    const genres = [];
    const consult = await response.results.map(item =>  {
      genres.push({
        id: item.id,
        name : item.name,
        
        
      })
    })
     return genres;
    
}catch(error) {
   console.log(error, "Error en generos")
} 

 
     const queryy = req.query.match

    if (!queryy ){
        return genres
    } else {
       const querymatch = Genero.findAll({
        where: {
            name: {
                [ Op.iLike ] : `% ${ genres.name } %`
            },
        },
        include : Videogame
       });
       if (genres.length < 0){
        return res.status(404).json({error: "Genre not found"})
       }
       return res.status(200).json(querymatch)
    } 
 

 
    
  
   
  /*   try {let videogamesTotal = await getAllVideogames()
    const genres =  videogamesTotal.map(el => el.genres)
    const genreEach = genres.map(el => {
        for(let i=0; i<el.length; i++) return el[i]
    })
    genreEach.forEach(el => {
        Genero.findOrCreate({
            where: { name: el }
        })
    })
    const allGenres = await Genero.findAll();
    res.send(allGenres)
}catch(error){
     console.log(error)
} 
 */
};


module.exports = {
    getGenre
}