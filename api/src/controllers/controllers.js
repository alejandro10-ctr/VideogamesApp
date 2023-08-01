const { Router } = require('express');
const { Videogame, Genero } = require('../db');
const express = require('express')
const axios = require('axios')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


const {API} = process.env

  
//const {YOUR_API_KEY} = require('dotenv')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);





const getApiInfo = async () => {
    
    const apiUrl1 = await axios.get(`https://api.rawg.io/api/games?key=${API}`)
    const apiUrl2 = await axios.get(`https://api.rawg.io/api/games?key=${API}&page=2`)
    const apiUrl3 = await axios.get(`https://api.rawg.io/api/games?key=${API}&page=3`)
    const apiUrl4 = await axios.get(`https://api.rawg.io/api/games?key=${API}&page=4`)
    const apiUrl5 = await axios.get(`https://api.rawg.io/api/games?key=${API}&page=5`)
    
   /* const apiResults =  apiUrl1.data.results */ /*.concat(apiUrl2.data.results , apiUrl3.data.results, apiUrl4.data.results, apiUrl5.data.results) */
 /*    const  apiResults = async()=> await Promise.allSettled([apiUrl1, apiUrl2, apiUrl3, apiUrl4, apiUrl5])
    .then(result => console.log(result)) .then(error => console.log(error)) ; */

//  const apiResults = await axios.get(`https://api.rawg.io/api/games?key=${API}`)



//  const genreResults = await axios.get(`https://api.rawg.io/api/genres?key=${API}`)


  /*   const  apiResults = async()=> await Promise.all(apiUrl1, apiUrl2, apiUrl3, apiUrl4, apiUrl5)
  .then(result => result.json()) .then(error => console.log(error)); */

    
   // console.log(typeof(API))
   // console.log(typeof(`https://api.rawg.io/api/games?key=${API}`))
    
  // console.log('esto es API RESULTS:', apiResults)
    
    try{
        const subConsult1 = await apiUrl1.data.results;
        const subConsult2 = await apiUrl2.data.results;
        const subConsult3 = await apiUrl3.data.results;
        const subConsult4 = await apiUrl4.data.results;
        const subConsult5 = await apiUrl5.data.results;

        

        const videogames = [];
        
            const res1 =  subConsult1.map(el => {
                    videogames.push     
                ({
                    id: el.id,
                    name: el.name,
                    released: el.released,
                    rating: el.rating,
                    image: el.background_image,
                    platforms: el.platforms.map(el => el.platform.name),
                    genres : el.genres.map(e => e.name),
                    
                    
                })
            })
            
            const res2 =  subConsult2.map(el => {
              videogames.push     
          ({
              id: el.id,
              name: el.name,
              released: el.released,
              rating: el.rating,
              image: el.background_image,
              platforms: el.platforms.map(el => el.platform.name),
              genres : el.genres.map(e => e.name),
              
              
          })
      })

      const res3 =  subConsult3.map(el => {
        videogames.push     
    ({
        id: el.id,
        name: el.name,
        released: el.released,
        rating: el.rating,
        image: el.background_image,
        platforms: el.platforms.map(el => el.platform.name),
        genres : el.genres.map(e => e.name),
        
        
    })
})

const res4 =  subConsult4.map(el => {
  videogames.push     
({
  id: el.id,
  name: el.name,
  released: el.released,
  rating: el.rating,
  image: el.background_image,
  platforms: el.platforms.map(el => el.platform.name),
  genres : el.genres.map(e => e.name),
  
  
})
})
             
const res5 =  subConsult5.map(el => {
  videogames.push     
({
  id: el.id,
  name: el.name,
  released: el.released,
  rating: el.rating,
  image: el.background_image,
  platforms: el.platforms.map(el => el.platform.name),
  genres : el.genres.map(e => e.name),
  
  
})
})
             return videogames; 
      
        
        
    }catch(e){
        console.log(e)
    }
    
   
}


/*const saveInfoinDb = async () => {

    
// ejemplo de ChatGPT para llenar las tablas de la Database

 const { Client } = require('pg');
const axios = require('axios');

// Configuración de la conexión a la base de datos PostgreSQL
const dbConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'videogame_genero',
  password: 'password',
  port: 5432, // Puerto por defecto de PostgreSQL
};

// URL de la API
const apiUrl = `https://api.rawg.io/api/games?key=${API}`;

// Función para guardar los datos en la base de datos
async function guardarDatosEnBD() {
  try {
    // Conexión a la base de datos
    const client = new Client(dbConfig);
    await client.connect();

    // Obtener los datos de la API
    const response = await axios.get(apiUrl);
    const datos = response.data;

    // Insertar los datos en la base de datos
    for (const dato of datos) {
      const { id, name, released, rating, platforms, images } = dato;
      const query = `INSERT INTO videogame_genero (id, name,  released, rating, platforms, image) VALUES ($1, $2, $3, $4, $5, $6, $6)`;
      await client.query(query, [id, name, released, rating, platforms, images]);
    }

    // Cerrar la conexión a la base de datos
    await client.end();

    console.log('Los datos se han guardado correctamente en la base de datos.');

  } catch (error) {
    console.error('Error al guardar los datos:', error);
  }
}

// Llamar a la función para guardar los datos en la base de datos
guardarDatosEnBD();

} */


 
const getDbInfo = async () => {
    return await Videogame.bulkCreate({
        include: { 
        model: Genero,
        attributes: ['name'],
        through: {
            attributes: [],
        },
       }
    })
}

 


const getAllVideogames = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    
    return infoTotal;
}

module.exports = {
    getAllVideogames
}