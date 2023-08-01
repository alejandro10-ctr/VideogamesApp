
const { Router } = require('express');
const { Videogame } = require('../db');


const Sequelize = require('sequelize');



const { AllVideogames,  ByName,  ById, createVideogame, dbVideogames } = require('../controllers/videogames')


const router = Router()







router.get("/home", AllVideogames);

router.get("/?name=", ByName); 

router.get("/:id", ById);

router.post('/videogame', createVideogame);

//router.get('/bulk', dbVideogames)
router.get('/', async (req, res) => {

    const vidgames = await AllVideogames();
     
  await Videogame.bulkCreate(vidgames);
  res.send('Datos de la api cargados correctamente');
});




module.exports = router












